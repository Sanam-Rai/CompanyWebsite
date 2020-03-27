
//Sticky header with the scroll anitmation 

//Use throttle() funciton to prevent the slow down of the browser 

// var headerFun = _.throttle(() =>{
//     console.log("headerFun");
// }, 300);

var headerFun = function(){
    console.log("headerFun");

    //dectect scroll position
    var scrollPosition= Math.round(window.scrollY);
    // Add sticky class to header if the position > 100px

    if( scrollPosition > 100){
        document.querySelector("header").classList.add("sticky");
        document.querySelector("div#logoDiv").classList.add("sticky");
        document.querySelector("div#logoDiv").classList.add("sticky");
        document.querySelector("div#nameDiv").classList.add("sticky");
        document.querySelector("nav").classList.add("sticky");
    }
    //else, remove the sticky class to the header 
    else{
        document.querySelector("header").classList.remove("sticky");
        document.querySelector("div#logoDiv").classList.remove("sticky");
        document.querySelector("div#logoDiv").classList.remove("sticky");
        document.querySelector("div#nameDiv").classList.remove("sticky");
        document.querySelector("nav").classList.remove("sticky"); 
    }
}
// Run the headerFun function every time you scroll
window.addEventListener("scroll", headerFun);

// Create different functions for the inner header elements and stick them 

// For SlideShow

var slideshow = document.getElementById("imageSlide");
//create an array of images for slideshow 
var imageArray= ["Images/slide1.jfif", "Images/slide2.jfif", "Images/slide3.jfif", "Images/slide4.jfif", "Images/slide5.jfif"];
// initilize count
var count = 0;
//create a function for the image changes thorugh "src"
function imageChange(){
    slideshow.setAttribute("src", imageArray[count]);
    count++;

    if( count >= imageArray.length){
        count = 0;
    }
}

var timeInterval = setInterval(imageChange, 2000);

// make the slideshow start and stop on click
// help for slideshow.onclick function is retrived from: 
//https://stackoverflow.com/questions/35209662/stopping-and-starting-a-slideshow-with-onclick-event
var clicked = false;
slideshow.onclick = function() {
    if(!clicked){
        clearInterval( timeInterval);
        clicked = true;
    }
    else{
        timeInterval = setInterval(imageChange, 2000);
        clicked = false;
    }
}
// ========================================================================================================================
 
//===========================================================================================================================
//For left and right image slides 
var flag = false;
var counterForLeft = imageArray.length-1;
function left(){
    if( !flag ){
        clearInterval(timeInterval);
        flag = true;
    }
    if( counterForLeft <= 0){
        counterForLeft = imageArray.length-1;
    }
    slideshow.setAttribute("src", imageArray[counterForLeft]);
    counterForLeft--;
}

/*
ROUGH CODE:
function left(){
    var flag = false;
    var count2 = imageArray.length;
    if( !flag ){
        clearInterval(timeInterval);
        flag = true;
    }
    else{
        slideshow.setAttribute("src", imageArray[count2]);
        count2--;

        if( count2 <= 0){
            count2 = imageArray.length;
        }
        flag = false;
    }
}

var flag2 = false;
function right(){
    if( !flag){
        clearInterval(timeInterval);
    }
    imageChange();
}
*/

var flag2 = false;
var counterForRight = 0;
function right(){
    if( !flag){
        clearInterval(timeInterval);
    }
    if( counterForRight >= imageArray.length){
        counterForRight = 0;
    }
    slideshow.setAttribute("src", imageArray[counterForRight]);
    counterForRight++;
}