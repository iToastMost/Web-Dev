import React from "react";
import ReactDOM from "react-dom"
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

const date = new Date(2024, 1, 1, 12);
var timeOfDay = "";
const customStyle = { color: "red" }
const time = date.getHours();

if(time < 12)
{
    customStyle.color = "red";
    timeOfDay = "Good Morning!"
}
else if(time < 18)
{
    customStyle.color = "green";
    timeOfDay = "Good Afternoon!"
}
else 
{
    customStyle.color = "blue";
    timeOfDay = "Good Evening!"
}

ReactDOM.render(
    <div>
        <h1 className="heading" style={customStyle}>{timeOfDay}</h1>
    </div>,
    document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
