

// =========================================
//  ACCORDION
// =========================================


function accordion(trigger,target){
  var accordion = $('.accordion');
  var targetAccordion = $('#' + target);

  if(targetAccordion.hasClass('accordion--open')){
    trigger.removeClass('accordion--triggered');
    targetAccordion.slideUp().removeClass('accordion--open').addClass('accordion--closed');
  }else{
    $('.accordion__trigger.accordion--triggered').removeClass('accordion--triggered');
    trigger.addClass('accordion--triggered');
    accordion.slideUp().removeClass('accordion--open').addClass('accordion--closed');
    targetAccordion.slideDown().removeClass('accordion--closed').addClass('accordion--open');
  }
}


$('.accordion--closed').each(function(){
  $(this).hide();
});


$('.accordion__trigger').click(function(event){
  var trigger = $(this);
  var target = $(this).attr('data-target');

  accordion(trigger,target);
});

