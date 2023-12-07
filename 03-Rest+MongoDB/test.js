const mongoose = require("mongoose");

const db = "mongodb+srv://balanijitesh911:pcc228AoxIMCAR68@cluster0.6xovpma.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(db, {})
    .then (() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    });
