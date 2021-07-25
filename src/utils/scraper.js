const StockXAPI = require('stockx-api');
const stockX = new StockXAPI();

async function getPriceSneaker(name) {
    try{
        // Dictionary that holds shoe objects name -> shoe object
        const shoes = [];

        //Returns an array of products
        const productList = await stockX.newSearchProducts(name);

        //Fetch variants and product details of the first product
        const product = await stockX.fetchProductDetails(productList[0]);
        const variants = product.variants
        console.log(variants)

        //Iterates through each size and stores their values into a shoe object which is saved into a shoes array
        for (let i = 0; i < variants.length; i++){
            shoe = new Object();
            shoe.name = name;
            shoe.size = variants[i].size;
            shoe.buyPrice = variants[i].market.lowestAsk;
            shoe.sellPrice = variants[i].market.highestBid;
            shoe.marketPrice = variants[i].market.lastSale;
            shoe.averagePrice = variants[i].market.averageDeadstockPrice;
            if(shoe.buyPrice == 0){
                shoe.buyPrice = 'N/A'
            }
            if(shoe.sellprice == 0){
                shoe.sellPrice = 'N/A'
            }
            shoes.push(shoe);
        }

        console.log(shoes)

        return shoes



    } catch(err) {
        console.log(err)
    }
}


getPriceSneaker('nike-sb-dunk-low-ftc-lagoon-pulse')