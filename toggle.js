"use strict"; 
var toggle=false;
var toggleBackground=document.getElementById('outerdiv');
var circle=document.getElementById('innerdiv');
var text=document.getElementsByTagName('h1');
circle.addEventListener('click',function(event){
    if(!toggle){
        document.body.style.backgroundColor = "black";
        circle.style.marginLeft="77px"; 
        text["0"].style.color="white";
        toggle=true;
        toggleBackground.style.backgroundColor="white";
    }
    else{
        document.body.style.backgroundColor = "white";
        circle.style.marginLeft="0px"; 
        text["0"].style.color="black";
        toggle=false;
        toggleBackground.style.backgroundColor="white";
    }
    // event.stopPropogation();
});
