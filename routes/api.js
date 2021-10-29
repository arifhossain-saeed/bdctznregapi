/*
*
* Api routes will only serve the API endpoint calls. All the API routes will be here
*
*/

// Imports - Core
import express from 'express';

// Imports - Custom Codes
import EntryController from "../controllers/EntryController.js";

// Imports - Controllers
const apiRouter = express.Router();

// First Test Route
apiRouter.get('/test', (req, res) => {
    res.send("Hurray! The Server is UP!");
});

// Routes - EntryController routes
apiRouter.get('/send_otp', EntryController.getCitizen);         // Get Citizen

// Export Routes
export default apiRouter;