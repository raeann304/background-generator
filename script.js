var css =document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("gradient");
var button=document.querySelector("button");

initialGradient();

function initialGradient(){
	css.textContent = "linear-gradient(to right, rgb(255,0,0),(255,0,0));"

}

function setBackground(){
	var randomColor1= '#'+Math.floor(Math.random()*16777215).toString(16);
	var randomColor2= '#'+Math.floor(Math.random()*16777215).toString(16);
	 body.style.background= `linear-gradient(to right, ${randomColor1} , ${randomColor2} )`;
}
	


function setGradient(){
	body.style.background=`linear-gradient(to right, ${color1.value} , ${color2.value} )`;
   
   css.textContent = body.style.background +";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setBackground);
  
// https://codepen.io/chrisgresh/pen/aNjovb