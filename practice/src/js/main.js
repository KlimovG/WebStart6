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
// Swiper
$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.projects-swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
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

  //  Steps swiper container 1
  var mySwiper2 = new Swiper ('.steps__swiper-container1', {
    // Optional parameters
    loop: false,
    navigation: {
      nextEl: '.steps-slide__button-next',
      prevEl: '.steps-slide__button-prev',
    },
    // If we need pagination
    pagination: {
      el: '.steps-slide__pagination1',
      type: 'fraction',
    },
    // pagination: {
    //   el: '.steps-slide__pagination2',
    // },
  });
  // var prevSteps = $('.steps-slide__button-prev');
  // var nextSteps = $('.steps-slide__button-next');
  // var bulletsSteps = $('.steps-slide__pagination2');

  // nextSteps.css('left', prevSteps.width() + 20 + bulletsSteps.width()+10)
  // bulletsSteps.css('left', prevSteps.width() + 20)

  //  Steps swiper container 2
  var mySwiper3 = new Swiper ('.steps__swiper-container2', {
    // Optional parameters
    // direction: 'vertical',
    // loop: false,
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    slidesPerColumnFill: 'row',
    slideToClickedSlide: true,
    // If we need pagination
    pagination: {
      el: '.steps-slide__pagination2',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.steps-slide__button-next',
      prevEl: '.steps-slide__button-prev',
    },
  });
  //  Steps swiper container 2
  var mySwiper4 = new Swiper ('.steps__swiper-container3', {
    // Optional parameters
    // direction: 'vertical',
    // loop: false,
    
    // If we need pagination
    pagination: {
      el: '.steps-slide__pagination2',
      type: 'bullets',
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
  stepsBullets.css('left', stepsPrev.width() + 30) 


});

