$(() => {


  // Моб. меню
  $('header .mob_menu_btn').click((e) => {
    e.preventDefault()

    $('header .mob_menu_btn').addClass('active')
    $('body').addClass('menu_open')
    $('header .menu').addClass('show')
    $('.overlay').fadeIn(300)
  })

  $('header .close_btn, header .menu .item a, .overlay').click((e) => {
    $('header .mob_menu_btn').removeClass('active')
    $('body').removeClass('menu_open')
    $('header .menu').removeClass('show')
    $('.overlay').fadeOut(300)
  })



  // Фокус при клике на название поля
  $('body').on('click', 'form label', function () {
    $(this).closest('.line').find('input, textarea').focus()
  })



  $('body').on('click', '.modal_link', function (e) {
    e.preventDefault()

    Fancybox.close(true)
    Fancybox.show([{
      src: $(this).data('content'),
      type: 'inline',
    }]);
  })


  Fancybox.bind('[data-fancybox="gallery"]', {});
  Fancybox.bind('[data-fancybox="gallery1"]', {});
  Fancybox.bind('[data-fancybox="gallery2"]', {});
  Fancybox.bind('[data-fancybox="gallery3"]', {});
  Fancybox.bind('[data-fancybox="gallery4"]', {});
  Fancybox.bind('[data-fancybox="gallery5"]', {});

  // Fancybox
  Fancybox.defaults.autoFocus = false
  Fancybox.defaults.trapFocus = false
  Fancybox.defaults.dragToClose = false
  Fancybox.defaults.placeFocusBack = false
  Fancybox.defaults.l10n = {
    CLOSE: "Закрыть",
    NEXT: "Следующий",
    PREV: "Предыдущий",
    MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
  }


  const videoSliders = [],
  video = document.querySelectorAll('.video .swiper')

  video.forEach(function (el, i) {
    el.classList.add('video_s' + i)

    let options = {
      loop: true,
      speed: 500,
      watchSlidesProgress: true,
      slideActiveClass: 'active',
      slideVisibleClass: 'visible',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      preloadImages: false,
      lazy: {
        enabled: true,
        checkInView: true,
        loadOnTransitionStart: true,
        loadPrevNext: true
      },
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1
        },
        480: {
          spaceBetween: 20,
          slidesPerView: 1,
      
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 2
        },
        1023: {
          spaceBetween: 20,
          slidesPerView: 2
        },
        1280: {
          spaceBetween: 20,
          slidesPerView: 2
        }
      },
      on: {
        init: swiper => {
          setTimeout(() => setHeight($(swiper.$el).find('.video .swiper-slide')))
        },
        resize: swiper => {
          setTimeout(() => {
            $(swiper.$el).find('.video .swiper-slide').height('auto')
            setHeight($(swiper.$el).find('.video .swiper-slide'))
          })
        }
      }
    }

    videoSliders.push(new Swiper('.video_s' + i, options))
  })


  const aboutSliders = [],
  about = document.querySelectorAll('.about .swiper')

  about.forEach(function (el, i) {
    el.classList.add('about_s' + i)

    let options = {
      loop: true,
      speed: 500,
      watchSlidesProgress: true,
      slideActiveClass: 'active',
      slideVisibleClass: 'visible',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      preloadImages: false,
      lazy: {
        enabled: true,
        checkInView: true,
        loadOnTransitionStart: true,
        loadPrevNext: true
      },
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1
        },
        480: {
          spaceBetween: 20,
          slidesPerView: 2,
      
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 3
        },
        1023: {
          spaceBetween: 20,
          slidesPerView: 3
        },
        1280: {
          spaceBetween: 20,
          slidesPerView: 4
        }
      },
      on: {
        init: swiper => {
          setTimeout(() => setHeight($(swiper.$el).find('.about .swiper-slide')))
        },
        resize: swiper => {
          setTimeout(() => {
            $(swiper.$el).find('.about .swiper-slide').height('auto')
            setHeight($(swiper.$el).find('.about .swiper-slide'))
          })
        }
      }
    }

    aboutSliders.push(new Swiper('.about_s' + i, options))
  })



  const stageSliders = [],
  stage = document.querySelectorAll('.stage .swiper')

  stage.forEach(function (el, i) {
    el.classList.add('stage_s' + i)

    let options = {
      loop: true,
      speed: 500,
      watchSlidesProgress: true,
      slideActiveClass: 'active',
      slideVisibleClass: 'visible',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      preloadImages: false,
      lazy: {
        enabled: true,
        checkInView: true,
        loadOnTransitionStart: true,
        loadPrevNext: true
      },
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1
        },
        480: {
          spaceBetween: 20,
          slidesPerView: 1,
      
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 2
        },
        1023: {
          spaceBetween: 30,
          slidesPerView: 3
        },
        1280: {
          spaceBetween: 30,
          slidesPerView: 3
        }
      },
      on: {
        init: swiper => {
          setTimeout(() => setHeight($(swiper.$el).find('.stage .swiper-slide')))
        },
        resize: swiper => {
          setTimeout(() => {
            $(swiper.$el).find('.stage .swiper-slide').height('auto')
            setHeight($(swiper.$el).find('.stage .swiper-slide'))
          })
        }
      }
    }

    stageSliders.push(new Swiper('.stage_s' + i, options))
  })


  
  const reviewsSliders = [],
    reviews = document.querySelectorAll('.reviews .swiper')

  reviews.forEach(function (el, i) {
    el.classList.add('reviews_s' + i)

    let options = {
      loop: true,
      speed: 500,
      watchSlidesProgress: true,
      centeredSlides: true,
      slideActiveClass: 'active',
      slideVisibleClass: 'visible',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      preloadImages: false,
      lazy: {
        enabled: true,
        checkInView: true,
        loadOnTransitionStart: true,
        loadPrevNext: true
      },
      breakpoints: {
        0: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        480: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 1.4
        },
        1023: {
          spaceBetween: 20,
          slidesPerView: 1.5
        },
        1280: {
          spaceBetween: 73,
          slidesPerView: 1.6
        }
      },
      on: {
        init: swiper => {
          setTimeout(() => setHeight($(swiper.$el).find('.reviews .swiper-slide')))
        },
        resize: swiper => {
          setTimeout(() => {
            $(swiper.$el).find('.reviews .swiper-slide').height('auto')
            setHeight($(swiper.$el).find('.reviews .swiper-slide'))
          })
        }
      }
    }

    reviewsSliders.push(new Swiper('.reviews_s' + i, options))
  })




 

  // Аккордион
  $('body').on('click', '.accordion .accordion_item .accordion_item-head', function (e) {
    e.preventDefault()

    const $item = $(this).closest('.accordion_item'),
      $accordion = $(this).closest('.accordion')

    if ($item.hasClass('active')) {
      $item.removeClass('active').find('.accordion_item-data').slideUp(300)
    } else {
      $accordion.find('.accordion_item').removeClass('active')
      $accordion.find('.accordion_item-data').slideUp(300)

      $item.addClass('active').find('.accordion_item-data').slideDown(300)
    }
  })




  $(document).on('change', '.error', function () {

    $(this).removeClass('error');
    if ($(this).attr('class') != 'checked') { $(this).next().hide(); }
  })

  $(document).on('click', '.submit_btn', function (event) {
    event.preventDefault();
    var dataForAjax = "action=form&";
    var addressForAjax = myajax.url;
    var valid = true;
    var form = $(this).closest('form');
    $(this).closest('form').find('input:not([type=submit]),textarea').each(function (i, elem) {
      if (this.value.length < 3 && $(this).hasClass('required')) {
        valid = false;
        $(this).addClass('error');
        $(this).next().show();
      }
      if ($(this).attr('name') == 'email' && $(this).hasClass('required')) {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (!pattern.test($(this).val())) {
          valid = false;
          $(this).addClass('error');
          $(this).next().show();
        }
      }
      if ($(this).hasClass("checked") && !$(this).prop("checked")) {
        $(this).addClass('error');
        valid = false;
      }

      if (i > 0) {
        dataForAjax += '&';
      }
      dataForAjax += this.name + '=' + this.value;
    })

    if (!valid) {
      return false;
    }

    $.ajax({
      type: 'POST',
      data: dataForAjax,
      url: addressForAjax,
      success: function (response) {

        Fancybox.close()

        Fancybox.show([{
          src: "#thanks",
          type: 'inline'
        }])

        $('form').trigger("reset");
      }
    });
  });


})


