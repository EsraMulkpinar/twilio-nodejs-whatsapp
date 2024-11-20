require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const twilioNumber = process.env.TWILIO_WHATSAPP_NUMBER; // Twilio WhatsApp numarası
const myNumber = process.env.MY_WHATSAPP_NUMBER; // Kendi WhatsApp numaranız

client.messages
  .create({
    from: twilioNumber,
    to: myNumber,
    body: 'Merhaba! Bu, Twilio API üzerinden gönderilen ilk WhatsApp mesajın.',
  })
  .then(message => console.log(`Mesaj gönderildi! SID: ${message.sid}`))
  .catch(error => console.error('Mesaj gönderilirken bir hata oluştu:', error));
