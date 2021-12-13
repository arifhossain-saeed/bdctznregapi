/*
*
* Api routes will only serve the API endpoint calls. All the API routes will be here
*
*/

// Imports - Core
import express from 'express';

// Imports - Custom Codes
import EntryController from "../controllers/EntryController.js";
import BorderController from  "../controllers/BorderController.js";
import CitizenController from '../controllers/CitizenController.js';

// Imports - Controllers
const apiRouter = express.Router();

// First Test Route
apiRouter.get('/test', (req, res) => {
    res.send("Hurray! The Server is UP!");
});

// Routes - EntryController routes
// apiRouter.post('/sms_otp', EntryController.getCitizen);         // Get Citizen

apiRouter.get('/districts', BorderController.getDistricts);
apiRouter.get('/sub_districts', BorderController.getSubDistricts);
apiRouter.post('/get_citizen', EntryController.getCitizen);
apiRouter.post('/create_citizen', CitizenController.createCitizen);
apiRouter.post('/update_citizen', CitizenController.updateCitizen);

// Export Routes
export default apiRouter;