require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();  

const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.listen(port, () => {
    console.log(`Serveris veikia Port ${port}`);
});