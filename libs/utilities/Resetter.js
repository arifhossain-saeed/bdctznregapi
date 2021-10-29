/*
*
* All kind of resetting codes will be here
*
*/

// Create a container
const Resetter = {};

// Reset Variable method - after some time
Resetter.resetVar = setTimeout((givenVar) => {
    if(givenVar !== "") {
        return "";
    }
}, 30000);

// Export Resetter
export default Resetter;