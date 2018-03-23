
document.getElementById("text").style.display='none';

function funcrandom () {
var min = document.getElementById('first').value;
var max = document.getElementById('second').value;

document.getElementById("text").style.display='';
document.getElementById("btn_proverka").style.display='';

var random = Math.floor(Math.random() * (max - min + 1) + min);
document.getElementById('resultat').innerHTML = random;

var random2 = Math.floor(Math.random() * (max - min + 1) + min);
document.getElementById('resultat2').innerHTML = random2;

var select=document.getElementById('randfunction').value;
document.getElementById('znak').innerHTML = select;

var finish = (" = ?");
    document.getElementById('finish').innerHTML = finish;

switch (select){
case "+":
var res = random + random2;
break;
case "-":
res = random - random2;
break;
case "*":
res = random * random2;
break;
case "/":
res = random / random2;
break;
}

document.getElementById('finOperation').value = res;
}
