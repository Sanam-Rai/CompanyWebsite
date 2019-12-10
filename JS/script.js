/* implementing sticky header */

Window.onscroll = function() {myFuncton()};
//get the header
var header= document.getElementsByTagName("header");
// offset position of the nav bar
var sticky= header.offsetTop;

//Add the sticky class to the header when it is scroll position
function myFuncton(){
    if( window.pageYOffset > sticky){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}
