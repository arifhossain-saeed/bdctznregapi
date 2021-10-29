/*
*
* Api routes will only serve the API endpoint calls. All the API routes will be here
*
*/

// Imports - Core
import express from 'express';

// Imports - Controllers
const apiRouter = express.Router();

// First Test Route
apiRouter.get('/test', (req, res) => {
    res.send("Hurray! The Server is UP!");
});

// Routes - HomeController routes


// Export Routes
export default apiRouter;