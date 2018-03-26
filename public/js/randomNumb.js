window.onload = function randomnum () {
var min = 0;
var max = 10000;
var rand = Math.floor(Math.random() * (max - min + 1) + min);
document.getElementById('firstnumb').value = rand;
}
