icon.onclick = function() {
    var x = document.getElementById("myTopnav");

    if(x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}


$(document).ready(function(){

 

        var $menu = $("#menu");

 

        $(window).scroll(function(){

            if ( $(this).scrollTop() > 100  ){

                $menu.addClass("fixed");

            } else if($(this).scrollTop() <= 100 ) {

                $menu.removeClass("fixed");

            }

        });//scroll

    });


    /* Ajax-запрос */

 

FUNCTION SendPost() // Наша функция, которая будет осуществлять ajax-отправку

{

jQuery.ajax({    // Начала конструкции для работы с Ajax через jQuery

type: "GET", // Метод, которым получаем данные из формы

url: "/send.php", // Обработчик формы.

data: jQuery("#form").serialize(), // Этот метод, берет форму с id=form и достает оттуда данные

success: FUNCTION(html) {    // функция выполняемая при успешном отправлении данных

jQuery("body").empty();    // очищаем тело документа

jQuery("body").append("<h2><center>Ваше сообщение успешно отправлено.</center></h2>"); // вставляем сообщение об успехе

}

});

}
