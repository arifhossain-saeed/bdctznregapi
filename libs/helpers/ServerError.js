/*
* Errors returned from server side
*
* */

class ServerError extends Error {
    constructor(errorCode, message) {
        super(message); // Add a "message" for error
        this.code = errorCode; // Adds a "code" property
    }
}

export default ServerError;