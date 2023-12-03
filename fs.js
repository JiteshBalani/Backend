const fs = require("fs");

//Read 
const content = fs.readFileSync("f1.txt");
console.log(content.toString());

//Write
const write = fs.writeFileSync("f2.txt", "Hello from File 2");
console.log(write); //will not work as this operation writes data inside the specified file.
const write2 = fs.writeFileSync("f4.txt", "File 4 is now created!");

//Update / Append
fs.appendFileSync("f4.txt", "This is to check the append function.");


//Delete / Unlink
fs.unlinkSync("f4.txt");