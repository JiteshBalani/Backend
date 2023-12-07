const express = require("express");
const fs = require("fs");
const app = express();

const data = JSON.parse(fs.readFileSync("data.json"));

let products = data.products;

//GET Operations
app.get("/home", (_,res) => {
    res.send("Hello, World!");
});

app.get("/products", (_,res) => {
    res.send(products);
});

app.get("products/:productId", (req,res) => {
    const productId = Number(req.params.productId);
    const product = products.find(product => product.id === productId) || {};
    if(product.id) {
        res.send(product);
    } else {
        res.status(404).send("Product Not Found");
    }
});

// POST Operations
app.post("/product", (req, res) => {
    products.push(req.body);
    res.status(201).send("Successfully added");
});

//PUT Operations
app.put("products/:productId", (req,res) => {
    const productId = Number(req.params.productId);
    const productIdx = products.findIndex(product => product.id === productId);
    products.splice(productIdx, 1, { ...req.body, id: productId});
    res.status(201).send("Successfully Updated!");
});

//PATCH Operations
app.patch("/products/:productId", (req,res) => {
    const productId = Number(req.params.productId);
    const productIdx = products.findIndex(product => product.id === productId);
    const product = products[productIdx];
    products.splice(productIdx, 1, { ...product, ...req.body});
    res.status(201).send("Successfully Updated!");
});

//DELETE Operations
app.delete("/products/:productId", (req, res) => {
    const productId = Number(req.params.productId);
    const productIdx = products.findIndex(product => product.id === productId);
    const product = products[productIdx];
    products.splice(productIdx, 1);
    res.status(201).json(product);
});

//Do NOT USE - INTERN
app.delete("/products", (_, res) => {
    products = [];
    res.status(201).json("Data erased!")
})

app.listen(8080, ()=> {
    console.log("Server started. You can access it on http://localhost:8080/")
});