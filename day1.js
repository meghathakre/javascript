//var ko redeclare or reinitialize kr skte
//let ko redeclare ni kr skte reinitialize kr skte hai
//const ko redeclare reinitialize ni kr skte 

var num=20;
var num='hello';
console.log(num);

let num1=20;
num1='hello';
console.log(num1);


const num2=20;
console.log(num2);


function showInput(){
    console.log("hello world")
    alert("hello world")
}

function showDouble(){
    alert("hii")
}

function Show(){
    alert("i am megha")
}
 function FlexDirection(){
    let selectnav=document.querySelector('.nav');
    console.log(selectnav);
    selectnav.style.display='flex';
    selectnav.style.listStyleType="none";
    
 }
 function change_style(){
    let selected_button=document.querySelector('.contact');
    selected_button.style.color="yellow";
    selected_button.style.backgroundColor="black";
    selected_button.style.border="2px solid yellow";

 }
 function previous_style(){
    let selected_button=document.querySelector('.contact');
    selected_button.style.color="black";
    selected_button.style.backgroundColor="yellow";
    selected_button.style.border="1px solid black";

 }
 
 function opennav(){
    let selectnav= document.querySelector('.openlist');
selectnav.style.left="0px";
selectnav.style.transition="left 1s";
 }
 
 function changenav(){
    let chngnav=document.querySelector('.openlist');
    chngnav.style.left="-300px";
    selectnav.style.transition="left 1s";
 }