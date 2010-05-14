jQuery.fn.haccordion = function(options) {
  settings = jQuery.extend({
    triggerevent: 'mouseover',
    duration: 300
  }, options);

  lefts = {};
  // Fetch all of the inital left values
  $(this).children('*').each(function(index) {
    lefts[$(this).attr('id')] = parseInt($(this).css('left'));
  });
  
  // Bind the mouse overs
  $(this).children('*').bind(settings.triggerevent, function() {
    prev = $(this).prevAll();
    prev.each(function(index) {
      $(this).animate({left: lefts[$(this).attr('id')]-130}, settings.duration);
    });
    $(this).animate({left: lefts[$(this).attr('id')]}, settings.duration);
    next = $(this).nextAll();
    next.each(function(index) {
      $(this).animate({left: lefts[$(this).attr('id')]}, settings.duration);
    });
  });
}