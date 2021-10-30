/*
*
* All kind of code generation will done here
*
*/

// Create a container
const CodeGenerator = {};

// 8 digit random number code generator
// CodeGenerator.eightOTPGen = () => Math.floor(10000000 + Math.random() * 99999999);

// OTP Generator of Variable Length - code from mjs (stackoverflow)
CodeGenerator.OTPGenerator = (digits) => {
    let add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

    if ( digits > max ) {
        return CodeGenerator.OTPGenerator(max) + CodeGenerator.OTPGenerator(digits - max);
    }

    max        = Math.pow(10, digits + add);
    let min    = max/10; // Math.pow(10, digits) basically
    let number = Math.floor( Math.random() * (max - min + 1) ) + min;

    return ("" + number).substring(add);
}


// Export
export default CodeGenerator;