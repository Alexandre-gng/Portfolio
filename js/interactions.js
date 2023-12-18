var lastScrollTop = 0;

$(window).scroll(function () {

var st = $(this).scrollTop();
        if (st < lastScrollTop){
            $('.navbar ').fadeIn();
        } else {
          $('.navbar ').fadeOut();
        }
        lastScrollTop = st;
  })