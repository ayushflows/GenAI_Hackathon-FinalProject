const axios = require('axios');
const main = require('../api/langflow');

module.exports.langflow = async (req, res) => {
    async function fetchAndExtractTextFromPDF() {
        try {
            const flaskApiUrl = 'https://genai-hackathon-finalproject.onrender.com/submit';

            // Data to send in the POST request body
            const requestData = {
                name: req.body.name,
                gender: req.body.gender,
                day: req.body.day,
                month: req.body.month,
                year: req.body.year,
                hrs: req.body.hrs,
                mins: req.body.mins,
                sec: req.body.sec,
                place: req.body.place
            };

            const response = await axios.post(flaskApiUrl, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const extractedText = response.data.extracted_text;
            let langflow_output = await main(extractedText);
            parsedResult = JSON.parse(langflow_output.message.text);
            res.status(200).json({ message: 'Text fetched successfully', text: parsedResult });
        } catch (error) {
            console.error('Error fetching text from Flask API:', error.message);
            res.status(500).json({ message: 'Error fetching text from Flask API', error: error.message });
        }
    }

    fetchAndExtractTextFromPDF();
};

const axios = require('axios');

module.exports.langflow = async (req, res) => {
    async function fetchAndExtractTextFromPDF() {
        try {
            // Flask API endpoint
            const flaskApiUrl = 'http://127.0.0.1:5000/submit';

            // Data to send in the POST request body
            const requestData = {
                name: req.body.name,
                gender: req.body.gender,
                day: req.body.day,
                month: req.body.month,
                year: req.body.year,
                hrs: req.body.hrs,
                mins: req.body.mins,
                sec: req.body.sec,
                place: req.body.place
            };

            // Send a POST request to the Flask API with data in the body
            const response = await axios.post(flaskApiUrl, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Extract the text from the Flask response
            const extractedText = response.data.extracted_text;

            // Log the extracted text to the terminal
            console.log('Extracted Text:', extractedText);

            // Optionally, send the response back to the client
            res.status(200).json({ message: 'Text fetched successfully', text: extractedText });
        } catch (error) {
            console.error('Error fetching text from Flask API:', error.message);
            res.status(500).json({ message: 'Error fetching text from Flask API', error: error.message });
        }
    }

    fetchAndExtractTextFromPDF();
};
