$(function(){
  $('.toggle-icon').click(function(){
    $('.toggle-link').toggleClass('responsive');
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
