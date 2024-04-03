import React from "react";
import ReactDOM from "react-dom";

function Card(props)
{
  return(
  <div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card name="Paul Atriedes" img="https://thefantasyreviews.com/wp-content/uploads/2023/03/the-evolution-of-Paul-Atreides.jpg" tel="Doesn't need a phone" email="spaceEmperor@wormail.com"/>
    <Card name="Chani" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_E3PnwkdvXQvAWaqNmRFTliUc32CsNt881YZ1dBFIQ&s" tel="Carrier bats" email="springtears@wormail.com"/>
    <Card name="Irulan" img="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/first_image_of_florence_pugh_in_dune_part_two.jpg" tel="Diaries" email="bookKeeper@spice.com"/>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
