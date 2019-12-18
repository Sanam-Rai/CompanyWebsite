
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
if( scrollPosition > 120){
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