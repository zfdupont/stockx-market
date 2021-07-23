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

        // Constant used by cheerio to find the data we want from the scraped axios data
        const Elem = '#root > div.wrapper.css-1bwwf5m-AppContainer.e1ms8ude0 > div.page-container.css-4qyi6t-BannerPaddingWrapper > div.chakra-container.new-product-view.css-vp2g1e > section:nth-child(3) > div.css-gg4vpm > div.css-0 > div.buy-sell-container.css-qt7qal > div.chakra-stack.buy-sell-buttons-desktop.css-12vwdz3 > div:nth-child(1) > div > dl > dd'
        // Cheerio loads this data into a readable format
        const $ = cheerio.load(data)
        // Using the priceSelector and sellSelector constant cheerio finds all price values on the page and stores that into the object
        console.log('Price: ', $('dd').text())
        console.log('Size: ', $('dt').text())

        // Completed shoe object is saved into dictionary
        shoes[name] = shoe;

        return shoes 


    } catch(err) {
        console.log(err)
    }
}

getPriceSneaker('nike-sb-dunk-low-ftc-lagoon-pulse')