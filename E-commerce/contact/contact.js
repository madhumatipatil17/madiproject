var uName=false;
var mail=false;
var btn = document.getElementById('subBtn')
function validateName(){
    const userName = document.getElementById("userName").value;
    var namePattern = /^([a-zA-Z\s])+$/;
    const name_error = document.getElementById("error_name")
    if (userName == '') {
        name_error.innerHTML = ("required")
    
    }
    else if (!userName.match(namePattern)) {
        name_error.innerHTML = ('Username cannot contain numbers')
       
    }
    else if (userName.match(namePattern)) {
        name_error.innerHTML = (" ");
        uName=true;
    }
}
function validateEmail(){
    const email = document.getElementById("userEmail").value;
    var emailPattern = /[a-z0-9]+@([gmail]{5})+.[a-z]{2,3}$/;
    const email_error = document.getElementById("error_email")
    if (email == '') {
        email_error.innerHTML = ("required");
       
    }
    else if (!email.match(emailPattern)) {
        email_error.innerHTML = ("Please enter valid email");
      
    }
    else if (email.match(emailPattern)) {
        email_error.innerHTML = (" ");
        mail=true;
       
    }
if(uName && mail){
    btn.disabled=false;
}
}