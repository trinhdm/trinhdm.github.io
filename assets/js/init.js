$(document).ready(function() {

  $('a').addClass('transition');

  // if homepage, the navbar slides down after X amount of pixels
    // if it's past 50px, navbar slides down
    // if it's the top of the page, navbar slides up
  // else, just appear
  if ($('#see-my-work-arrow').length) {
    $(window).on('scroll', function() {
      var y_scroll_pos = window.pageYOffset;
      var scroll_amount = 50;

      if (y_scroll_pos > scroll_amount) {
        $('#portfolio-navbar').stop().animate({
            top: '0px'
          }, 300);
      }

      if (y_scroll_pos < 50) {
        $('#portfolio-navbar').stop().animate({
            top: '-60px'
          }, 300);
      }
    });
  } else {
    $('#portfolio-navbar').css({top: '0px'});
    $('.col-md-8').css({padding: '0'});
  }


  // when you click on a link in the navbar, the navbar will slide up
  $('#navbar-interior a').on('click', function() {
    $('#portfolio-navbar').stop().animate({
        top: '-20px'
      }, 100);
  });



  // if the window is larger than a phone, then the navbar 'expands' on hover
  if ($(window).width() > 500) {
    $('#portfolio-navbar').hover(function() {
      $(this).stop().animate({
          padding: '10px 0'
      }, 300);
    }, function(){
      $(this).stop().animate({
          padding: '0'
      }, 300);
    });
  }

  // 'see my work arrow' - transforms the arrow into a heart on the homepage
  $('#see-my-work-arrow').hover(function() {
    $('.faa-hover').stop().animate({
        top: '20px'
    }, 300).addClass('visible');
  }, function(){
    $('.faa-hover').stop().animate({
        top: '-9px'
    }, 300).removeClass('visible');
  });
});


// waypoints
$(document).ready(function() {
  $('#selected-projects').css('opacity', 0);

  $('#selected-projects').waypoint(function() {
    $('#selected-projects').addClass('animated fadeIn');
  }, { offset: '50%' });


  $('#recent-writings').css('opacity', 0);

  $('#recent-writings').waypoint(function() {
    $('#recent-writings').addClass('animated fadeIn');
  }, { offset: '75%' });


  $('#skills-pie-chart').css('opacity', 0);

  $('#skills-pie-chart').waypoint(function() {
    $('#skills-pie-chart').addClass('animated fadeInUp');
    $('.slice').addClass('bake-pie');
  }, { offset: '75%' });



  $('#about-wordpress').css('opacity', 0);
  $('#about-bootstrap').css('opacity', 0);
  $('#about-sass').css('opacity', 0);
  $('#about-git').css('opacity', 0);
  $('#about-gulp').css('opacity', 0);

  $('#other-tools').waypoint(function() {
    $('#about-wordpress').addClass('animated fadeIn');

    setTimeout(function () {
      $('#about-bootstrap').addClass('animated fadeIn');
    }, 500);

    setTimeout(function () {
      $('#about-sass').addClass('animated fadeIn');
    }, 750);

    setTimeout(function () {
      $('#about-git').addClass('animated fadeIn');
    }, 1000);

    setTimeout(function () {
      $('#about-gulp').addClass('animated fadeIn');
    }, 1250);
  }, { offset: '75%' });
});

// preloader
// $(document).ready(function preload() {
//   setTimeout( function(){
//     $('#preloader').css({display: 'none', visibility: 'hidden'})
//   }, 3000 );
//
//   $('.content').css({display: 'none', visibility: 'hidden'});
//
//   setTimeout( function(){
//     $('.content').css({display: 'block', visibility: 'visible'})
//   }, 3000 );
//
//   preload();
// });


// forces the window to jump to the top on page reload/refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


