// script.js

function calculateTip(){
    var tip;
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality= document.getElementById("serviceQuality").value;
    var numPeople=document.getElementById("totalPeople").value;
    
    if(billAmount === "" || serviceQuality == 0){
        window.alert("Please enter some values");
        return;
    }
    
    if(numPeople === "" || numPeople<=1)
        {
            numPeople=1;
            document.getElementById("each").style.display="none";
        }
    else {
        document.getElementById("each").style.display="block";
    }
    
    if(serviceQuality == 0.3){
        tip = (0.3*billAmount)/numPeople;
        tip=tip.toFixed(2);
    }
    else if(serviceQuality == 0.2){
        tip = (0.2*billAmount)/numPeople;
         tip=tip.toFixed(2);
       // window.alert(tip);
    }
    else if(serviceQuality == 0.15){
        tip = (0.15*billAmount)/numPeople;
         tip=tip.toFixed(2);
    }
    else if(serviceQuality == 0.1){
        tip = (0.1*billAmount)/numPeople;
         tip=tip.toFixed(2);
    }
    
    
 document.getElementById("totaltip").style.display="block";
 document.getElementById("tip").innerHTML= tip;
}

//hide the tip amount on load

document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";

// click the button

document.getElementById("calculate").onclick = function(){ calculateTip(); };