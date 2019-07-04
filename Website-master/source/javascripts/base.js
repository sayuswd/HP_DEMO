$(function () {
  var nav = $('.nav');
  $('li', nav)
    .mouseover(function (e) {
      $('ul', this).stop().slideDown('fast');
    })
    .mouseout(function (e) {
      $('ul', this).stop().slideUp('fast');
    });
});