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
    modal.toggleClass('modal--visible');
    $('form'). find('input'). val("") ;
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


// Form validation
$('.modal__form').validate ({
  errorClass: "invalid" ,
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    userText: {
      required: true,
      minlength: 20,
      maxlength: 300,
    },
    userPhone: "required",
    // compound rule
    userEmail: {
      required: true,
      email: true
    }
  },
  messages: {
    userName: {
      required:"Имя обязательно",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длинее 15 букв",
    },           
    userPhone: "Телефон обязателен",
    userText: {
      required:"Напишите ваш вопрос",
      minlength: "Текст не короче 20 букв",
      maxlength: "Текст не длинее 300 букв",
    },
    userEmail: {
      required: "Заполните поле",
      email: "Введите в формате: name@domain.com"
    }
  },
  errorElement: "div",
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "php/send-modal.php",
      data: $(form).serialize(),
      success: function (response) {
        console.log('Ajax сработал. Ответ Сервера: ' + response);
        $(form)[0].reset();
        $('.modal__title').addClass('modal--unvisible');
        $('.modal__form').addClass('modal--unvisible');
        $('.modal__title-secondary').removeClass('modal--visible');
        $('.modal__title-secondary').addClass('modal--visible');
      }
    });
  }
  
});
// Form validation
$('.control__form').validate ({
  errorClass: "invalid" ,
  rules: {
    // simple rule, converted to {required:true}
    userNameControl: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    userPhoneControl: "required",
  },
  messages: {
    userNameControl: {
      required:"Имя обязательно",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длинее 15 букв",
    },           
    userPhoneControl: "Телефон обязателен",
  },
  errorElement: "div",
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "php/send-control.php",
      data: $(form).serialize(),
      success: function (response) {
        console.log('Ajax сработал. Ответ Сервера: ' + response);
        $(form)[0].reset();
        $('.control__form').addClass('modal--unvisible');
        $('.control__message').removeClass('modal--unvisible');
        $('.control__message').addClass('modal--visible');
      }
    });
  }
});
// Form validation
$('.footer__form').validate ({
  errorClass: "invalid" ,
  rules: {
    // simple rule, converted to {required:true}
    userNameFooter: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    userTextFooter: {
      required: true,
      minlength: 20,
      maxlength: 300,
    },
    userPhoneFooter: "required",
    // compound rule
  },
  messages: {
    userNameFooter: {
      required:"Имя обязательно",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длинее 15 букв",
    },           
    userPhoneFooter: "Телефон обязателен",
    userTextFooter: {
      required:"Напишите ваш вопрос",
      minlength: "Текст не короче 20 букв",
      maxlength: "Текст не длинее 300 букв",
    },
  },
  errorElement: "div",
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "php/send-footer.php",
      data: $(form).serialize(),
      success: function (response) {
        // const modal = document.querySelector('.modal');
        // var message = document.querySelector('.message');
        console.log('Ajax сработал. Ответ Сервера: ' + response);
        $(form)[0].reset();
        $('.footer__title').addClass('modal--unvisible');
        $('.footer__form').addClass('modal--unvisible');
        $('.footer__message').removeClass('modal--unvisible');
        $('.footer__message').addClass('modal--visible');
        // $('.message').addClass('message--visible');
      }
    }); 
  }
});
// Mask plugin
$(document).ready(function(){
  $('[type="tel"]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
});
// Close Message after form 
toggleMessage = () => {
  // const message = $('.message');
  const message = document.querySelector('.message');
        message.addEventListener('click', (event) => {
          let target = event.target;
          if (target.classList.contains('message') && !target.classList.contains('modal__dialog')) {
            hideMessage();
          }
        });
        hideMessage = () => {
          message.classList.remove('message--visible');
        };
        document.onkeydown = function(evt) {
    
          if (evt.keyCode == 27) {
            message.classList.remove('message--visible');
          }
        };

        closeBtn = $('.message__close');
        closeBtn.on('click', function () {
          message.classList.remove('message--visible');
        });
};
toggleMessage();
// отложенная загрузка яндекс карт
setTimeout(function(){
  const elemYa = document.createElement('script');
  elemYa.async = true;
	elemYa.type = 'text/javascript';
	elemYa.src = '//api-maps.yandex.ru/2.1/?apikey=b1919ead-ea00-4f73-b766-af76a6ac6c6e&lang=ru_RU&onload=init';
	document.getElementsByTagName('body')[0].appendChild(elemYa);
}, 3000);
// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    // ymaps.ready(init);
    function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [47.244734, 39.723227],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 17,
      });
      var myPlacemark = new ymaps.Placemark([47.244734, 39.723227], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map.svg',
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
      });
      let myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [47.244734, 39.723227] // координаты точки
        }
      });
      // Размещение геообъекта на карте.
      myMap.geoObjects.add(myPlacemark)
    };
    // Height change of clients card height
    // changeHeightCard = () => {
    //   const cardHeight = document.querySelector('.clients-card__item--first').clientHeight;

    //   if (cardHeight && !target.classList.contains('modal__dialog')) {
    //     hideModal();
    //   }
    // };
    // changeHeightCard();
    