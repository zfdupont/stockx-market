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

//post using form with action = "/api/products" with params for ticker, name, and url
app.post("/api/products", async (req, res) => {
    try {
        let [name, ticker, url] =  [req.params.name, req.params.ticker, req.params.url];
        await Product.create({name: name, ticker: ticker, url: url});
        res.send(200)
    } catch (err) {
        res.send(500)
    }
});

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