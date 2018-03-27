function matchpass(){  
var firstpassword=document.registrationForm.password.value;  
var secondpassword=document.registrationForm.password2.value;  
  
if(firstpassword==secondpassword){  
return true;  
}  
else{  

document.getElementById('confirmError').innerText = "Password and Confirm password should be the same";
document.getElementById("confirmError").classList.add('invalid');
document.getElementById("password").classList.add('errorBorder');
document.getElementById("password2").classList.add('errorBorder');


//alert("password must be same!");  
return false;  
}  
}  


 $(function () {
            var inputs = document.getElementsByTagName("input");
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].oninvalid = function (e) {
                    e.target.setCustomValidity("");
                    if (!e.target.validity.valid) {
                        e.target.setCustomValidity(e.target.getAttribute("data-error"));
                    }
                };
            }
        });

function f2(){



var password = document.getElementById("password"), 
confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

}