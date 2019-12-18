// Close modal  
toggleModal = () => {
  const modal = document.querySelector('.modal');
        modal.addEventListener('click', (event) => {
          let target = event.target;
          if (target.classList.contains('modal') && !target.classList.contains('modal__dialog')) {
            hideModal();
          }
        });
        hideModal = () => {
          modal.classList.remove('modal--visible');
        };
        document.onkeydown = function(evt) {
    
          if (evt.keyCode == 27) {
            modal.classList.remove('modal--visible');
          }
        };
};
toggleModal();

// open modal
$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });

});
// Scroll up
$(document).ready(function(){
  $('body').append('<a href="#" class="button__scroll-up">листайте вверх</a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "800") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "800") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $(".button__scroll-up").scrollToTop();
});
// Projects Swiper
$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.projects-swiper-container', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });
  var next = $('.swiper-button-next2');
  var prev = $('.swiper-button-prev2');
  var bullets = $('.swiper-pagination2');

  next.css('left', prev.width() + 20 + bullets.width()+10)
  bullets.css('left', prev.width() + 20)

  //  Steps swiper - text slider for steps section
  var mySwiper2 = new Swiper ('.steps__swiper-container2', {
    // Optional parameters
    loop: false,
    navigation: {
      nextEl: '.steps-slide__button-next',
      prevEl: '.steps-slide__button-prev',
    },
    // If we need pagination
    pagination: {
      el: '.steps-slide__pagination2',
      type: 'bullets',
    },
  });

  //  Steps swiper - image slider for steps section
  var mySwiper3 = new Swiper ('.steps__swiper-container3', {
    // If we need pagination
    pagination: {
      el: '.steps-slide__pagination3',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.steps-slide__button-next',
      prevEl: '.steps-slide__button-prev',
    },
  });
  // Width between pagination bullets 
  var stepsNext = $('.steps-slide__button-next');
  var stepsPrev = $('.steps-slide__button-prev');
  var stepsBullets = $('.steps-slide__pagination2');

  stepsNext.css('left', stepsPrev.width() + 30 + stepsBullets.width() + 20)
  stepsBullets.css('left', stepsPrev.width() + 17) 
    // Points navigation in section steps
  $('.steps__item').on('click', function () {
    $('.steps__item').removeClass('active');
    $(this).addClass('active');
    const e = $(this).data('index');
    mySwiper2.slideTo(e)
    mySwiper3.slideTo(e)
    })

  mySwiper2.on('slideChange', (function () {
  let e = mySwiper2.activeIndex - 0;
  if (e === 6) {e=0};
  $('.steps__item').removeClass('active');
  $('.steps__item').eq(e).addClass('active');
  }));

  mySwiper3.on('slideChange', (function () {
    let e = mySwiper3.activeIndex - 0;
    if (e === 6) {e=0};
    $('.steps__item').removeClass('active');
    $('.steps__item').eq(e).addClass('active');
    }))
});


// animation for play icon
$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.video__play').each(function() {
			var self = $('.video__play'),
			    height = self.offset().top;
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('screwIn')
			}
		});
	});
});
// animation for col 50 right in projects
$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('#projCol50right').each(function() {
			var self = $(this),
			height = self.offset().top;
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('slideRight')
			}
		});
	});
});
// animation for col 50 left in projects

$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('#projCol50Left').each(function() {
			var self = $(this),
			height = self.offset().top;
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('slideLeft')
			}
		});
	});
});

// animation for col 30 left in types

$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('#types30Left').each(function() {
			var self = $(this),
			height = self.offset().top;
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('slideLeft')
			}
		});
	});
});

// animation for col 30 center in types

$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('#types30Center').each(function() {
			var self = $(this),
			height = self.offset().top;
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('slideCenter')
			}
		});
	});
});

// animation for col 30 right in types

$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('#types30Right').each(function() {
			var self = $(this),
			height = self.offset().top;
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('slideRight')
			}
		});
	});
});

// animation for col 30 left in types

$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('#des30Left').each(function() {
			var self = $(this),
			height = self.offset().top;
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('slideLeft')
			}
		});
	});
});

// animation for col 30 center in types

$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('#des30Center').each(function() {
			var self = $(this),
			height = self.offset().top;
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('slideCenter')
			}
		});
	});
});

// animation for col 30 right in types

$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('#des30Right').each(function() {
			var self = $(this),
			height = self.offset().top;
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('slideRight')
			}
		});
	});
});