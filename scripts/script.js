
/****************************/
/* #Variabele voor Lichtzwaarden */
/****************************/


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

/****************************/
/* #Variabele voor tekstblokken */
/****************************/

var pHB = document.querySelector(".containerHB p");
var pKJ = document.querySelector(".containerKJ p:nth-of-type(1) ");
var pTwee = document.querySelector(".containerKJ p:nth-of-type(2)"); 
var imgKJ = document.querySelector(".containerKJ img"); 

/* Darth Vader Breathe effect wanneer er op poster wordt geklikt*/
imgKJ.onclick = musicHoofdpijn;

/**************************************************/
/* #Variabele voor achtergrond onderste tekstblok */
/**************************************************/

var blokKJ = document.querySelector("section:nth-of-type(3)");
 
/*********************/
/* functions */
/*********************/

/* Darth Vader Breathe effect function*/
function musicHoofdpijn(){
  if (imgKJ.getAttribute("src") == "./images/star wars poster/A New Hope.png") {
    var audioDarthVader = document.getElementById("darthVader");
    console.log("Speelt geluid af van Darth Vader")
    audioDarthVader.play(); 
  } else {
    console.log("The image source is not 'A New Hope.png, dus speelt geen geluid af");
  };
}

/* Lichtzwaarden functions*/


function blueOn(){
    zwaardImage.className="";  
    setTimeout(() => {
        zwaardImage.classList.add("blue"); 
    }, 100);


    pHB.innerHTML = "Een blauw lichtzwaard is de meest voorkomende lichtzwaard kleur. Dit lichtzwaard wordt gemaakt van een blauw kyber-kristal. Deze kristal werd vaak gevonden op de planeet Ilum. Blauw wordt vaak geassocieerd met de zogenoemde Jedi-ridders. De kleur staat symbool voor rust, kalmte en loyaliteit. Jedi-ridders die een blauw lichtzwaard hebben streven vaak naar de verdediging van de waarheid. Zij zijn vastberaden, gedisciplineerd en hanteren de Jedi-code enorm."
    pKJ.innerHTML = "De meest bekende Jedi-ridders met een blauw lichtzwaard zijn toch wel Anakin Skywalker en Obi-Wan Kenobi."
    pTwee.innerHTML = "Het blauwe lichtzwaard werd voor het eerst geïntroduceerd in de originele Star Wars-film, die later bekend werd als Star Wars: Episode IV - A New Hope. Dit was de allereerste film die in 1977 werd uitgebracht en geregisseerd door George Lucas. Het lichtzwaard werd gebruikt door Obi-Wan Kenobi."
    imgKJ.src = "./images/star wars poster/A New Hope.png"
    blokKJ.style.background = "radial-gradient(circle, #ADADAD, #00C9EF)";  
    blokKJ.style.boxShadow = "inset 0 0 2em rgba(0, 0, 0, 0.8)";  
  }


function greenOn(){
    zwaardImage.className="";  
    setTimeout(() => {
        zwaardImage.classList.add("green"); 
    }, 100);


    pHB.innerHTML = "Een groen lichtzwaard wordt vaak geassocieerd met Jedi-ridders die een sterke verbinding hebben met de Force. Het lichtzwaard wordt gemaakt van een groen kyberkristal. Net als het blauwe kristal worden ze vaak gevonden op de planeet Ilum. Zij staan symbool voor evenwicht en harmonie. Jedi die het groene lichtzwaard gebruiken, streven naar balans in de Force. Deze Jedi-ridders richten zich op de Force en de harmonie met de natuur. Ze zijn vaak bedacht en wijs in hun handelingen."
    pKJ.innerHTML = "De meest bekende Jedi-ridders met een groen lichtzwaard zijn Yoda, Luke Skywalker, Qui-Gon Jinn en Kit Fisto."
    pTwee.innerHTML = "Het Groene lichtzwaard werd voor het eerst geïntroduceerd in de originele Star Wars-film, die later bekend werd als Star Wars: Episode VI – Return of the Jedi. Dit was de film die in 1983 werd uitgebracht en geregisseerd door George Lucas. Het lichtzwaard werd gebruikt door Luke Skywalker."
    imgKJ.src = "./images/star wars poster/Return of the Jedi.png"
    blokKJ.style.background = "radial-gradient(circle, #ADADAD, #0AFF30)";  
    blokKJ.style.boxShadow = "inset 0 0 2em rgba(0, 0, 0, 0.8)"; 
}


