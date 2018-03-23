function proverka () {
      var otvet = document.getElementById('yourchoice').value;
      var otvetpc = document.getElementById('finOperation').value;

    if (otvet == otvetpc) {
       finish = (" = " + otvetpc + "<font color='green'> ( Верно! ) </font>" );
        document.getElementById('finish').innerHTML = finish;
        localStorage.correct = (localStorage.correct) ? Number(localStorage.correct) + 1: 1;
        correct();
  } else {
        finish = (" = " + otvet + "<font color='brown'> ( это не правильный ответ! Попробуйте еще... ) </font>");
            document.getElementById('finish').innerHTML = finish;
            localStorage.incorrect = (localStorage.incorrect) ? Number(localStorage.incorrect) + 1: 1;
            incorrect();
      }
}

function correct() {
       target.innerHTML = localStorage.correct || 0;
        }

        function incorrect() {
               target2.innerHTML = localStorage.incorrect || 0;
                }

function del_storage() {
localStorage.clear();
location.reload();
}
