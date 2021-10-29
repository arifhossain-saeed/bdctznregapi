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
const SmsController = {};

// Generate sms and send
const vonage = new Vonage({
    apiKey: process.env.APIKEY,
    apiSecret: process.env.APISECRET
});

// Process and Send SMS
SmsController.sendSms =  (req, res) => {
    const { formData } = req.body;

    try {
        vonage.message.sendSms(formData.from, formData.to, formData.text, (err, responseData) => {
            if (err) {
                console.log(err);
            } else {
                if(responseData.messages[0]['status'] === "0") {
                    console.log("Message sent successfully.");
                    res.send("Success! SMS Sent!");
                } else {
                    console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                    res.send(responseData.messages[0]['error-text']);
                }
            }
        })
    } catch (error) {
        res.json({message: error});
    }
});

// Export
export default SmsController;