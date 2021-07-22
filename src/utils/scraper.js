const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')


async function getPriceSneaker(name) {
    try{

        //Shoe object that holds name, buy price, and sell price
        const shoe = new Object();
        shoe.name = name;

        // Dictionary that holds shoe objects name -> shoe object
        const shoes = {};

        // Url to be scraped
        const siteUrl = 'stockx.com/' + name

        // Axios scrapes the data 
        const data = await axios({
            method: "GET",
            url : siteUrl, 
        })

        // Constant used by cheerio to find the data we want from the scraped axios data
        const priceSelector = '#root > div.wrapper.css-1bwwf5m-AppContainer.e1ut6imt0 > div.page-container.css-4qyi6t-BannerPaddingWrapper > div.chakra-container.new-product-view.css-vp2g1e > section:nth-child(3) > div.css-gg4vpm > div.css-0 > div.buy-sell-container.css-12zjcx7 > div.chakra-stack.buy-sell-buttons-desktop.css-12vwdz3 > div:nth-child(1) > div > dl > dd'
        const sellSelector = '#root > div.wrapper.css-1bwwf5m-AppContainer.e1ut6imt0 > div.page-container.css-4qyi6t-BannerPaddingWrapper > div.chakra-container.new-product-view.css-vp2g1e > section:nth-child(3) > div.css-gg4vpm > div.css-0 > div.buy-sell-container.css-12zjcx7 > div.chakra-stack.buy-sell-buttons-desktop.css-12vwdz3 > div:nth-child(3) > div > dl > dd'
        
        // Cheerio loads this data into a readable format
        const $ = cheerio.load(data)

        // Using the priceSelector and sellSelector constant cheerio finds all price values on the page and stores that into the object
        $(priceSelector).each((parentIdx, parentElem) => {
            shoe.buyPrice = parentElem.text()
            console.log("Buying price: ", parentElm.text())
        })
        $(sellSelector).each((parentIdx, parentElem) => {
            shoe.sellPrice = parentElem.text()
            console.log("Selling price: ", parentElem.text())
        })

        // Completed shoe object is saved into dictionary
        shoes[name] = shoe;

        return shoes 


    } catch(err) {
        console.log(err)
    }
}

getPriceSneaker()