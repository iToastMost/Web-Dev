var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStart = false;
var level = 0;
var i = 0;

var randomChosenColor;


function nextSequence()
{
    if(gameStart === true) 
    {
        var randomNum = Math.floor(Math.random() * 4);
        randomChosenColor = buttonColors[randomNum];
        gamePattern.push(randomChosenColor);
        console.log(gamePattern);
        level++;
        $("h1").text("Level: " + level);
        //playSound(randomChosenColor);
        //$("#" + randomChosenColor).fadeOut(100).fadeIn(100);
        gameLoop();
        i = 0;
    }
    
}

$('.btn').click(function() 
    {
        if(gameStart === true) 
        {
            var buttonClicked = this.id;
            userClickedPattern.push(buttonClicked);
            animatePress(buttonClicked);
            playSound(buttonClicked);
            checkAnswer(userClickedPattern.length - 1);
            console.log(userClickedPattern);
        }
        
    })

function playSound(name)    
{
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play(); 
}

function animatePress(currentColor) 
{
    $("#" + currentColor).addClass("pressed");
    setTimeout(function()
    {
        $("#" + currentColor).removeClass("pressed");
    },100);
    
}

$(document).on('keypress', function(e) 
{
    if(gameStart === false) 
    {
        $("h1").text("Level: " + 0);
        gameStart = true;
        nextSequence();
    }
})

function checkAnswer(currentLevel) 
{
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) 
    {
        console.log("correct!");
        if(gamePattern.length === userClickedPattern.length) 
        {
            userClickedPattern = [];
            setTimeout(function()
            {
                nextSequence();
            }, 500);
        }
        
    }
    else
    {
        $("h1").text("Game over! Press any key to restart");
        var audio = new Audio("./sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(function()
        {
            $("body").removeClass("game-over");
        }, 200);
        audio.play();
        startOver();
    }
}

function startOver()
{
    gameStart = false;
    level = 0;
    i = 0;
    gamePattern = [];
    userClickedPattern = [];
}

function gameLoop()
{
    setTimeout(function()
    {
        playSound(gamePattern[i]);
        $("#" + gamePattern[i]).fadeOut(100).fadeIn(100);
        i++;
        if(i < gamePattern.length)
        {
            gameLoop();
        }
    }, 500);

}