import React from "react";
import ReactDOM from "react-dom";

const randomImage = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img className="image" src={randomImage + "?grayscale"}></img>
    <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHkRKVOaUWVDOUF8vXh-J43RzGC1rhH4M30vC75joKsA&s" alt="a table filled with korean bbq foods"></img>
    <img className="image" src="https://mykoreankitchen.com/wp-content/uploads/2022/01/5.-Homemade-Kimchi.jpg" alt="picture of kimchi"></img>
    <img className="image" src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/a-selection-of-traditional-mexican-foods-including-tamales-and-rojo-1694408828-785X440.jpg" alt="table of mexican foods"></img>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
