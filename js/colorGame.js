var squares = document.querySelectorAll(".square");
var numSquares = 12;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var allBtn = document.querySelectorAll(".allBtn");
var CountClick = 1;

for (var i = 0; i < allBtn.length; i++){
    allBtn[i].addEventListener("click", function () {
        allBtn[0].classList.remove("selected");
        allBtn[1].classList.remove("selected");
        allBtn[2].classList.remove("selected");
        allBtn[3].classList.remove("selected");
        this.classList.add('selected');
        if(this.textContent === "Easy"){
            numSquares = 3;
        } else if(this.textContent ===  "Medium" ){
            numSquares = 6;
        }else if(this.textContent === "Hard" ){
            numSquares = 9;
        }else{
            numSquares = 12;
        }
        setSquaresBlok();
    })
}

resetButton.addEventListener("click", function () {
    setSquaresBlok()
});

function setSquaresBlok() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }else{
            squares[i].style.display = "none";
        }

    }
    h1.style.backgroundColor = "#f29200";
    messageDisplay.textContent = "";
    resetButton.textContent = "Kleuren veranderen!";
    CountClick = 1;
}

for( i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listener tot square
    squares[i].addEventListener("click", function(){
        //grab color of clicked square

        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Geweldig je hebt het goed!" + CountClick + " kliks";
            changeSquareColor(clickedColor);
            h1.style.backgroundColor= clickedColor;
            resetButton.textContent = "Speel nog een keer!";
        }else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent = "Probeer opnieuw, aantal kliks: "  + CountClick;
            CountClick++;
        }
    });
}

function  changeSquareColor(color) {
    for(var i = 0; i < squares.length; i++){
       squares[i].style.backgroundColor = color;
    }

}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];

}

function generateRandomColors(num) {
   // make a array
   var arr = [];
   // add num random color to arr
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
        // get random color and push into arr
    }
    return arr
}



function randomColor() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() *256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() *256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() *256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}

