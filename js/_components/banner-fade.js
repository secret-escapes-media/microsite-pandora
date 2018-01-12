


///////////////////////////////////////
//       Background overlay fade
///////////////////////////////////////

function overlay_bg(){
	var st = $(document).scrollTop();
	var wh = $(window).height();

  $('.js-bg-fade').each(function(){

    var distance = $(this).offset().top;
    var start = distance - wh;
    var progress = st - start;

    $(this).find('.js-bg-fade__overlay').css({
      "opacity": progress / wh
    });

  });

}

$(document).scroll(function() {
	overlay_bg();
});