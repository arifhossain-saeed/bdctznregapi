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
EntryController.getCitizen = (req, res) => {
    // Get NID Number and Cell Phone Number

    // Generate OTP, Send OTP and store OTP to GlobalVars.OTP
    GlobalVars.OTP = CodeGenerator.eightOTPGen();
    console.log(GlobalVars.OTP);
    setTimeout(function () {
        GlobalVars.OTP = "";
        console.log('Time Up', GlobalVars.OTP);
    }, 35000);

    // Trigger OTP Modal and Start Countdown Timer for OTP; 30 seconds

    // If OTP not given in 30 seconds, activate OTP resend button

    // If Modal Closed without giving OTP, take back to home page


    return res.json({message: "OTP Sent"});
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