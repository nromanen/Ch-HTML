$('#first,#second').on('input', function(){
this.value = this.value.replace(/[^\d]/g, '');
    });
$('#yourchoice').on('input', function(){
this.value = this.value.replace(/[^0-9\-]/g, '');
});

$('#yourchoice,#second,#first').on('input', function (){
  let minusIndex = this.value.lastIndexOf("-");
   if (minusIndex > 0 ){
     this.value = this.value.slice(0, minusIndex) + this.value.slice(minusIndex+1);
   }

});

function checkParams() {
    var first = $('#first').val();
    var second = $('#second').val();

    if(first.length != 0 && second.length != 0) {
        $('#btn_sozdat').removeAttr('disabled');
    } else {
        $('#btn_sozdat').attr('disabled', 'disabled');
    }
}

function checkresult() {
var youranswer = $('#yourchoice').val();
var rezultat = $('#resultat').html();
if(youranswer.length != 0  && rezultat.length != 0) {
    $('#btn_proverka').removeAttr('disabled');
} else {
    $('#btn_proverka').attr('disabled', 'disabled');
}
}

$(document).ready(function(){
  $("div.slider").hide();
  $("#btn_hide").click(function(){
    $("div.slider").hide(1000);
  });
  $("#btn_show").click(function(){
    $("div.slider").show(2000);
  });
});
