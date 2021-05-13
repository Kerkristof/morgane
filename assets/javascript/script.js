$(function(){
  $('.burger').click(function(){
    $('.links').toggleClass('responsive');
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() < 100) {
      $("#myBtn").hide();
    }
    else{
      $("#myBtn").show();
    }
  });

})
