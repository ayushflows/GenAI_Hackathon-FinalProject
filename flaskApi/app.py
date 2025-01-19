import time
import os
import tempfile
import pdfplumber
import boto3
from flask import Flask, jsonify, render_template, request
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait

app = Flask(__name__)

# Set up the download directory
download_dir = os.getcwd()  # Correctly get the current working directory

# AWS S3 Setup
AWS_ACCESS_KEY_ID = 'AKIA6GSNG3KGJPMDGAOR'
AWS_SECRET_ACCESS_KEY = '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'
AWS_REGION = 'eu-north-1'
AWS_BUCKET_NAME = 'carnaama-glb-models'

# Initialize S3 client
s3_client = boto3.client(
    's3',
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_REGION
)

def get_user_inputs():
    # Collect inputs from the user
    inputs = {
        "input_name": request.form.get('name'),
        "input_gender": request.form.get('gender'),
        "input_day": request.form.get('day'),
        "input_month": request.form.get('month'),
        "input_year": request.form.get('year'),
        "input_hrs": request.form.get('hrs'),
        "input_mins": request.form.get('mins'),
        "input_sec": request.form.get('sec'),
        "input_place": request.form.get('place'),
        "input_ayanamsa": 'N.C.Lahiri',
        "input_charting": "North Indian"
    }
    return inputs

def upload_to_s3(file_path, bucket_name, object_name):
    """Upload file to an S3 bucket."""
    try:
        s3_client.upload_file(file_path, bucket_name, object_name)
        print(f"File uploaded to S3: {object_name}")
    except Exception as e:
        print(f"Failed to upload to S3: {e}")
        raise e

def download_from_s3(bucket_name, object_name, download_path):
    """Download file from an S3 bucket."""
    try:
        s3_client.download_file(bucket_name, object_name, download_path)
        print(f"File downloaded from S3: {object_name}")
    except Exception as e:
        print(f"Failed to download from S3: {e}")
        raise e


@app.route('/submit', methods=['GET', 'POST'])
def get_astrology_report():
    # Set up Chrome options
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--headless")  # Run in headless mode for automation

    # Use a temporary user-data directory
    temp_dir = tempfile.mkdtemp()
    chrome_options.add_argument(f"--user-data-dir={temp_dir}")

    chrome_options.add_experimental_option("prefs", {
        "download.default_directory": download_dir,
        "download.prompt_for_download": False,
        "download.directory_upgrade": True,
        "safebrowsing.enabled": True,
    })

    # Set up the web driver with Chrome options
    driver = webdriver.Chrome(options=chrome_options)

    try:
        # Collect user inputs
        inputs = get_user_inputs()
        if not inputs["input_name"] or not inputs["input_gender"] or not inputs["input_place"]:
            return jsonify({"error": "Name, gender, and place of birth are required fields."}), 400

        driver.get("https://www.astrosage.com/free/free-life-report.asp")

        # Wait for the page to load
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "Name")))

        # Fill in the Name field
        driver.find_element(By.ID, "Name").send_keys(inputs["input_name"])

        # Select Gender
        gender = "Male" if inputs["input_gender"] == "Male" else "Female"
        Select(driver.find_element(By.ID, "sex")).select_by_visible_text(gender)

        # Enter Date (DD/MM/YYYY)
        driver.find_element(By.ID, "Day").send_keys(inputs["input_day"])
        driver.find_element(By.ID, "Month").send_keys(inputs["input_month"])
        driver.find_element(By.ID, "Year").send_keys(inputs["input_year"])

        # Enter Time (24-hour format)
        driver.find_element(By.ID, "Hrs").send_keys(inputs["input_hrs"])
        driver.find_element(By.ID, "Min").send_keys(inputs["input_mins"])
        driver.find_element(By.ID, "Sec").send_keys(inputs["input_sec"])

        # Enter Place of Birth
        driver.find_element(By.ID, "place").send_keys(inputs["input_place"])
        wait = WebDriverWait(driver, 10)
        filtered_options = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, ".ac_results li")))

        if filtered_options:
            filtered_options[0].click()
        else:
            return jsonify({"error": "Failed to select the place. Please check your input."}), 400

        # Select Ayanamsa
        Select(driver.find_element(By.ID, "ayanamsa")).select_by_visible_text(inputs["input_ayanamsa"])

        # Select Charting Type
        Select(driver.find_element(By.ID, "charting")).select_by_visible_text(inputs["input_charting"])

        # Submit the form
        driver.find_element(By.NAME, "submit").click()

        # Wait for the download link and click to download PDF
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "a[href='vedic-chart-pdf.jsp']"))).click()

        # Wait for the PDF to be downloaded
        time.sleep(5)  # Adjust this depending on network speed and file size

        # Check the download directory to ensure the file is downloaded
        downloaded_files = os.listdir(download_dir)
        pdf_file_path = None
        for file in downloaded_files:
            if file.endswith('.pdf'):
                pdf_file_path = os.path.join(download_dir, file)
                break

        if not pdf_file_path:
            return jsonify({"error": "Failed to download the PDF."}), 500

        # Upload the PDF to S3
        s3_pdf_object_name = "pdfs/astrology_report.pdf"
        upload_to_s3(pdf_file_path, AWS_BUCKET_NAME, s3_pdf_object_name)

        # Download the PDF from S3 to extract text
        download_path = os.path.join(download_dir, "downloaded_astrology_report.pdf")
        download_from_s3(AWS_BUCKET_NAME, s3_pdf_object_name, download_path)

        # Extract text from the downloaded PDF
        text = ""
        with pdfplumber.open(download_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text()

        if not text:
            return jsonify({"error": "Failed to extract text from the downloaded PDF."}), 500

        # Return the extracted text as a JSON response
        return jsonify({"extracted_text": text})

    except Exception as e:
        print("Error occurred:", str(e))
        return jsonify({"error": "An unexpected error occurred.", "details": str(e)}), 500

    finally:
        # Close the browser
        driver.quit()

if __name__ == '__main__':
    app.run(debug=True)
