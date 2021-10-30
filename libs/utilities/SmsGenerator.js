/*
* SMS Sender
* SMS Sending Utility
*
*/

// Imports - Core
import Vonage from "@vonage/server-sdk";
import dotenv from "dotenv";

// Addition - Config
dotenv.config();

// Imports - Custom Code

// Create Container
const SmsGenerator = {};

// Generate sms and send
const vonage = new Vonage({
    apiKey: process.env.SMSAPIKEY,
    apiSecret: process.env.SMSAPISECRET
});

// Process and Send SMS
SmsGenerator.sendSms =  (from, to, text) => {
    try {
        vonage.message.sendSms(from, to, text, (err, responseData) => {
            if (err) {
                console.log(err);
            } else {
                if(responseData.messages[0]['status'] === "0") {
                    console.log("Message sent successfully.");
                } else {
                    console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                }
            }
        })
    } catch (error) {
        console.log(error);
    }
}

// Export
export default SmsGenerator;