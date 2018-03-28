$(function() {

  $('.message a').click(function() {
    $('form').animate({
      height: "toggle",
      opacity: "toggle"
    }, "slow");


  });

  $("#sendMessage").on("click", function(event) {
    event.preventDefault;
    var emailAddress = $("#mail").val();
    var subject = $("#subject").val();

    if (emailAddress.length > 0 && isValidEmailAddress(emailAddress) && subject.length > 0) {
      $("#wrongValid").hide();
      $("#wrongInput").hide();

      $.ajax({
        type: "POST",
        url: 'http://localhost:3000/contact',
        data: {
          email: $('#mail').val(),
          message: $('#subject').val()
        },
        success: function() {
          alert("Your message was sent!!");
          window.location.reload();
        }

      })
    } else {
      if (emailAddress.length == 0 || !isValidEmailAddress(emailAddress)) {
        $("#wrongValid").show();
        $("#wrongInput").hide();
      } else {
        $("#wrongValid").hide();
        if (subject.length == 0) {
          $("#wrongInput").show();
        }
      }


    };

  });




  function isValidEmailAddress(emailAddress) {

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    return pattern.test(emailAddress);

  }


  $("#btn").on("click", function(event) {
    event.preventDefault;

    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/pasword',
      data: {
        login: $('#login').val(),
        pass: $('#pass').val()
      },
      success: function(data) {
        if (typeof data != "string") {
          var tableContent = '';

          $.each(data, function() {
            tableContent += '<tr>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td>' + this.message + '<br><input rel="' + this._id + '" type="button" value="delete" class="delete" />' + '</td>';
            tableContent += '</tr>';
          });

          $('.table tbody').html(tableContent);

          $(".login-page").hide();
          $(".container").show();
        } else {
          alert(data);
        }
      }
    });
  });

  $('body').on('click', ".delete", function(event) {
    var btn = $(this);

    var confirmation = confirm('Are you sure you want to delete this message?');

    if (confirmation === true) {
      $.ajax({
        type: 'DELETE',
        url: '/deletemassage/' + $(this).attr('rel')
      }).done(function(response) {
        // Check for a successful (blank) response
        if (response.msg === '') {
          $(btn).parent('td').parent('tr').remove();
        } else {
          alert('Error: ' + response.msg);
        }
      });


    }
  });
});
