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



  // Табы
  var locationHash = window.location.hash

  $('body').on('click', '.tabs button', function (e) {
    e.preventDefault()

    if (!$(this).hasClass('active')) {
      const $parent = $(this).closest('.tabs_container'),
        activeTab = $(this).data('content'),
        $activeTabContent = $(activeTab),
        level = $(this).data('level')

      $parent.find('.tabs:first button').removeClass('active')
      $parent.find('.tab_content.' + level).removeClass('active')

      $(this).addClass('active')
      $activeTabContent.addClass('active')
    }
  })

  if (locationHash && $('.tabs_container').length) {
    const $activeTab = $('.tabs button[data-content=' + locationHash + ']'),
      $activeTabContent = $(locationHash),
      $parent = $activeTab.closest('.tabs_container'),
      level = $activeTab.data('level')

    $parent.find('.tabs:first button').removeClass('active')
    $parent.find('.tab_content.' + level).removeClass('active')

    $activeTab.addClass('active')
    $activeTabContent.addClass('active')

    $('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
  }


  // Аккордион
  $('body').on('click', '.accordion .accordion_item .head', function (e) {
    e.preventDefault()

    const $item = $(this).closest('.accordion_item'),
      $accordion = $(this).closest('.accordion')

    if ($item.hasClass('active')) {
      $item.removeClass('active').find('.data').slideUp(500)
    } else {
      $accordion.find('.accordion_item').removeClass('active')
      $accordion.find('.data').slideUp(500)

      $item.addClass('active').find('.data').slideDown(500)
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


