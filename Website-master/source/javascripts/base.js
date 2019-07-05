
$(function () {
  $('.menu-trigger').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.menunav_allset').slideUp();
    } else {
      $(this).addClass('active');
      $('.menunav_allset').slideDown();
    }
  });
});


$(function () {
  let navset = $('.languagenav');
  $('li', navset)
    .mouseover(function (e) {
      $('ul', this).stop().slideDown('fast');
    })
    .mouseout(function (e) {
      $('ul', this).stop().slideUp('fast');
    });
});
