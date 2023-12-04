// In this file we are writing the code to solve the exercise

// The exercise is to copy the content of file "source-file.txt" inside source folder to "dest-file.txt" file inside the destination folder.

const fs = require("fs");
const path = require("path");

//Creating paths for bith the files
const sourceFilePath = path.resolve("source/source-file.txt");
const destFilePath = path.resolve("destination/dest-file.txt");

//Creating readStream to read from the file "source-file.txt"
const readStream = fs.createReadStream(sourceFilePath);

//Creating writeStream to write inside "dest-file.txt" file
const writeStream = fs.createWriteStream(destFilePath);

//Pipe the data from the source file to the destination file
readStream.pipe(writeStream);

//The script works perfectly until here but we also need to write code for Error handling

//Error handling
readStream.on("error", (error) => {
    console.error("Error reading from the file.", error);
});

writeStream.on("error", (error) => {
    console.error("Error writing to the file.", error);
});

//When the copy is done, display a success message inside the console.
writeStream.on("finish" , () => {
    console.log("File copied Successfully!");
});