$(document).ready(function() {

	var $menu = $('#my-menu').mmenu({
      extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right',],
      navbar: {
        title: '<img src="img/Jack Heorhiian (3).png" alt="Logo">'
      }
    });
    
    var $icon = $('#my-icon');
    var API = $menu.data('mmenu');
  
    $icon.on('click', function(){
      API.open();
    });
  
    API.bind('open:finish', function() {
      setTimeout(function(){
        $icon.addClass('is-active');
      }, 100);
    });
    API.bind('close:finish', function() {
      setTimeout(function(){
        $icon.removeClass('is-active');
      }, 100);
    });
  //First carousel
  $('.carousel-services').on('initialized.owl.carousel', function(){
    setTimeout(function(){
      carouselService()
    },100);
  });
  $('.carousel-services').owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      }
    }
  });
  
  function carouselService(){
    $('.carousel-services-item').each(function(){
      var ths  = $(this), 
          thsh = ths.find('.carousel-services-content').outerHeight();
          ths.find('.carousel-services-image').css('min-height',thsh);
    });
  }carouselService();
  
  function onResize(){
    $('.carousel-services-content').equalHeights();
  }onResize();
  
  window.onresize = function () {onResize()};
  
  //Second carousel
  $('.carousel-services-second').on('initialized.owl.carousel', function(){
    setTimeout(function(){
      carouselServiceSecond()
    },100);
  });
  $('.carousel-services-second').owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 1
      },
      1100: {
        items: 1
      }
    }
  });
  
  function carouselServiceSecond(){
    $('.carousel-services-second-item').each(function(){
      var ths  = $(this), 
          thsh = ths.find('.carousel-services-second-content').outerHeight();
          ths.find('.carousel-services-second-image').css('min-height',thsh);
    });
  }carouselServiceSecond();
  //Resize Window
  
  function onResizeSecond(){
    $('.carousel-services-second-content').equalHeights();
  }onResize();
  
  window.onresize = function () {onResizeSecond()};
  
  $('.reviews').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    autoHeight: true
  });
  
  //E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display','flex').hide().fadeIn();
			setTimeout(function() {
                $(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
  
  //To top
  $(window).scroll(function(){
    if($(this).scrollTop() > $(this).height()){
        $('.top').addClass('active');
      }
    else{
      $('.top').removeClass('active');
    }
  });
  
  $('.top').click(function(){
    $('html, body').stop().animate({scrollTop: 0},'slow','swing');
  });
  
  function scrollToAnchor(aid){
    var aTag = $("[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  $("#link").click(function(){
    scrollToAnchor('about');
  });
  $("#link1").click(function(){
    scrollToAnchor('about');
  });
  $("#projects").click(function(){
    scrollToAnchor('projects');
  });
  $("#feedbacks").click(function(){
    scrollToAnchor('feedbacks');
  });
  $("#services").click(function(){
    scrollToAnchor('services');
  });
  $("#submit").click(function(){
    scrollToAnchor('submit');
  });
  
});

$(window).on('load',function(){
  $('.preloader').delay(1000).fadeOut('slow');
});
