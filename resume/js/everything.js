$("ul.nav li a:first").addClass('youarehere');

// changes nav link on scroll

  var sections = $('section');
  var nav = $('nav');
  var nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {

      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('ul.nav li a').removeClass('youarehere');
        sections.removeClass('youarehere');

        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('youarehere');
      }
    });
  });

// changes nav link on click

  nav.find('ul.nav li a').on('click', function () {
    var $el = $(this)
      , id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
  });


// adds fading in animation on scroll

  $('.about').addClass('animated fadeIn animateTiming');
  $('.portfolio .row').addClass('notVisible');
  $('.contact .row').addClass('notVisible');

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 150 && scroll <= 200) {
        $(".portfolio .row").addClass("animated fadeIn animateTiming");
    }

    else if (scroll >= 201) { /* FIX fade in for contacts */
      $(".portfolio .row").addClass("animated fadeIn animateTiming");
      $(".contact .row").addClass("animated fadeIn animateTiming2");
    }
});
