function output(){
    let imgurl=document.querySelector('.image').value ;
    let username=document.querySelector('.name').value;
    let userprofession=document.querySelector('.profession').value ;
    let useremail=document.querySelector('.email').value ;
    let usermobile=document.querySelector('.mobile').value ;
    let useraddress=document.querySelector('.address').value ;


    let card =`<section class="carddesign">
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
return false;
}