import React from "react";
import { Link, withRouter } from "react-router-dom"

function Navigation(props){
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        Stockx Market
                    </Link>

                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/account" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/account">
                                    My Account
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/watchlists" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/watchlists">
                                    Watch List
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/orders" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/orders">
                                    Orders
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);