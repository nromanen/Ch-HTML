function checknumber () {
  var numb1 = document.getElementById('firstnumb').value;
  var numb2 = document.getElementById('secondnumb').value;

var res = numb1.split("");
for (var i=0;i<res.length/2;i++) {
var obmen = res[i];
res[i] = res[res.length-i-1];
res[res.length-i-1] = obmen;
}

var res1 = res.join('');

if (res1 == numb2) {
var resultat = "Все верно!";
      document.getElementById('result').innerHTML = resultat;
} else {
  resultat = "Ошибка! Значения не совпадает";
      document.getElementById('result').innerHTML = resultat;
}
    }
