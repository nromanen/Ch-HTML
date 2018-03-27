menu.onclick = function() {
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
