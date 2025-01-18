require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT|| 5000 ;
const dataStaxRouter = require("./routes/astraDbRoute");
const langflowRouter = require("./routes/langflowRoute");
const homeRouter = require("./routes/home");
const chatRouter = require("./routes/chatRoute");

const allowedOrigins = ['http://localhost:5173', 'https://teamlogix.web.app/'];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRouter);
app.use("/genai" , dataStaxRouter);
app.use("/genai", langflowRouter);
app.use("/genai", chatRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
