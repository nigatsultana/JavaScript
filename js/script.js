// show text ex1
function show(){
    document.getElementById('st').innerHTML="hello world";
}

function changeText(){
    document.getElementById('ct').innerHTML="Hello There";
}

function showDate(){
    document.getElementById('sd').innerHTML= Date();
}

// bulb
function bulbOn(){
    document.getElementById('bulb').src=("images/bulbon.gif");
}
function bulbOff(){
    document.getElementById('bulb').src=("images/bulboff.gif");
}
// change style
function ChangeStyle(){
    document.getElementById('cs').style.color="blue";
}
// font size-6
function fontSize(){
    document.getElementById('fs').style.fontSize="30px";
}
// border
function styleBorder(){
    document.getElementById('sb').style.border="2px solid red";

}
// show/hide
function textShow(){
    document.getElementById('sh').style.display="block";
}
function textHide(){
    document.getElementById('sh').style.display="none";
}

// example 9
function repeatText(){

    var data = "welcome";

    document.getElementById('rt').innerHTML=data;


}
// example 10
function change(){

    var text ="Bangladesh";
    document.getElementById('bt').innerHTML= text;
}
// example 11
function textRepeat(){

    var rept ="Beauty";
        rep2 ="Black, green";
    
    document.getElementById('nb').innerHTML= rept.repeat(3);
}
// example 12
var number1=4;
var number2=5;

var put =number1+number2;
function mData(){
    document.getElementById('m').innerHTML=put;

}
// example 13
var number3=5;
var number4=5;
var number5=4;

var out = number3-number4+number5;
 function eData(){
     document.getElementById('e').innerHTML=out;
 }
 // example 14
var number6=5;
var number7=5;
var number8=8;

var result =number6*number8;
 function fData(){
     document.getElementById('f').innerHTML=result;
 }
  // example 15
  let num1,num2,equal;

  num1=8;
  num2=5;
  equal = num1 != num2;

  function oparetor(){
    document.getElementById('op').innerHTML=equal;
  }
// example 16
let col1,col2,eqe;
 col1=4;
 col2="6";
 eqe = col1 === col2;

function identical(){
  document.getElementById('ic').innerHTML=eqe;
}
// example 17
function classEx(){
    document.getElementsByClassName('c')[2].innerHTML="Beautiful";
}
// example 18
 function tagEX(){
    let count = document.getElementsByTagName('p');
    alert(count.length);
 }
