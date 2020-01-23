
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
var imageArray= ["Images/slide1.jpg", "Images/slide2.jpg", "Images/slide3.jpg", "Images/slide4.jpg", "Images/slide5.jpg"];
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
//set interval of the image change 
var timeInterval= setInterval(imageChange, 500);

 // pause the slide on user click
 slideshow.onclick = function(){
     clearInterval(timeInterval);
 }

 function myFun() {
    var x = document.createElement("input");
    x.setAttribute("type", "radio");
    document.body.appendChild(x);
  }
 