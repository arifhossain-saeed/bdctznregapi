/*
*
* All kind of code generation will done here
*
*/

// Create a container
const CodeGenerator = {};

// 8 digit random number code generator
CodeGenerator.eightOTPGen = () => Math.floor(10000000 + Math.random() * 99999999);


// Export
export default CodeGenerator;