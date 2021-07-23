import React from "react";
import './WatchList.css';
function WatchLists() {
    return (
        <div className="lists">
            <div class="container">
                <div>
                    <h1>Watch Lists</h1>
                        <form id = "to-do-form">
                            <p id = "shoes"> Your Watchlists</p>
                            <input type = "text" placeholder = "Enter Shoe Name/SKU"/>
                            <button type = "Submit">Add</button>
                        </form>
                        <div id = "view-lists">
                        <select>
                            <option value = ""> View 1 </option>
                            <option value = ""> View 2 </option>
                            <option value = ""> View 3 </option>
                        </select>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchLists;