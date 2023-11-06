// JavaScript Document

var zwaardImage = document.querySelector("section:nth-of-type(1) div div"); 

var blueButton = document.querySelector("ul li:nth-of-type(1) button"); 
var greenButton = document.querySelector("ul li:nth-of-type(2) button"); 
var yellowButton = document.querySelector("ul li:nth-of-type(3) button");
var purpleButton = document.querySelector("ul li:nth-of-type(4) button"); 
var redButton = document.querySelector("ul li:nth-of-type(5) button"); 
var whiteButton = document.querySelector("ul li:nth-of-type(6) button"); 

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
    setTimeout(() => {
        zwaardImage.classList.add("blue"); 
    }, 100);
}

function greenOn(){
    zwaardImage.className="";  

    setTimeout(() => {
        zwaardImage.classList.add("green"); 
    }, 100);
}

function yellowOn(){
    zwaardImage.className="";  

    setTimeout(() => {
        zwaardImage.classList.add("yellow"); 
    }, 100);
 }

function purpleOn(){
    zwaardImage.className="";  
    setTimeout(() => {
        zwaardImage.classList.add("purple"); 
    }, 100);
}

function redOn(){
    zwaardImage.className="";  
    setTimeout(() => {
        zwaardImage.classList.add("red"); 
    }, 100);
}

function whiteOn(){
    zwaardImage.className="";  
    setTimeout(() => {
        zwaardImage.classList.add("white"); 
    }, 100);
}

    

