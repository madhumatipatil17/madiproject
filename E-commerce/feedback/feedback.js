var stars=document.getElementsByClassName('fa-star');
var emoji=document.getElementById("iemoji");

stars[0].onclick=function(){
    stars[0].style.color="#ffd93b";
    stars[1].style.color="#e4e4e4";
    stars[2].style.color="#e4e4e4";
    stars[3].style.color="#e4e4e4";
    stars[4].style.color="#e4e4e4";
    emoji.style.transform="translateX(0)"


}

stars[1].onclick=function(){
    stars[0].style.color="#ffd93b";
    stars[1].style.color="#ffd93b";
    stars[2].style.color="#e4e4e4";
    stars[3].style.color="#e4e4e4";
    stars[4].style.color="#e4e4e4";
    emoji.style.transform="translateX(-100px)";  
}

stars[2].onclick=function(){
    stars[0].style.color="#ffd93b";
    stars[1].style.color="#ffd93b";
    stars[2].style.color="#ffd93b";
    stars[3].style.color="#e4e4e4";
    stars[4].style.color="#e4e4e4";
    emoji.style.transform="translateX(-200px)";  
}

stars[3].onclick=function(){
    stars[0].style.color="#ffd93b";
    stars[1].style.color="#ffd93b";
    stars[2].style.color="#ffd93b";
    stars[3].style.color="#ffd93b";
    stars[4].style.color="#e4e4e4";
    emoji.style.transform="translateX(-300px)";  
}
stars[4].onclick=function(){
    stars[0].style.color="#ffd93b";
    stars[1].style.color="#ffd93b";
    stars[2].style.color="#ffd93b";
    stars[3].style.color="#ffd93b";
    stars[4].style.color="#ffd93b";
    emoji.style.transform="translateX(-400px)";  
}

function newDoc() {
    window.location.assign("../index.html")
  }



var userName=false;
var mail=false;
var btn = document.getElementById('subBtn')
function validateName(){
    const fbname = document.getElementById("fbname").value;
    var namePattern = /^([a-zA-Z\s])+$/;
    const name_error = document.getElementById("error_name")
    if (fbname == '') {
        name_error.innerHTML = ("**required")
    
    }
    else if (!fbname.match(namePattern)) {
        name_error.innerHTML = ('**Username cannot contain numbers')
       
    }
    else if (fbname.match(namePattern)) {
        name_error.innerHTML = (" ");
        userName=true;
    }
}
function validateEmail(){
    const email = document.getElementById("fbEmail").value;
    var emailPattern = /[a-z0-9]+@([gmail]{5})+.[a-z]{2,3}$/;
    const email_error = document.getElementById("error_email")
    if (email == '') {
        email_error.innerHTML = ("**required");
       
    }
    else if (!email.match(emailPattern)) {
        email_error.innerHTML = ("**Please enter valid email");
      
    }
    else if (email.match(emailPattern)) {
        email_error.innerHTML = (" ");
        mail=true;
       
    }
if(userName && mail){
    btn.disabled=false;
}
}
