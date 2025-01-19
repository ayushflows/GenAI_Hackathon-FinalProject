require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT|| 5000 ;
const dataStaxRouter = require("./routes/astraDbRoute");
const langflowRouter = require("./routes/langflowRoute");
const homeRouter = require("./routes/home");
const chatRouter = require("./routes/chatRoute");

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:5173',
      'https://teamlogix.web.app',
    ];
    if (!origin || !allowedOrigins.includes(origin)) {
      callback(new Error('Not allowed by CORS'));
    } else {
      callback(null, true);
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRouter);
app.use("/genai" , dataStaxRouter);
app.use("/genai", langflowRouter);
app.use("/genai", chatRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
