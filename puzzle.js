// declares all buttons
var buttonone = document.getElementById("buttonone");
document.getElementById("buttonone").style.background = pickColor();
var buttontwo = document.getElementById("buttontwo");
document.getElementById("buttontwo").style.background = pickColor();
var buttonthree = document.getElementById("buttonthree");
document.getElementById("buttonthree").style.background = pickColor();
var buttontfour = document.getElementById("buttonfour");
document.getElementById("buttonfour").style.background = pickColor();
var buttonfive = document.getElementById("buttonfive");
document.getElementById("buttonfive").style.background = pickColor();
var buttonsix = document.getElementById("buttonsix");
document.getElementById("buttonsix").style.background = pickColor();
var buttonseven = document.getElementById("buttonseven");
document.getElementById("buttonseven").style.background = pickColor();

// picks a color at the start
function pickColor(){
    var random = Math.floor((Math.random() * 3) + 1);
    if (random == 1){
        return "red";
    } else if (random == 2){
        return "green";
    } else if (random == 3){
        return "blue";
    }
}

// turn related stuff
var turns = 0;
var turnCounterEL = document.getElementById("turnL");
turnCounterEL.textContent = "Turns: " + turns;

// switches color of button
function switchColor(curentColor){
    if (curentColor == "red"){
        return "green";
    } else if (curentColor == "green"){
        return "blue";
    } else if (curentColor == "blue"){
        return "red";
    } 
}

// checks if game has been won
function checkIfWin(){
    if ((buttonone.style.background == buttontwo.style.background) && (buttonthree.style.background == buttonfour.style.background) && (buttonfive.style.background == buttonsix.style.background) && (buttonseven.style.background == buttonone.style.background)){
        turnCounterEL.textContent = "You Win! In only " + turns + " turns!";
    }
}

// on click
function countClick1(adjacent){
    if (adjacent == false){
        turns += 1; // moves click count up one
        turnCounterEL.textContent = "Turns: " + turns; // shows the click count
        buttonone.style.background =  switchColor(buttonone.style.background); // switches color
        countClick2(true);
    } else {
        buttonone.style.background =  switchColor(buttonone.style.background); // switches color
        checkIfWin() // checks if game has been won
    }
};
function countClick2(adjacent){
    if (adjacent == false){
        turns += 1;
        turnCounterEL.textContent = "Turns: " + turns;
        buttontwo.style.background =  switchColor(buttontwo.style.background); // switches color
        countClick1(true);
        countClick3(true);
    } else {
        buttontwo.style.background =  switchColor(buttontwo.style.background);
        checkIfWin()
    }
};
function countClick3(adjacent){
    if (adjacent == false){
        turns += 1;
        turnCounterEL.textContent = "Turns: " + turns;
        buttonthree.style.background =  switchColor(buttonthree.style.background); // switches color
        countClick2(true);
        countClick4(true);
    } else {
        buttonthree.style.background =  switchColor(buttonthree.style.background);
        checkIfWin()
    }
};
function countClick4(adjacent){
    if (adjacent == false){
        turns += 1;
        turnCounterEL.textContent = "Turns: " + turns;
        buttonfour.style.background =  switchColor(buttonfour.style.background); // switches color
        countClick3(true);
        countClick5(true);
    } else {
        buttonfour.style.background =  switchColor(buttonfour.style.background);
        checkIfWin()
    }
};
function countClick5(adjacent){
    if (adjacent == false){
        turns += 1;
        turnCounterEL.textContent = "Turns: " + turns;
        buttonfive.style.background =  switchColor(buttonfive.style.background); // switches color
        countClick4(true);
        countClick6(true);
    } else {
        buttonfive.style.background =  switchColor(buttonfive.style.background);
        checkIfWin()
    }
};
function countClick6(adjacent){
    if (adjacent == false){
        turns += 1;
        turnCounterEL.textContent = "Turns: " + turns;
        buttonsix.style.background =  switchColor(buttonsix.style.background); // switches color
        countClick5(true);
        countClick7(true);
    } else {
        buttonsix.style.background =  switchColor(buttonsix.style.background);
        checkIfWin()
    }
};
function countClick7(adjacent){
    if (adjacent == false){
        turns += 1;
        turnCounterEL.textContent = "Turns: " + turns;
        buttonseven.style.background =  switchColor(buttonseven.style.background); // switches color
        countClick6(true);
    } else {
        buttonseven.style.background =  switchColor(buttonseven.style.background);
        checkIfWin()
    }
};


