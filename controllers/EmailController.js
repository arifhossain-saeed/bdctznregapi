/*
* Email Sender
* Email Sending Utility
*
*/

// Imports - Core
import nodemailer from 'nodemailer';
import dotenv from "dotenv";

// Addition - Config
dotenv.config();

// Imports - Custom Codes

// Create Container
const EmailController = {};

// Create Transporter - Gmail
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Generate mail options
function generateMailOptions(formData) {
    const mailOptions = {};
    if(formData.mailSender) mailOptions.from = formData.mailSender;
    if(formData.mailReceiver) mailOptions.to = formData.mailReceiver;
    if(formData.mailCc) mailOptions.cc = formData.mailCc;
    if(formData.mailBcc) mailOptions.bcc = formData.mailBcc;
    if(formData.mailSubject) mailOptions.subject = formData.mailReceiver;
    if(formData.mailText) mailOptions.text = formData.mailText;
    if(formData.mailAttachment) mailOptions.attachment = formData.mailAttachment;

    return mailOptions;
}



// Get Mail Options and Send Email
EmailController.sendEmail = (req, res) => {
    // Get data from the request
    const { formData } = req.body;
    try {
        const mailOptions = generateMailOptions(formData);
        transporter.sendMail(mailOptions)
            .then(res => { console.log(res)})
            .catch(err => console.log(err));
    }catch(error) {
        res.send(error);
    }
}

// Export
export default EmailController;
