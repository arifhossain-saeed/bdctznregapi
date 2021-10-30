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
const EmailGenerator = {};

// Create Transporter - Gmail
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Generate mail options
function generateMailOptions(mailReceiver, mailCc, mailBcc, mailSubject, mailText, mailHtml, mailAttachment) {
    const mailOptions = {};
    mailOptions.from = process.env.EMAIL;
    if(mailReceiver) mailOptions.to = mailReceiver;
    if(mailCc) mailOptions.cc = mailCc;
    if(mailBcc) mailOptions.bcc = mailBcc;
    if(mailSubject) mailOptions.subject = mailReceiver;
    if(mailText) mailOptions.text = mailText;
    if(mailHtml) mailOptions.html = mailHtml;
    if(mailAttachment) mailOptions.attachment = mailAttachment;

    console.log(mailOptions);

    return mailOptions;
}

// Get Mail Options and Send Email
EmailGenerator.sendEmail = (mailReceiver, mailCc, mailBcc, mailSubject, mailText, mailHtml, mailAttachment) => {
    try {
        const mailOptions = generateMailOptions(mailReceiver, mailCc, mailBcc, mailSubject, mailText, mailHtml, mailAttachment);
        transporter.sendMail(mailOptions)
            .then(res => { console.log(res)})
            .catch(err => console.log(err));
    }catch(error) {
        console.log(error);
    }
}

// Export
export default EmailGenerator;
