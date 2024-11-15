function registration(){
    let name= document.querySelector('.name').value ;
    let email= document.querySelector('.email').value ;
    let mobile= document.querySelector('.mobile').value ;
    let password= document.querySelector('.password').value ;
    let cpassword= document.querySelector('.cpassword').value ;


    if(name===""){
        alert("please enter your name");
        document.querySelector('.name').focus();
        return false;
    }
    else if(email===""){
        alert("please enter ypur email");
        document.querySelector('.email').focus();
        return false;
    }
    else if(!email.includes("@")){
        alert("please enter @ in email");
        document.querySelector('.email').focus();
        return false;
    }
        
    else if(!email.includes(".com")){
        alert("please enter .com in email");
        document.querySelector('.email').focus();
        return false;
    }
        
    else if(mobile===""){
        alert("plese enter mobile number");
        document.querySelector('.mobile').focus();
        return false;
    }

    else if(mobile.length !==10){
        alert(" mobile number should be 10 digit");
        document.querySelector('.mobile').focus();
        return false;
    }

    else if(isNaN(mobile)){
        alert(" mobile number should be  digit only");
        document.querySelector('.mobile').focus();
        return false;
    }

    else if(password===""){
        alert("plese enter password");
        document.querySelector('.password').focus();
        return false;

    }

    else if(!(password.match (/[1234567890]/)  || password.match (/[qwertyuiopasdfghjklzxcvbnm]]/) ||  password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/) ||
        password.match (/[!@#$%^&*_+=]/))){
        alert("plese  use strong password");
        document.querySelector('.password').focus();
return false;
    }

    else if(password!=cpassword){
        alert("plese  enter main password");
        document.querySelector('.cpassword').focus();
        return false;
    }
    
    else{
        window.location.href ="login.html";
    }
}
