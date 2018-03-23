$(".shorttext50").text(function(i, text) {

  if (text.length >= 50) {
    text = text.substring(0, 50);
    var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
    text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
  }

  $(this).text(text);

});

$(".shorttext100").text(function(i, text) {

  if (text.length >= 100) {
    text = text.substring(0, 100);
    var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
    text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
  }

  $(this).text(text);

});

$(".shorttext30").text(function(i, text) {

  if (text.length >= 30) {
    text = text.substring(0, 30);
    var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
    text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
  }

  $(this).text(text);

});
