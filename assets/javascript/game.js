// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.


// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.


// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



// Option 1 Game design notes


// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.

//GLOBAL VARIABLES

var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    },
    pink: {
        name: "Pink",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    }
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

//FUNCTIONS
var getRandom = function(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
}

var startGame = function() {
    //Reset the current score
    currentScore = 0;
    //Set a new target score between 19 and 120
    targetScore = getRandom(19, 120);
    //Set different values for each of the crystals between 1 and 12
    crystal.blue.value = getRandom(1, 12);
    crystal.pink.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    //Change the HTML to reflect all of these changes
    $("#yourScore").html("Current Score: " + currentScore);
    $("#targetScore").html("Target Score: " + targetScore);
    
}

var resetGame = function() {
    //Reset the current score
    currentScore = 0;
    //Set a new target score between 19 and 120
    targetScore = getRandom(19, 120);
    //Set different values for each of the crystals between 1 and 12
    crystal.blue.value = getRandom(1, 12);
    crystal.pink.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
};

// Respond to click on the crystals
var addValues = function(crystal) {
//change currentscore
currentScore = currentScore + crystal.value;

//Change the HTML to reflect changes on currentScore
$("#yourScore").html(currentScore);

};

/* var gamePlay = function() {
    if(currentScore > targetScore) {
        lossCount++;
        $("#lossCount").html(lossCount);
        resetGame();
        //I am not sure why the game will not reset ?

    } 
    if(currentScore === targetScore) {

        winCount++;
        $("#winCount").html(winCount);
        resetGame();

    };
    }; */

//MAIN PROCESS
//Starts the game the first time
startGame();
//gamePlay();
$('#blue').click(function () {
    addValues(crystal.blue);
});

$('#pink').click(function () {
    addValues(crystal.pink);
});

$('#green').click(function () {
    addValues(crystal.green);
});

$('#yellow').click(function () {
    addValues(crystal.yellow);
});
