const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose');
const Product = require('./models/product');



//Set up default mongoose connection
var mongoDB = `mongodb://localhost/test`;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')))


// GET product BY Ticker
app.get("/api/product/ticker/:id", async (req, res) => {
    const product = await Product.findOne({ ticker: req.params.id });
    if(product == null) return res.sendStatus(404);
    res.json({ticker: product.ticker, name: product.name, url: product.url});
});

// GET product BY Name
app.get("/api/product/name/:id", async (req, res) => {
    const product = await Product.findOne({ name: req.params.id });
    if(product == null) return res.sendStatus(404);
    res.json({ticker: product.ticker, name: product.name, url: product.url});
});

// GET product BY URL
app.get("/api/product/name/:id", async (req, res) => {
    const product = await Product.findOne({ url: req.params.id });
    if(product == null) return res.sendStatus(404);
    res.json({ticker: product.ticker, name: product.name, url: product.url});
});

//api GET requests get handled here
app.get("/api", (req, res) => {
    res.json({ message: "This is the backend!" });
});

  
// all other gets are handled by react
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});