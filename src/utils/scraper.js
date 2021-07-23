const cheerio = require('cheerio');
const got = require('got');

async function getPriceSneaker(name) {
    try{
        //Shoe object that holds name, buy price, and sell price
        const shoe = new Object();
        shoe.name = name;

        // Dictionary that holds shoe objects name -> shoe object
        const shoes = {};

        // Url to be scraped
        const siteUrl = 'https://stockx.com/' + name
        console.log(siteUrl)

        // Got scrapes the data 
         const info = await got(siteUrl)
         const data = info.body.toString();

        // Cheerio loads this data into a readable format
        const $ = cheerio.load(data)
        // Using the priceSelector and sellSelector constant cheerio finds all price values on the page and stores that into the object
        console.log('Price:', $('dd').text())
        var price = $('dd').text();
        console.log('Size:', $('dt').text())
        var size = $('dt').text();
        // Completed shoe object is saved into dictionary
        shoes[name] = shoe;

        return shoes 


    } catch(err) {
        console.log(err)
    }
}

getPriceSneaker('nike-sb-dunk-low-ftc-lagoon-pulse')