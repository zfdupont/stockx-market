const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

var shoesBuy = {}
var shoesSell = {}
async function getPriceSneaker(name) {
    try{

        const siteUrl = 'stockx.com/' + name

        const data = await axios({
            method: "GET",
            url : siteUrl, 
        })

        const priceSelector = '#root > div.wrapper.css-1bwwf5m-AppContainer.e1ut6imt0 > div.page-container.css-4qyi6t-BannerPaddingWrapper > div.chakra-container.new-product-view.css-vp2g1e > section:nth-child(3) > div.css-gg4vpm > div.css-0 > div.buy-sell-container.css-12zjcx7 > div.chakra-stack.buy-sell-buttons-desktop.css-12vwdz3 > div:nth-child(1) > div > dl > dd'
        const sellSelector = '#root > div.wrapper.css-1bwwf5m-AppContainer.e1ut6imt0 > div.page-container.css-4qyi6t-BannerPaddingWrapper > div.chakra-container.new-product-view.css-vp2g1e > section:nth-child(3) > div.css-gg4vpm > div.css-0 > div.buy-sell-container.css-12zjcx7 > div.chakra-stack.buy-sell-buttons-desktop.css-12vwdz3 > div:nth-child(3) > div > dl > dd'
        const $ = cheerio.load(data)
        $(priceSelector).each((parentIdx, parentElem) => {
            shoesBuy[name] = parentElm.text()
            console.log(parentElem.text())
        })
        $(sellSelector).each((parentIdx, parentElem) => {
            shoesSell[name] = parentElm.text()
            console.log(parentElm.text())
        })

    } catch(err) {
        console.log(err)
    }
}

getPriceSneaker()