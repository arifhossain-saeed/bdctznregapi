/*
* EntryController
* This is the entrance to the Server APIs
*
*/

// Imports - Core
import validationResult from 'express-validator';


// Imports - Custom Codes
import ServerError from "../libs/helpers/ServerError.js";
import CodeGenerator from "../libs/utilities/Generator.js";
import SmsGenerator from "../libs/utilities/SmsGenerator.js";
import EmailGenerator from "../libs/utilities/EmailGenerator.js";
import CitizenBio from "../models/CitizenBio.js";


// Create A Container for the Controller
const EntryController = {};


// Global Variables
const GlobalVars = {};
GlobalVars.OTP = "";


// All methods of Entry Controller

// Index Method
EntryController.index = (req, res) => {
    // Show Citizen Searching or Creating Form or Admin Login Form
    return res.json({message: "Welcome to Bangladesh Citizen Registry Application"});
}

// GetCitizen Method - Citizen Entry Point
EntryController.getCitizen = async (req, res) => {
    try {
        // Receive formData
        // const { from, to} = req.body;


        // Get NID Number and Cell Phone Number
        const {nid, phone} = req.body;

        // Check if the data exists in the collections
        
        const existingCitizen = await CitizenBio.findOne({...req.body}).select('-__v');
        res.status(200).json(existingCitizen);

        // @TODO - Remove Comments from code when ready
        // Generate OTP, Send OTP and store OTP to GlobalVars.OTP
        // GlobalVars.OTP = CodeGenerator.OTPGenerator(8);
        // console.log(GlobalVars.OTP);
        // setTimeout(function () {
        //     GlobalVars.OTP = "";
        //     console.log('Time Up', GlobalVars.OTP);
        // }, 10000);
        // const toNumber = to.substr(0,5) + "xxxxx" + to.substr(10, 3);
        // const msgForFrontEnd = `We have sent an 8 digit OTP to the number ${toNumber}.`;
        // const text = `Please enter the following OTP ${GlobalVars.OTP} within 30 Seconds before it expires.`;
        // console.log(text);
        // SmsGenerator.sendSms(from, to, text); // SMS SENDING CODE


        // Send OTP to Email Address - @TODO THIS BLOCK OF CODE WILL BE MOVED TO A DIFFERENT CONTROLLER

        // Get data from the request
        // const {mailReceiver, mailCc, mailBcc, mailSubject, mailText, mailAttachment} = req.body;
        // let mailHtml = "";
        // mailHtml += "<body><h1>This is just a test email...</h1><p></p></body>";
        //
        // EmailGenerator.sendEmail(mailReceiver, mailCc, mailBcc, mailSubject, mailText, mailHtml, mailAttachment);

        // @TODO ^ THIS BLOCK OF CODE WILL BE MOVED TO A DIFFERENT CONTROLLER


        // Trigger OTP Modal and Start Countdown Timer for OTP; 30 seconds @TODO - This will be done from frontend

        // If OTP not given in 30 seconds, activate OTP resend button @TODO - This will be done from frontend

        // If Modal Closed without giving OTP, take back to home page @TODO - This will be done from frontend


        // return res.json({message: "OTP Sent"});
    } catch (err) {
        res.json({message: err.message});
    }
}



// VerifyCitizen Method - Verifies The Citizen Using OTP
EntryController.verifyCitizen = (req, res) => {
    // Get the OTP from Modal and Cross Check with Stored GlobalVars.OTP

    // If OTP match
    console.log(GlobalVars.OTP);
    // Look for the given NID number and Mobile Number in Database

    // If in database generate link to the record and display

    // ELSE Start Creating a New Record

    // IF OTP MisMatch ask for valid phone number or inform to input OTP before expiry and reactivate OTP resend button

    return res.json({message: "OTP Verified"});
}


// Export the EntryController
export default EntryController;