const path = require("path");

//Join method: Used to combine Strings
// const result = path.join("folder1", "folder2", "subfolder", "file");
// console.log(result);

//Resolve method: used to give ABSOLUTE path
// const result = path.resolve("Interviewbit", "Scaler", "SST");
// console.log(result);

//extname method: used to find the extension name of file. For eg: path.extname for f1.txt will return ".txt" in the console
// const result = path.extname("fs.js");
// console.log(result);

//basename method: Returns the last portion of the path
// const result = path.basename(path.resolve("Interviewbit", "Scaler", "SST.txt"));
// console.log(result);

// parse method: Returns the info about a file in the form of Object;
const result = path.parse(path.resolve("f3.txt"));
console.log(result);