"use strict";

var boxOne = document.getElementById('one'),
	boxTwo = document.getElementById('two'),
	boxThree = document.getElementById('three'),
	boxFour = document.getElementById('four'),
	boxFive = document.getElementById('five'),
	boxSix = document.getElementById('six');



console.log("hello world!");

boxOne.addEventListener("click", changeBackground);

function changeBackground(){
	boxOne.classList.add("fade-to-black");

}

console.log("JS runs");
