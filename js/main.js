$( document ).ready(function(){
	
	
  var isMobile, isIOS;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  console.log(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
   isMobile = true;
  }
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)){
	  isIOS = true;
  }
   // Sticky Nav on Mobile
     if (isMobile) {
    
	   $('.section-block').children().removeClass('animatable');
	   $('.about__block').removeClass('animatable').removeClass('bars-wrap');
	
  };
   if (isMobile) {
    $('nav').addClass('fixed');
  }
  //hover for IOS
  
   	 if(isIOS){
	  $('.gallery__item').click(function(){});
      };
	  
	  
    // Scroll function  menu jump
     var sections = $('section'),
     nav = $('nav');

	$(window).on('scroll', function (){
		
	var site = $('.site-main').offset().top,
	    current_pos = $(this).scrollTop() + 90;
		
    if(isMobile) current_pos = $(this).scrollTop()+150;
	var win = $(window).height();
	
	
	if(!isMobile){
	  if($(this).scrollTop() > site + win){
		nav.addClass('fixed');	
	} else {
		nav.removeClass('fixed');	
	}
	}
	
	sections.each(function(){
	
	 var top_section = $(this).offset().top,
	     bottom = top_section + $(this).outerHeight();
		
	  if (current_pos >= top_section && current_pos < bottom){
	    $('.menu-link').removeClass('active-link');		
		nav.find('.menu-link[dest="'+$(this).attr('id') + '"]').addClass('active-link');
		  
	  }
	 
	
	});
	//  $(window).resize(function(){
    //   posFilterBar($('.filter').first());
    // });

 
	
	
	// Animate blocks
	var $animatables = $('.animatable');
	    $animatables.each(function(){
		$animatable = $(this);
		
	
		if($animatable.offset().top + $animatable.height() + 200 < current_pos + win){
			$animatable.addClass('animateon');
			
		};

	});
	

    });
	

		/*gallery scroll*/
	
	
	
	
	/*function onScrollInit( items, trigger ) {
    items.each( function() {
		console.log('ddd');
    var wayElement = $(this),
        wayAnimationClass = wayElement.attr('data-way-animation'),
        wayAnimationDelay = wayElement.attr('data-way-animation-delay');
      
        wayElement.css({
          '-webkit-animation-delay':  wayAnimationDelay,
          '-moz-animation-delay':     wayAnimationDelay,
          'animation-delay':          wayAnimationDelay
        });

        var wayTrigger = ( trigger ) ? trigger : wayElement;
        
        wayTrigger.waypoint(function() {
          wayElement.addClass('animated').addClass(wayAnimationClass);
		
          },{
              triggerOnce: false,
              offset: '100%'
        });
  });

	


	}
	onScrollInit( $('.way-animation'));*/

			

	$('#container').mixItUp({
		selectors: {
          target: '.mix',
          filter: '.filter',
          sort: '.sort-btn'
     },
       animation: {
         animateResizeContainer: false,
         effects: 'fade scale'
    }
		
	});	
	


	

	$('.menu-link').on('click', function () {
    
    var dest = $(this).attr('dest');
   // if(isIOS){
	//	$('html').scrollTop($(dest).offset().top);
		
		
	//}
    $('html, body').animate({
    scrollTop: $('#' + dest).offset().top}, 500);
	});
	
/*$("#form").submit(function(){
	
	var formdata = $('form').serialize();
	console.log(formdata);
    $.ajax({
		type:"POST",
		data: formdata,
		url: "contacts.php", 
		success: function(data) {
            alert(data)}
	});
});*/

                
	
	
});
