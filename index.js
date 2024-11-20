require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_WHATSAPP_NUMBER;
const myNumber = process.env.MY_WHATSAPP_NUMBER;

console.log("Twilio Account SID:", accountSid);
console.log("Auth Token:", authToken);
console.log("Twilio WhatsApp Number:", twilioNumber);
console.log("My WhatsApp Number:", myNumber);
