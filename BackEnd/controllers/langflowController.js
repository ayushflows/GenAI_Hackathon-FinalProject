const main = require('../api/langflow');
const chat_main = require('../api/chat');
const path = require('path');
const fs = require('fs');
const pdfParse = require('pdf-parse');

module.exports.langflow = async (req, res) => {
    const pdfFolderPath = path.join(__dirname, '../pdfs');

    const fetchAndExtractTextFromPDF = async () => {
        try {
            const files = fs.readdirSync(pdfFolderPath).filter(file => file.endsWith('.pdf'));

            if (files.length === 0) {
                return res.status(404).json({ message: 'No PDF files found in the folder.' });
            }

            const allExtractedTexts = [];

            for (const file of files) {
                const filePath = path.join(pdfFolderPath, file);
                const dataBuffer = fs.readFileSync(filePath);
                const pdfData = await pdfParse(dataBuffer);
                const stringifiedPdfData = JSON.stringify(pdfData.text); 
                const langflowOutput = await main(stringifiedPdfData);
                
                let parsedResult;
                try {
                    parsedResult = JSON.parse(langflowOutput);
                } catch (jsonError) {
                    console.error('Error parsing Langflow output:', jsonError.message);
                    continue;
                }
                
                allExtractedTexts.push({ fileName: file, text: parsedResult });
            }

            res.status(200).json({ message: 'Text fetched successfully', data: allExtractedTexts });
        } catch (error) {
            console.error('Error processing PDFs:', error.message);
            res.status(500).json({ message: 'Error processing PDFs', error: error.message });
        }
    };

    fetchAndExtractTextFromPDF();
};
