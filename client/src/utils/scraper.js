const StockXAPI = require('stockx-api');
const stockX = new StockXAPI();

export async function GetPriceSneaker(name) {
    try{
        // Dictionary that holds shoe objects name -> shoe object
        const shoes = [];

        //Returns an array of products

        //Fetch variants and product details of the first product
        const product = await stockX.fetchProductDetails(name);
        const variants = product.variants

        //Iterates through each size and stores their values into a shoe object which is saved into a shoes array
        for (let i = 0; i < variants.length; i++){
            let shoe = {
                name : name,
                size : variants[i].size,
                buyPrice : variants[i].market.lowestAsk,
                sellPrice : variants[i].market.highestBid,
                marketPrice : variants[i].market.lastSale,
                averagePrice : variants[i].market.averageDeadstockPrice
            };

            if(shoe.buyPrice === 0){
                shoe.buyPrice = 'N/A'
            }
            if(shoe.sellprice === 0){
                shoe.sellPrice = 'N/A'
            }
            shoes.push(shoe);
        }


        return shoes

    } catch(err) {
        console.log(err)
    }
}




//GetPriceSneaker('nike-sb-dunk-low-ftc-lagoon-pulse')