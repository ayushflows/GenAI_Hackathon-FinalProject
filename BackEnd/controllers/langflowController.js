const axios = require('axios'); // Declare axios only once
const main = require('../api/langflow');

module.exports.langflow = async (req, res) => {
    async function fetchAndExtractTextFromPDF() {
        try {
            const flaskApiUrl = 'https://genai-hackathon-finalproject.onrender.com/submit'; // Update with your Flask API URL

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
            console.log('Extracted Text:', extractedText); // Log extracted text for debugging

            // Run the Langflow function
            let langflowOutput = await main(extractedText);
            const parsedResult = JSON.parse(langflowOutput.message.text);

            res.status(200).json({ message: 'Text fetched successfully', text: parsedResult });
        } catch (error) {
            console.error('Error fetching text from Flask API:', error.message);
            res.status(500).json({ message: 'Error fetching text from Flask API', error: error.message });
        }
    }

    fetchAndExtractTextFromPDF();
};
