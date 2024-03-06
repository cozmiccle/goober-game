//dom check
document.addEventListener("DOMContentLoaded", function() {
    console.log("dom loaded")
});

//random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//goober effect
function gooberEffect(){
    gButton.style.backgroundColor()
}

const gButton = document.getElementById("gButton");
const gCount = document.getElementById("gooberCount");
const news = document.getElementById("news");
const newsTicker = document.getElementById("newsm");
const shop = document.getElementById("shop");
const item1 = document.getElementById("item1Buy");
const item2 = document.getElementById("item2Buy");
const item3 = document.getElementById("item3Buy");
const autogoobCount = document.getElementById("autogoob-count")
const crCount = document.getElementById("cr-count")
const machines = document.getElementById("machines");
const all = document.getElementById("all");
const logB = document.getElementById("logButton");
const log = document.getElementById("log");
const event1 = document.getElementById("event1");
const event2 = document.getElementById("event2");
const event3 = document.getElementById("event3");
const event4 = document.getElementById("event4");
const event5 = document.getElementById("event5");
const main = document.getElementById("main");

var autogoobs = 0;
var chickenRand = 0;
var goobers = 0;
var shopVisible = false;
var autogoobsDisabled = false;
var crDisabled = false;
var clickValue = 1;
var darkMode = false;
var logVisible = false;
var hasGoober = false;

crCount.style.visibility = "hidden";
item2.style.visibility = "hidden";
item3.style.visibility = "hidden";
news.style.visibility = "hidden";
shop.style.visibility = "hidden";
machines.style.visibility = "hidden";
logB.style.visibility = "hidden";
log.style.opacity = 0;
function gButtonPress(){
    goobers+=clickValue;
    hasGoober = true;
    console.log("goobers: "+goobers);
    news.style.visibility = "visible";
}
function toggleDarkMode(){
    if(!darkMode){
        all.style.backgroundColor = "rgb(49, 51, 56)";
        all.style.color = "white"
        gButton.style.color = "white"
        gButton.style.backgroundColor = "rgb(92, 130, 255)";
        news.style.backgroundColor = "rgb(43, 45, 49)";
        shop.style.backgroundColor = "rgb(43, 45, 49)";
        machines.style.backgroundColor = "rgb(43, 45, 49)";
        darkMode = true;
    } else {
        all.style.backgroundColor = "white";
        all.style.color = "black"
        gButton.style.color = "black";
        gButton.style.backgroundColor = "rgb(134, 199, 255)";
        news.style.backgroundColor = "lightgrey";
        shop.style.backgroundColor = "lightgrey";
        machines.style.backgroundColor = "lightgrey";
        darkMode = false;
    }
}
function update(){
    gCount.textContent = goobers+" goobers";
    if(hasGoober){
        document.title = "goober game ["+goobers+" goobers]";
    }
    //price checkers
    if(goobers < 10){
        item1.style.opacity = 0.6;
        item1.style.cursor = 'not-allowed';
    } else {
        item1.style.opacity = 1;
        item1.style.cursor = 'default';
    }
    if(goobers < 25){
        item2.style.opacity = 0.6;
        item2.style.cursor = 'not-allowed';
    } else {
        item2.style.opacity = 1;
        item2.style.cursor = 'default';
    }

    requestAnimationFrame(update);
}
requestAnimationFrame(update);
function checkForShop() {
    if (goobers >= 10) {
        shop.style.visibility = "visible";
        shopVisible = true;
        newsTicker.textContent = "a local shop has opened up, selling various goodies such as the autogoob, which can generate goobers automatically via igm (internal goobustion methods). it appears to produce 2 goobers every 5 seconds."
        logB.style.visibility = "visible";
        event2.textContent = "a local shop has opened up, selling various goodies such as the autogoob, which can generate goobers automatically via igm (internal goobustion methods). it appears to produce 2 goobers every 5 seconds."
    } else {
        setTimeout(checkForShop, 100); // Adjust the delay (in milliseconds) as needed
    }
}
checkForShop();

function checkFor25G(){
    if(goobers >= 25){
        newsTicker.textContent = "the shop has a new item, the chicken randomizer. it's a standard setup that has a chicken walking around buttons. one of them holds five goobers. the chicken has a 1 in 4 chance of hitting the correct button."
        item2.style.visibility = "visible";
        event3.textContent = "the shop has a new item, the chicken randomizer. it's a standard setup that has a chicken walking around buttons. one of them holds five goobers. the chicken has a 1 in 4 chance of hitting the correct button.";
        if(logVisible){
            log.style.bottom = 355;
        }
    } else {
        setTimeout(checkFor25G, 100);
    }
}
checkFor25G();
function checkFor120G(){
    if(goobers >= 120){
        newsTicker.textContent = "the gooberinator is able to be upgraded. upgrade the gooberinator to increase the amount of goobers/click"
        item3.style.visibility = "visible";
        gooberEffect()
    } else {
        setTimeout(checkFor120G, 100);
    }
}
checkFor120G();

function buyItem(item){
    if(item = 1){

    }
}
function showLog(){
    if(!logVisible){
        logB.textContent = "hide log [wip]";
        log.style.opacity = 1;
        log.style.bottom = "490px";
        main.style.marginLeft = "0%";
        main.style.marginRight = "0%";
        logVisible = true;
    } else if(logVisible){
        logB.textContent = "show log [wip]";
        log.style.opacity = 0;
        log.style.bottom = 7000;
        main.style.marginLeft = "10%";
        main.style.marginRight = "10%";
        logVisible = false;
    }
}
function buyItem(item){
    if(item == 1 && goobers >= 10){
        goobers -= 10;
        autogoobs += 1;
        machines.style.visibility = "visible";
        autogoobCount.textContent = "disable autogoobs ("+autogoobs+")";
        autogoobStart()
    }
    if(item == 2 && goobers >= 25){
        goobers -= 25;
        chickenRand += 1;
        crCount.textContent = "disable chicken randomizers ("+chickenRand+")";
        crCount.style.visibility = "visible";
        crStart()
    }
    if(item == 3){
        goobers -= 120
        clickValue *= 2;
    }
}
function toggleAutogoobs(){
    if(!autogoobsDisabled){
        autogoobsDisabled = true;
        autogoobCount.textContent = "enable autogoobs ("+autogoobs+")";
    } else {
        autogoobsDisabled = false;
        autogoobCount.textContent = "disable autogoobs ("+autogoobs+")";
    }
}
function autogoobStart(){
    if(!autogoobsDisabled){
        goobers+=2
    }
    setTimeout(autogoobStart,5000)
}
function toggleCR(){
    if(!crDisabled){
        crDisabled = true;
        crCount.textContent = "enable chicken randomizers ("+chickenRand+")";
    } else {
        autogoobsDisabled = false;
        crCount.textContent = "disable chicken randomizers ("+chickenRand+")";
    }
}
function crStart(){
    console.log("cr attempt");
    if(!crDisabled){
        crplate = getRandomInt(4);
        if(crplate == 2){
            goobers += 5;
            console.log("cr success");
        }
    }
    setTimeout(crStart,1000);
}