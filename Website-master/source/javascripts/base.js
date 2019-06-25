javascript:
$(function () {
  $('.language p').click(function () {
    $(this).next('ul').slideToggle();
  });
});
