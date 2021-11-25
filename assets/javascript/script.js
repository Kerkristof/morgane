$(document).ready(function(){
  $('.nav-burger').click(function(){
    $('.nav-links').toggleClass('responsive');
  });
  $('.nav-links li a').click(function(){
    $('.nav-links').toggleClass('responsive');
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