// function to animate leaving a page
function fadeTransition() {
  $.fn.leavePage = function() {

    this.click(function(event){

      // don't go to the next page yet.
      event.preventDefault();
      linkLocation = this.href;

      // fade out this page first.
      $('body').fadeOut(500, function(){

        // then go to the next page.
        window.location = linkLocation;
      });
    });
  };

  // call the leavePage function upon link clicks with the "transition" class
  $('.transition').leavePage();
}

fadeTransition();



// scrolls a full 100vh at a time with arrow keys and buttons
function scrollPage() {
  function resize() {
    var vheight = $(window).height();
    // var vwidth = $(window).width();
    $('.intro').css({
      'height': vheight
      // 'width': vwidth
    });
  };

  function scrollUp() {
    var vheight = $(window).height();
    $('html, body').animate({
      scrollTop: (Math.ceil($(window).scrollTop() / vheight)-1) * vheight
    }, 500);
  };

  function scrollDown() {
    var vheight = $(window).height();
    $('html, body').animate({
      scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
    }, 1000);
  };

  $(document).ready(function(){
    resize();

    // Click to scroll down
    $('#see-my-work-arrow').click(function(event){
      scrollDown();
      event.preventDefault();
    });

    // Click to scroll up
    $('.scroll-prev').click(function(event){
      scrollUp();
      event.preventDefault();
    });
  });

  // Key Events
  // $(document).keydown(function(e) {
  //  if (e.keyCode == 40) { scrollDown(); };
  //  if (e.keyCode == 34) { scrollDown(); };
  //  if (e.keyCode == 33) { scrollUp(); };
  //  if (e.keyCode == 38) { scrollUp(); };
  //   e.preventDefault;
  // });

  // Mousewheel events
  // $(window).bind('mousewheel', function(event) {
  //     if (event.originalEvent.wheelDelta >= 0) {
  //         scrollDown();
  //     }
  //     else {
  //         scrollUp();
  //     }
  //     event.preventDefault;
  // });

  // Resize Container on window resize
  $(window).resize(function(){
    resize();
  });
}

scrollPage();





function pieCharts() {
  function sliceSize(dataNum, dataTotal) {
    return (dataNum / dataTotal) * 360;
  }

  function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
    $(pieElement).append("<div class='slice "+ sliceID + "'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;

    $(id + ' .' + sliceID).css({
      "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
    });

    $(id + ' .' + sliceID + ' span').css({
      "transform"       : "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
      "background-color": color
    });
  }

  function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    var
      maxSize = 179,
      sliceID = "s" + dataCount + "-" + sliceCount;

    if( sliceSize <= maxSize ) {
      addSlice(id, sliceSize, pieElement, offset, sliceID, color);
    } else {
      addSlice(id, maxSize, pieElement, offset, sliceID, color);
      iterateSlices(id, sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
    }
  }

  // generates the pies
  function createPie(id) {
    var
      listData      = [],
      listTotal     = 0,
      offset        = 0,
      i             = 0,
      pieElement    = id + " .pie-chart__pie"
      dataElement   = id + " .pie-chart__legend"

      // list of background colors
      color         = [
        "#3780FB",        // dodger-blue
        "#363636",        // mine-shaft
        "#a1a1a1",        // silver
        "#f7b733",        // sunshine
        '#fc4a1a',        // red-orange
        '#93C178',        // light green
      ];

    color = shuffle( color );

    $(dataElement + ' span').each(function() {
      listData.push(Number($(this).html()));
    });

    for(i = 0; i < listData.length; i++) {
      listTotal += listData[i];
    }

    for(i = 0; i < listData.length; i++) {
      var size = sliceSize(listData[i], listTotal);
      iterateSlices(id, size, pieElement, offset, i, 0, color[i]);
      $(dataElement + ' li:nth-child(' + (i + 1) + ')').css('border-color', color[i]);
      offset += size;
    }
  }

  // shuffles the colors
  function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }

    return a;
  }

  // creates the actual pies in html
  function createPieCharts() {
    createPie('#pieID--development');
    createPie('#pieID--design');
  }

  createPieCharts();
}

pieCharts();
