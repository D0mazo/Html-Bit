require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const studentRouter = require('./routes/studentRoutes.js');

const {executeQuery} = require('./helpers.js');

const app = express();  

const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    res.json({ 
        message: 'Server is Running'
    });
});

//isisdedame routus is router file
app.use('/api', studentRouter);

app.get('/test-connection', async (req,res) =>{
    const sql = "SELECT * FROM student";
    const [students, error] = await executeQuery(sql);
    res.json(students);
});

app.listen(port, () => {
    console.log(`Serveris veikia Port ${port}`);
});