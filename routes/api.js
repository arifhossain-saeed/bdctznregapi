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

apiRouter.get('/favicon.ico', (req, res) => res.status(204));
apiRouter.get('/', (req, res) => res.send("<h2>BDCTZNREGAPI Application Started. Please go through proper links to get data.</h2>"));
apiRouter.get('/api/v1/districts', BorderController.getDistricts);
apiRouter.get('/api/v1/sub_districts', BorderController.getSubDistricts);
apiRouter.post('/api/v1/get_citizen', EntryController.getCitizen);
apiRouter.post('/api/v1/create_citizen', CitizenController.createCitizen);
apiRouter.post('/api/v1/update_citizen', CitizenController.updateCitizen);

// Export Routes
export default apiRouter;