var firstname = document.registrationForm.names.value=randomStr()

function randomStr(m) {
    var firstname = document.registrationForm.names.value=m
    var m = m || 9; s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i=0; i < m; i++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
    return s;
    alert(Hello)
};


function validateForm() {


    var firstname = document.registrationForm.names.value
    var secondname = document.registrationForm.Reversed.value


    if (secondname === firstname.split('').reverse().join('')) {
        alert("Good job!")
        return true;


    }
    else {
        alert("Reverse that!")
        return false;

    }
}






