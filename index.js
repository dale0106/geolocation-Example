"use strict";

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
let image = new Image();

if (navigator.geolocation){

 let params = {enableHighAccuracy:true, timeout: 10000, maximumAge: 0};
 document.querySelector("body").appendChild(canvas);
 navigator.geolocation.getCurrentPosition(gotPosition, denied, params);


}

else{
    
 alert("Your browser does not support navigator.geolocation");
    
}

function gotPosition(position){
    var key = "AIzaSyDhogmRmuCdphAKb2nfc1BoC1UnqRBUIho";
    var  longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    var url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude +  "," + longitude + "&zoom=14&size=400x400&key=" + key + "&markers=color:blue%7Clabel:C%7C" + latitude + "," + longitude;
    
    canvas.width = 800;
    canvas.height = 800;
  
  // canvas.appendChild(image);
    image.onload = function(){ // we need to load the image before drawing it!!!
        
        ctx.drawImage(image, 0, 0);
    };
    
    image.src = url; // add src AFTER Image has loaded otherwise it wont work
     
    // this runs when you click allow
}



function denied(err){

    // this runs when you click denied
    alert("We dont have permission to find your location");
    
}



