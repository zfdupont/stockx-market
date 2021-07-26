import React from "react";
import './WatchList.css';
import Table from 'react-bootstrap-table';
const StockXAPI = require('stockx-api');
const stockX = new StockXAPI();

function WatchLists() {
    function AddToList() {
        const name = document.querySelector('#input');
        const shoes = [];

        //Returns an array of products
        const productList = stockX.newSearchProducts(name);

        //Fetch variants and product details of the first product
        const product = stockX.fetchProductDetails(productList[0]);
        const variants = product.variants
        console.log(variants)

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

            if(shoe.buyPrice == 0){
                shoe.buyPrice = 'N/A'
            }
            if(shoe.sellprice == 0){
                shoe.sellPrice = 'N/A'
            }
            shoes.push(shoe);
        }
    }
    return (
        <div className="lists">
            <div class="container">
                <div>
                    <h1>Watch Lists</h1>
                        <form id = "to-do-form">
                            <p id = "shoes"> Your Watchlists</p>
                            <input type = "text" id = "input" placeholder = "Enter Shoe Name/SKU"/>
                            <button type = "Submit" onClick = {AddToList}>Add</button>
                        </form>
                        <div id = "view-lists">
                        <select>
                            <option value = ""> View 1 </option>
                            <option value = ""> View 2 </option>
                            <option value = ""> View 3 </option>
                        </select>
                        <button type = "button">Manage</button>
                        </div>
                        <div>
                            <Table striped bordered hover>
                            <thead>
                                 <tr>
                                    <th>#</th>
                                    <th>Shoe Name</th>
                                    <th>Avg. Buy Price</th>
                                    <th>Sell Price</th>
                                    <th>Retail Price</th>
                                    <th>Release Date </th>
                                </tr>
                            </thead>   
                            </Table>
                        </div>
                </div> 
            </div>
        </div>
    );
}

export default WatchLists;