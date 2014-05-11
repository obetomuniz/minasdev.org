jQuery(function(){
  jQuery(".goto").on('click',function(e){
    e.preventDefault();
    jQuery('html, body').animate({ scrollTop: jQuery(jQuery(this).attr("href")).offset().top - 100}, 1000);
  });
});