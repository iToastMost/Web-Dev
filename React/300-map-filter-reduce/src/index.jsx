import React from "react";
import emojipedia from "./emojipedia";

// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.



// const newNumbers = numbers.map(function (x) 
// {
//     return x * 2;
// });
// console.log(newNumbers);

// //Filter - Create a new array by keeping the items that return true.

// newNumbers = numbers.filter(function(num) 
// {
//     return num > 10;
// });

// console.log(newNumbers);

// //Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNum) 
// {
//     console.log(accumulator);
//     console.log(currentNum);
//     return accumulator + currentNum;
// });
// console.log(newNumber);

// //Find - find the first item that matches from an array.

// const findNumber = numbers.find(function (num) 
// {
//     return num > 10;
// });

// console.log(findNumber);

// //FindIndex - find the index of the first item that matches.

// const findNumIndex = numbers.findIndex(function (num) 
// {
//     return num > 10;
// });

// console.log(findNumIndex);

const newEmojis = emojipedia.map(function (emojiEntry) 
{
    return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojis);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
