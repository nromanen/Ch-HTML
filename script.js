

function someFunc() {
    let minValue = document.games.mins.value;
    let maxValue = document.games.maxs.value;
    var rand = minValue - 0.5 + Math.random() * (maxValue - minValue + 1);
    rand = Math.round(rand);
    return rand;
}
function kkk() {
    let minValue = document.games.mins.value;
    let maxValue = document.games.maxs.value;

    if (minValue>300) //чого непрацює (minValue>300 &&)
    {
        alert("The number must be between 1 and 300");
        return;
    }
     if (maxValue>300){
        alert("The number must be between 1 and 300");
        return;
    }
    if(minValue>maxValue){
        alert("The min must be < than max");

    }

    let select = games.operatores.options[games.operatores.selectedIndex].value;
    let sum = changeOption(+select,someFunc(),someFunc());


}

function changeOption(select,rand1,rand2) {
    let sumView, sum;
    switch (select){
        case 1:
            sum = rand1 + rand2;
            sumView = ( rand1 + " + " + rand2 );
            break;
        case 2:
            sum = rand1 - rand2;
            sumView = ( rand1 + " - " + rand2 );
            break;
        case 3:
            sum = rand1 * rand2;
            sumView = ( rand1 + " * " + rand2 );
            break;
    }
    document.getElementById("sum").innerHTML = sumView;
    document.games.exercise.value = sum;
    window.sum = sum;
}

function Ggg() {


if (document.games.answer.value == sum) {
    alert("Good job!")
    return true;


}
else {
    alert("Try again")
    return false;

}
}





document.games.gen.onclick = kkk;
document.games.checkk.onclick = Ggg;






