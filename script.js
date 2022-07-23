// Define image array so that random image (dice number) can be chosen
const DICE_ARRAY = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

// Initialise random number between 1 and 6 to represent dice rolls
let randomNumber1 = Math.floor(Math.random() * DICE_ARRAY.length);
let randomNumber2 = Math.floor(Math.random() * DICE_ARRAY.length);

// Tie a random image from the array to a var
let insertRandomDice_Left = DICE_ARRAY[randomNumber1];
let insertRandomDice_Right = DICE_ARRAY[randomNumber2];

/* Use randomNumber vars to pick one image between dice1 & dice6, then display that image on the left side... */
let setImageLeft = document.querySelector(".img1");
setImageLeft.setAttribute("src", insertRandomDice_Left);
// ...And then the right side
let setImageRight = document.querySelector(".img2");
setImageRight.setAttribute("src", insertRandomDice_Right);

/* Prepare to change h1 in DOM so that it displays the winner (Player 1 or player 2)
So, I'll grab the h1 html tag and store as var */
let displayWinnerOrDraw = document.querySelector("h1");

// Prepare to display a win image for each player, so grab 'em
let displayWinnerImageForP1 = document.querySelector(".win-image-p1");
let displayWinnerImageForP2 = document.querySelector(".win-image-p2");

// Player 1 wins if they have the higher number (dice roll)
if (randomNumber1 > randomNumber2) {
    // P1 declared the winner
    displayWinnerOrDraw.textContent = "Player 1 Wins!";
    // Display the winner image inline so it appears beside the h1
    displayWinnerImageForP1.style.display = "inline";
    // Player 2 wins if they have the higher number (dice roll)
} else if (randomNumber2 > randomNumber1) {
    // P2 declared the winner
    displayWinnerOrDraw.textContent = "Player 2 Wins!";
    // Display the winner image inline so it appears beside the h1
    displayWinnerImageForP2.style.display = "inline";
    // Anything else must be a draw
} else {
    // Declare the draw
    displayWinnerOrDraw.textContent = "Draw!";
    // Set the h1 to block - stop inline dice images moving alongside h1 on draw 
    displayWinnerOrDraw.style.display = "block";
};