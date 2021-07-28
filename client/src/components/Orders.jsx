import React from "react";

function Orders() {
    var fromDate = new Date();
    var toDate = new Date();
    fromDate.setMonth(fromDate.getMonth() - 6); // from 6 months ago to now  
    var fromDateStr = fromDate.toISOString().substr(0,10);
    var toDateStr = toDate.toISOString().substr(0,10);
    return (
        <div className="orders">
            <div class="container">
                <div>
                    <h1>Orders</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>
                                    <label for="from-date" class="text-muted">From Date:
                                        <input type="date" name="from-date" defaultValue={fromDateStr} />
                                    </label>
                                </th>
                                <th>
                                    <label for="to-date" class="text-muted"> To Date:
                                        <input type="date" name="to-date" defaultValue={toDateStr} />
                                    </label>                               
                                </th>
                                <th>
                                    <label for="order-type" class="text-muted">Order Type:⠀
                                        <select class="custom-select" name="order-type">
                                            <option selected value="all">All</option>
                                            <option value="buy">Buy</option>
                                            <option value="sell">Sell</option>
                                        </select>
                                    </label>                               
                                </th>
                                <th>
                                    <label for="order-status" class="text-muted">Order Status:⠀
                                        <select class="custom-select" name="order-status">
                                            <option selected value="all">All</option>
                                            <option value="open">Open</option>
                                            <option value="executed">Executed</option>
                                            <option value="cancelled">Cancelled</option>
                                            <option value="expired">Expired</option>
                                        </select>
                                    </label>                               
                                </th>
                                <th>
                                    <label for="results-pp" class="text-muted">Results per page:⠀
                                        <select class="custom-select" name="results-pp">
                                            <option selected value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                        </select>
                                    </label>                               
                                </th>
                                
                            </tr>

                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
}
  
export default Orders;