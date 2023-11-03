// JavaScript Document
console.log("Howdy!");

var zwaardImage = document.querySelector("section:nth-of-type(1) div div"); 

var blueButton = document.querySelector("ul li:nth-of-type(1)"); 
var greenButton = document.querySelector("ul li:nth-of-type(2)"); 
var yellowButton = document.querySelector("ul li:nth-of-type(3)");
var purpleButton = document.querySelector("ul li:nth-of-type(4)"); 
var redButton = document.querySelector("ul li:nth-of-type(5)"); 
var whiteButton = document.querySelector("ul li:nth-of-type(6)"); 

blueButton.onclick= blueOn;
greenButton.onclick= greenOn;
yellowButton.onclick= yellowOn;
purpleButton.onclick= purpleOn;
redButton.onclick= redOn;
whiteButton.onclick= whiteOn;

/*********************/
/* functions */
/*********************/

function blueOn(){
    zwaardImage.className="";  
    zwaardImage.classList.add("blue"); 
    }

function greenOn(){
zwaardImage.className="";  
zwaardImage.classList.add("green"); 
}

function yellowOn(){
zwaardImage.className="";  
 zwaardImage.classList.add("yellow"); 
 }

function purpleOn(){
zwaardImage.className="";  
zwaardImage.classList.add("purple"); 
}

function redOn(){
 zwaardImage.className="";  
zwaardImage.classList.add("red"); 
}

function whiteOn(){
    zwaardImage.className="";  
    zwaardImage.classList.add("white"); 
    }

    

