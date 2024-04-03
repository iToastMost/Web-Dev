import React from "react";
import ReactDOM from "react-dom";

const firstName = "Brandon"
const lastName = "Hayes"
const luckyNum = 306;

//1 way of setting h1 to first + last name

// ReactDOM.render(
// <div>
//     <h1>Hello {firstName} {lastName}!</h1>
//     <p>Your lucky number is: {luckyNum}</p>
// </div>, 
// document.getElementById("root"));

//2nd way of setting h1 to first + last name
ReactDOM.render(
    <div>
        <h1>Hello {firstName + " " + lastName}!</h1>
        <p>Your lucky number is: {luckyNum}</p>
    </div>, 
    document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
