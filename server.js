/*
*
* Server entry point
*
*/

// Imports - Core
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from "dotenv";

// Addition - Config
dotenv.config();

// Imports - Custom Code [Always add .js at the end of the import file]
import apiRoutes from './routes/api.js'
import ServerError from "./libs/helpers/ServerError.js";

// Create Server
const server = express();

// Server Plugins
server.use(morgan('dev'));
server.use(bodyParser.json({limit: "50mb", extended: true}))
server.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
server.use(cors());



// Server Routes - API Routes

server.use(apiRoutes);

// Default Error Handler when the requested route is non-existent
server.use((req, res, next) => {
    throw new ServerError(404, "Could not find the route you are looking for");
});

const PORT = process.env.PORT || 5000;

// Add database connection and start server
mongoose.connect("mongodb+srv://bdadmin:T42oKpV0m3RJEaUd@clusternode.llqaj.mongodb.net/CitizenRegistry?retryWrites=true&w=majority")
    .then(() =>  {
        server.listen(PORT);
        console.log(`Database Connected and Server is up at port ${PORT}`);
    })
    .catch(err => console.log(err));