const express = require('express');
const cors = require('cors');

const app = express();
const PORT_NUMBER = 3000;

app.use(cors());

app.get('/greeting', (req, res) => {

    const messageData = {
        message: 'Hello Express!',
        author: 'Yorch',
        date: new Date()
    }

    res.status(200).json(messageData);
});

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
});