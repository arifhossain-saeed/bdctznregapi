/*
* BorderController
* This will serve all the pre-stored address related data
* like district, sub-district, police stations etc
*
*/

// Imports - Core
import validationResult from 'express-validator';

// Imports - Custom Codes
import ServerError from "../libs/helpers/ServerError.js";
import CodeGenerator from "../libs/utilities/Generator.js";
import SmsGenerator from "../libs/utilities/SmsGenerator.js";
import EmailGenerator from "../libs/utilities/EmailGenerator.js";
import District from "../models/District.js";
import SubDistrict from "../models/SubDistrict.js";

// Create A Container for the Controller
const BorderController = {};

// Return all districts
BorderController.getDistricts = async(req, res) => {
    try {
        const districts = await District.find().select('-_id').select('-__v');
        res.status(200).json(districts);
    } catch (e) {
        res.status(404).json({message: e.message});
    }
}

BorderController.getSubDistricts = async(req, res) => {
    try {
        const subDistricts = await SubDistrict.find();
        res.status(200).json(subDistricts);
    }catch (e) {
        res.status(404).json({message: e.message});
    }
}


// Export Border Controller
export default BorderController;