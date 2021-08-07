import React from "react";
import './WatchList.css';
import Table from 'react-bootstrap/Table';
import {GetPriceSneaker} from '../utils/scraper.js'

function WatchLists() {
    var shoes = []
    shoes = GetPriceSneaker('nike-sb-dunk-low-ftc-lagoon-pulse');
    console.log(shoes[0].name)
        function AddToList() {
            const name = document.querySelector('#input');
            shoes = GetPriceSneaker('nike-sb-dunk-low-ftc-lagoon-pulse');
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
                                <tr>
                                    <td> shoe[0].name </td>
                                    <td>shoe[0].averagePrice </td>
                                    <td> shoe[0].sellPrice </td>
                                    <td> shoe[0].marketPrice </td>
                                    <td>NA</td>
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