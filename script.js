"use strict";

// Start of lab 2
// To begin game 
const startGame = () => {
    let play = prompt("Do you want to play the game?");
    if (play === "yes") {
        let userName = prompt("Enter your name.");
        startCombat(play, userName);
    } else {
        console.log("Come back later.");
        return;
    }
}

// To begin attack or quit game
const startCombat = (play, userName) => {
    // Variables
    let userHealth = 40;
    let grantHealth = 10;
    let userWins = 0;
    while(play) {
        let ans = prompt("Do you want to attack or quit?");
        if (ans === "attack") {
            grantHealth -= getDmg(); // Grant's health reduced randomly 1-5
            userHealth -= getDmg(); // User's health reduced randomly 1-5
            console.log(`${userName} was attacked. ${userName} has ${userHealth} health left.`);
            console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);
            //Once Grant loses 10 points, he gets another life and user gets a win.
            if (grantHealth <= 0) { 
                userWins++;
                grantHealth = 10;
                console.log(`${userName} has beaten Grant. ${userName} must win ${3 - userWins} more times.`);
            }
            // If user has 3 wins, user wins the game.
            if (userWins === 3) {
                console.log(`${userName} is victorious!`);
                break;
            }
            // If user reaches 0 points, user loses the game and Grant wins. 
            if (userHealth <= 0) {
                console.log("Grant beat you.");
                break;
            }
        }
        // If user wants to quit game, user enters quit and game ends. 
        else if (ans === "quit") {
            break;
        }
    }
    return;
}
 // Equation that randomly reduces health 1-5
const getDmg = () => {
    return Math.floor(Math.random() * 5) + 1;
}

startGame();
