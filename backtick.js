//backtick ka use multiple line string me likhne ke liye use hota hai;
//veriable ka use html me krne ke liye backtick ka use krte hai

// let heading="<h1>Hello</h1>";
// let paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corporis error consequatur! Possimus aspernatur iure impedit et repudiandae eum, ab iste officiis consectetur nulla quae voluptatum corporis ullam excepturi est!";



// let design=`<section>
// <div></div>
// <div></div>
// </section>`;



function output(){
let imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTraORMV35k_0Uv9MhnStjbKlr_xtrJw8S2RDbfXH9TYzeMKTSD2qf_ug6thGL-mFyx4Hc&usqp=CAU";
let username="megha thakre";
let userprofession="developer";
let useremail="megha@1234567891";
let usermobile="654546778";
let useraddress="www.webdeveloper.com";

let card=`<section class="carddesign">
<article>
<div><img src="${imgurl}"</div>
<div>
<h4>${username}</h4>
<h5>${userprofession}</h5>
<h6>${useremail}</h6>
<h6>${usermobile}</h6>
</div>
</article>
<article>
<div>${useraddress}</div>
</article>
</section>`;


let selectshowcard=document.querySelector('.showcard')
selectshowcard.innerHTML=card;



}