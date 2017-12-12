var colors =generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
// generate random colors
colors = generateRandomColors(6);
//pick a new random color from array
pikedColor = pickColor();
//change colorDisplayto match picked color
colorDisplay.textContent = pickedColor;
//change colors of squares
for(var i=0; i<squares.length;i++)
{
	squares[i].style.background = colors[i];
}
});
colorDisplay.textContent = pickedColor;
for(var i=0; i< squares.length; i++){
	//Add initail color to squares
	squares[i].style.background = colors[i];
	// add event listener to squares
	squares[i].addEventListener("click", function(){
		//alert("you clicked me") for testing
		//grab color of clicked square
		var clickedColor = this.style.background;

		
		// and compare that with pickedColor
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "correct!!";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
		}
		else
		{
			this.style.background = "#232323";
			messageDisplay.textContent = "wrong color";
		}

	});
}

function changeColors(color){
	for(var i=0; i<colors.length; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor(){
	// to pick random number 
	var random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];
	for(var i=0; i<num; i++){
    arr.push(randomColors());
}
	return arr;
}

function randomColors(){

	var r = Math.floor(Math.random() * 256);
var g= Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

return "rgb(" + r + ", " + g + ", " + b + ")";
}