function yellowOn(){
    zwaardImage.className="";  
    setTimeout(() => {
        zwaardImage.classList.add("yellow"); 
    }, 100);


    pHB.innerHTML = "Een geel lichtzwaard is één van de zeldzame kleuren. De gele kleur wordt vaak geassocieerd met Jedi-tempelwachters en symboliseert opoffering en bescherming. De gele kleur staat symbool voor kennis en nederigheid. Het gele lichtzwaard wordt gemaakt door een geel kyberkristal. Dit kristal is niet te vinden op de planeet Ilum, maar staat voor de spirituele reis van de Jedi. Jedi-ridders met een geel lichtzwaard hebben een sterke band met de order en de waarden die zij vertegenwoordigen."
    pKJ.innerHTML = "De Jedi-ridders die het meest bekend zijn die een geel lichtzwaard hanteerde zijn natuurlijk de tempelwachters, Ahsoka Tano nadat ze de Jedi-order had verlaten en Rey in The Rise of Skywalker."
    pTwee.innerHTML = "Het gele lichtzwaard werd voor het eerst geïntroduceerd in de officiële Star Wars serie Star wars The Clone Wars seizoen 5. Dit seizoen verscheen in 2012 en was geregisseerd door Dave Filoni. In dit seizoen werden er gele lichtzwaarden gebruikt door de Jedi tempelwachters."
    imgKJ.src = "./images/star wars poster/Star wars the clone Wars.png"
    blokKJ.style.background = "radial-gradient(circle, #ADADAD, #FFE243)";  
    blokKJ.style.boxShadow = "inset 0 0 2em rgba(0, 0, 0, 0.8)"; 
 }


function purpleOn(){
    zwaardImage.className="";  
    setTimeout(() => {
        zwaardImage.classList.add("purple"); 
    }, 100);


    pHB.innerHTML = "Een paars lichtzwaard wordt vaak geassocieerd met unieke Jedi-meesters die zich niet aan de regels houden. Het lichtzwaard wordt gemaakt van een paars kyberkristal. In de films of canon wordt niet specifiek genoemd waar de paarse kyberkristal vandaan komt. Jedi met een paars lichtzwaard hebben vaak een onconventionele benadering van de Force en zijn bereid om grenzen te overschrijden om hun doel te bereiken."
    pKJ.innerHTML = "De meest bekende Jedi-meester met een paars lichtzwaard is toch wel Mace Windu." 
    pTwee.innerHTML = "Het paarse lichtzwaard werd voor het eerst geïntroduceerd in de originele Star Wars-film, die later bekend werd als Star Wars: Episode II Attack of the Clones. Dit was de film die in 2002 werd uitgebracht en geregisseerd door George Lucas. Het lichtzwaard werd gebruikt door Jedi Mace Windu."
    imgKJ.src = "./images/star wars poster/Attack of the Clones.png"
    blokKJ.style.background = "radial-gradient(circle, #ADADAD, #BF22DB)";  
    blokKJ.style.boxShadow = "inset 0 0 2em rgba(0, 0, 0, 0.8)"; 
}


function redOn(){
    zwaardImage.className="";  
    setTimeout(() => {
        zwaardImage.classList.add("red"); 
    }, 100);


    pHB.innerHTML = "Een rood lichtzwaard wordt gebruikt door de Sith en staat symbool voor haat, woede, agressie en macht. De Sith-lords die een rood lichtzwaard gebruiken zijn bereid om er alles aan te doen om hun doel te bereiken. De Sith kan geen band vormen met de kyberkristallen. Daarom moet de Sith de kristallen laten bloeden om de kristallen naar hen wil te buigen."
    pKJ.innerHTML = "De meest bekende Sith-lords die een rood lichtzwaard gebruiken zijn Darth Vader, Darth Sidious, Darth Maul en Count Dooku."
    pTwee.innerHTML = "Het rode lichtzwaard werd voor het eerst geïntroduceerd in de originele Star Wars-film, die later bekend werd als Star Wars: Episode IV A New Hope. Dit was de film die in 1977 werd uitgebracht en geregisseerd door George Lucas. Het lichtzwaard werd gebruikt door Darth Vader (vroeger Anakin Skywalker)."
    imgKJ.src = "./images/star wars poster/A New Hope.png"
    blokKJ.style.background = "radial-gradient(circle, #ADADAD, #FF1F1F)";  
    blokKJ.style.boxShadow = "inset 0 0 2em rgba(0, 0, 0, 0.8)"; 
}


