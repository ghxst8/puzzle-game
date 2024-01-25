// order is blue, red, green

var turns = document.getElementById("turns");


function switchColor(curentColor){
    if (curentColor == "red"){
        curentColor = "green";
    } else if (curentColor == "green"){
        curentColor = "blue";
    } else if (curentColor == "blue"){
        curentColor = "red"
    }
}

function countClick1(){
    console.log("click 1");
    turns += 1;
    console.log(turns);
    switchColor
};
function countClick2(){
    console.log("click 1");
};
function countClick3(){
    console.log("click 1");
};
function countClick4(){
    console.log("click 1");
};
function countClick5(){
    console.log("click 1");
};
function countClick6(){
    console.log("click 1");
};
function countClick7(){
    console.log("click 1");
};