import React from "react";
import "./style.css"
const user = require("../models/Users");

function createUser(e) {
    e.preventDefault()
    const {FirstName, LastName, Username, Email, Password} = e.target.elements
    console.log(e.target.elements)
    var user = new user({
        firstName : FirstName.value,
        lastName : LastName.value,
        username : Username.value,
        email : Email.value,
        password : Password.value
    })
    user.save();
}

function Register(){
    return(
        <form onSubmit = {createUser}>
        <h3>Register</h3>

        <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" />
        </div>

        <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" />
        </div>

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
        <p className="forgot-password text-right">
            Already registered <a href="#">log in?</a>
        </p>
    </form>
    )
}

export default Register;