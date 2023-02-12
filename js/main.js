// アコーディオンのタイトルがクリックされたら
$('.accordion-question').on('click', function(e) {

  // .accordion-contentを選択
  var content = $(e.currentTarget).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();

});

//+ -の変換
$(function() {
  $('.accordion-question').click(function() {
   $(this).find(".switch").toggleClass('active');
  });
});