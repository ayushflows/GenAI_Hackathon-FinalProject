import time
import os
import tempfile
import pdfplumber
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

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['GET', 'POST'])
def get_astrology_report():
    # Correct the download directory setup
    download_dir = os.getcwd()  # Ensure we're using the correct current working directory

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
        driver.get("https://www.astrosage.com/free/free-life-report.asp")

        # Wait for the page to load
        time.sleep(2)

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

        # Select Ayanamsa
        Select(driver.find_element(By.ID, "ayanamsa")).select_by_visible_text(inputs["input_ayanamsa"])

        # Select Charting Type
        Select(driver.find_element(By.ID, "charting")).select_by_visible_text(inputs["input_charting"])

        # Submit the form
        driver.find_element(By.NAME, "submit").click()

        # Wait for the download link and click to download PDF
        time.sleep(5)
        download_link = driver.find_element(By.CSS_SELECTOR, "a[href='vedic-chart-pdf.jsp']").click()

        # Wait for the PDF to be downloaded
        time.sleep(10)  # Adjust this depending on network speed and file size

        # Check the download directory to ensure the file is downloaded
        downloaded_files = os.listdir(download_dir)
        text = ""
        for file in downloaded_files:
            if file.endswith('.pdf'):
                pdf_file_path = os.path.join(download_dir, file)
                with pdfplumber.open(pdf_file_path) as pdf:
                    for page in pdf.pages:
                        text += page.extract_text()

        # Return the extracted text as a JSON response
        print("Extracted text:", text)
        return jsonify({"extracted_text": text})

    finally:
        # Close the browser
        driver.quit()

if __name__ == '__main__':
    app.run(debug=True)
