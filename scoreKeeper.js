var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset"); 
var p1Score = 0;
var h1= document.querySelector("h1");
var s1 = document.querySelector("#span1");
var s2= document.querySelector("#span2");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
// To select a span inside a paragraph
var winninScoreDisplay = document.querySelector("p span");



p1Button.addEventListener("click", function(){
	if(!gameOver)
	{
     p1Score++;
     if(p1Score === winningScore)
     {
     span1.classList.add("winner");
     gameOver = true;
 }
}
s1.textContent = p1Score;
});

p2Button.addEventListener("click", function(){
	if(!gameOver)
	{
p2Score++;
if(p2Score === winningScore)
{
span2.classList.add("winner");
gameOver = true;
}
}
s2.textContent = p2Score;
});


resetButton.addEventListener("click", function(){
reset();
});

function reset()
{
	p1Score = 0;
p2Score = 0;
span1.textContent = 0;
span2.textContent = 0;
span1.classList.remove("winner");
span2.classList.remove("winner");
gameOver = false;
}

numInput.addEventListener("change", function(){
	// instead of numInput.value we can make use of this.value;
winninScoreDisplay.textContent = numInput.value;
winningScore = Number(numInput.value);
reset();
});