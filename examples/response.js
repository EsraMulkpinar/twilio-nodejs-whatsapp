require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.post('/webhook', (req, res) => {
    const incomingMessage = req.body.Body.trim().toLowerCase();

    let responseMessage = "Mesajınızı anlayamadım.";
    if (incomingMessage === 'selam') {
        responseMessage = "Selam, nasıl yardımcı olabilirim?";
    }

    const twiml = new twilio.twiml.MessagingResponse();
    twiml.message(responseMessage);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});

app.listen(port, () => {
    console.log(`Sunucu ${port} üzerinde çalışıyor.`);
});
