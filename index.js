const express = require('express');
const dotenv = require('dotenv');

const connectToDatabase = require('./src/database/mongoose.database.js');

dotenv.config();

connectToDatabase();

const app = express();

app.get('/', (req, res) => {
    const tasks = [{ description: 'Estudar programação', isCompleted: false }];
    res.status(200).send(tasks);
});

app.listen(8000, () => console.log('Listen on port 8000'));

//WTNPmUmb3soScLuf
