$(function(){
	
	var model = {
		nashe: {
		  title:  'Nashe online store',
          detail: 'It was my first website where I used AngularJS. There was used routing and ajax request' +
                  'Also I made simple design with making accent on product'+
                  'It had to be simple in use without bucket, just contact form.'		  		  
				  
	    },
		betrue: {
		  title:  'Betrue brand',
          detail: 'It was the first full completed project where I have designed and developed(HTML/CSS/JS) a website - oline store for "Betrue" brand (clothes selling)' +
                  'The design of the website was created in a minimalistic style, using Photoshop' +
				  'There was established a simple bucket. When you add to bucket positions data is stored in localstorage.'	,
          linkto: 'www.betrue.com.ua'				  
		},
		dispatch: {
		  title:  'E-mail Dispatch',
          detail: '"Dispatch email" - Email marketing campaigns. In the framework of the project I was coordinating I had to to design templates( HTML table markup) for sending them to doctors. I used Photoshop and Illustrator while creating a design.' +
                  'I have launched more than 8 designes'
		},
		videoplugin: {
		  title:  'Pfizers videopage',
          detail: 'Video page - a task was to create a page, where all videos of each product were gathered togather in groups. But since the website was hosted on Drupal CMS,' +
                  'I had limited possibilities in creating and development. So there were acceptable only pure JS.'+
				  'I created simple UI with function of video grouping/filter by the name of a particular product.',
           linkto: 'www.pfizermed.com.ua/uk-UA/node/1246?destination=uk-UA/node/1246'				  
		},
		a2o: {
		  title:  'A20 - furniture brand',
          detail: 'Here I created simple design of landing page. The main aim is to share information about company. I used yellow and black colors and block structure'            	  		     			
		},
		travel: {
		  title:  'Selected travel',
          detail: 'Main idea of simple site to select appropriate direction for you. You need to answer on short survey and site define you wishis which you would like to get from travel', 
          linkto: 'www.behance.net/gallery/58795577/Carpathian-website-for-travelers'		  
		}
	};
	var carousel = $('.carousel'),
		    slideWidth = 700,
			start,
			end;
    $('.item__button').click(function(){
	console.log(this.id);
        fitmodal(this.id);
		$('.pop-up').addClass('visible');
		
	});
	$('.pop-up__close').click(function(){
		$('.pop-up, .pop-up__background, .pop-up__window').removeClass('visible');
		$('.pop-up__window .info-box__button').removeClass('visibility');
	});
	$('.pop-up__background').click(function(){
    $('.pop-up, .pop-up__background, .pop-up__window').removeClass('visible');
	$('.pop-up__window .info-box__button').removeClass('visibility');
  });
	
	$('#prev').click(function(){shiftSlide(-1)})
	$('#next').click(function(){shiftSlide(1)})
	
	function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('.carousel').css('left', slideWidth * -1)
  }
	setDimensions();
	
	
	function shiftSlide(direction){
		
		carousel.addClass('transition').css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
		setTimeout(function(){
		if(direction === 1){
			$('.slide:first').before($('.slide:last'));
		}
		else if(direction === -1){
			$('.slide:last').after($('.slide:first'));
			}
		
		carousel.removeClass('transition');
		carousel.css('transform', 'translateX(0px)');
		},700)
	}
	
	function fitmodal(id){
		console.log(id);
		$('.pop-up__window .info-box__title').text(model[id].title);
		$('.pop-up__window .info-box__detail').text(model[id].detail);
		if(model[id].linkto){
			$('.pop-up__window .info-box__button').addClass('visibility');
		    $('.info-box__button').find('a').attr('href','https://' + model[id].linkto);
		} 
	    $('.slide').each(function(index,value){
		$(this).css({
           background: "url('img/" + id + '-' + index + ".jpg') center center/cover",
		  
		});		
			
		});
	
	};
});