function whiteOn(){
    zwaardImage.className="";  
    setTimeout(() => {
        zwaardImage.classList.add("white"); 
    }, 100);


    pHB.innerHTML = "Het witte lichtzwaard wordt vaak geassocieerd met unieke Jedi-meesters die hun pad hebben verlaten voor een nieuw begin. De witte kleur staat symbool voor vernieuwing en zuivering. Hetzelfde als dat er geen rood kyberkristal natuurlijk kan worden gevonden, is dat met een wit kyberkristal ook. Het zuiveringsproces is symbolisch en diepgaand, waarbij de Jedi zich toewijdt aan de lichte kant van de Force en de duisternis in zichzelf overwint. Dit proces vereist diepgaande meditatie, reflectie en spirituele groei. Het resulterende witte lichtzwaard symboliseert vaak een Jedi die in evenwicht is, vrij van conflicten en gewijd aan vrede en rechtvaardigheid."
    pKJ.innerHTML = "De meest bekende zwaardmeester die een wit lichtzwaard hanteert is Ahsoka Tano. Zij heeft haar oude lichtzwaarden ingeleverd toen ze de Jedi-order verliet."
    pTwee.innerHTML = "Het witte lichtzwaard werd voor het eerst geïntroduceerd in de originele Star Wars serie, die later bekend werd als Star Wars Rebels. Dit was een serie die in 2014 werd uitgebracht en geregisseerd door Lucasfilm Animation. Het lichtzwaard werd gebruikt door Ahsoka Tano die in deze serie een terugkeer maakte."
    imgKJ.src = "./images/star wars poster/Star Wars Rebels.png"
    blokKJ.style.background = "radial-gradient(circle, #ADADAD, #DBDBDB)";  
    blokKJ.style.boxShadow = "inset 0 0 2em rgba(0, 0, 0, 0.8)"; 
}


/****************************/
/* #Variabele voor geluidbestand */
/****************************/

// muziekButton.onclick = lightsaberSound;              //*WAAROM WERKT DEZE CODE NIET (.onclick)*// 
// function lightsaberSound(){
//     if (geluid.play){
//     }
//     else {geluid.pause();
//     }
// }
    
var musicButtonBlue = document.querySelector("ul li:nth-of-type(1) button");
var soundBlue = document.querySelector("ul li:nth-of-type(1) audio");

var musicButtonGreen = document.querySelector("ul li:nth-of-type(2) button");
var soundGreen = document.querySelector("ul li:nth-of-type(2) audio");

var musicButtonYellow = document.querySelector("ul li:nth-of-type(3) button");
var soundYellow = document.querySelector("ul li:nth-of-type(3) audio");

var musicButtonPurple = document.querySelector("ul li:nth-of-type(4) button");
var soundPurple = document.querySelector("ul li:nth-of-type(4) audio");

var musicButtonRed = document.querySelector("ul li:nth-of-type(5) button");
var soundRed = document.querySelector("ul li:nth-of-type(5) audio");

var musicButtonWhite = document.querySelector("ul li:nth-of-type(6) button");
var soundWhite = document.querySelector("ul li:nth-of-type(6) audio");


musicButtonBlue.addEventListener('click', lightsaberBlue);
musicButtonGreen.addEventListener('click', lightsaberGreen);
musicButtonYellow.addEventListener('click', lightsaberYellow); 
musicButtonPurple.addEventListener('click', lightsaberPurple); 
musicButtonRed.addEventListener('click', lightsaberRed); 
musicButtonWhite.addEventListener('click', lightsaberWhite); 


function lightsaberBlue() {
    if (soundBlue.paused) {
      soundBlue.play();
    } else {
      soundBlue.pause();
    }
  }


function lightsaberGreen() {
    if (soundGreen.paused) {
      soundGreen.play();
    } else {
      soundGreen.pause();
    }
  }


function lightsaberYellow() {
    if (soundYellow.paused) {
      soundYellow.play();
    } else {
      soundYellow.pause();
    }
  }


function lightsaberPurple() {
    if (soundPurple.paused) {
      soundPurple.play();
    } else {
      soundPurple.pause();
    }
  }


function lightsaberRed() {
    if (soundRed.paused) {
      soundRed.play();
    } else {
      soundRed.pause();
    }
  }

  
function lightsaberWhite() {
    if (soundWhite.paused) {
      soundWhite.play();
    } else {
      soundWhite.pause();
    }
  }

  