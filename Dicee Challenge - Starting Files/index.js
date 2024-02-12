var randomNum = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);

var randomImage = "./images/dice" + randomNum + ".png";

var p1 = document.querySelectorAll("img")[0];
p1.setAttribute("src", randomImage);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);

var randomImage2 = "./images/dice" + randomNum2 + ".png";

var p2 = document.querySelectorAll("img")[1];
p2.setAttribute("src", randomImage2);

var h1 = document.querySelector("h1");
if(randomNum > randomNum2) 
{
    h1.innerHTML = "Player 1 wins!";
}
else if(randomNum < randomNum2) 
{
    h1.innerHTML = "Player 2 wins!";
}
else
{
    h1.innerHTML = "Draw!";
}