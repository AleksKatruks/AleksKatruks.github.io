$(function(){
	
	var model = {
		nashe: {
		  title:  'Nashe online store',
          detail: 'It was my first website, where I used AngularJS. There were used routing and ajax request' +
                  'Also I made a simple design with focussing on a product'+
                  'It had to be simple in use without bucket, just through the contact form.'		  		  
				  
	    },
		betrue: {
		  title:  'Betrue brand',
          detail: 'It was my  first fully completed project, where I designed and developed(HTML/CSS/JS) a website - online store for "Betrue" brand (clothes selling)' +
                  'The design of the website was created in minimalistic style with the use of Photoshop' +
				  'There was established a simple bucket. When you add positions to the bucket, data is stored in the localstorage.'	,
          linkto: 'www.betrue.com.ua'				  
		},
		dispatch: {
		  title:  'Email markup',
          detail: '"E-mail Dispatch" - Email marketing campaigns. In the framework of the project I was coordinating different teams. We had to design templates( HTML table markup), that further were sent to doctors. I used Photoshop and Illustrator while creating a design.' +
                  'I have launched more than 8 designes. According to company policies I cant share template with text and img',
		  linkto: 'www.github.com/AleksKatruk/Email'			
		},
		videoplugin: {
		  title:  'Pfizers videopage',
          detail: 'Video page - a task was to create a page, where all videos of each product were gathered together in groups. But since the website was hosted on Drupal CMS,' +
                  'I had limited possibilities in creating and development. So, I used only pure JS.'+
				  'I created a simple UI with a function of video grouping/filter by the name of a particular product.',
           linkto: 'www.pfizermed.com.ua/uk-UA/node/1246?destination=uk-UA/node/1246'				  
		},
		a2o: {
		  title:  'A20 - furniture brand',
          detail: 'Here I created a simple design of a landing page. The main aim is to share information about the company. I used yellow and black colors, and block structure'            	  		     			
		},
		travel: {
		  title:  'Selected travel',
          detail: 'The main idea of the site is to select an appropriate journey destination. You need to answer a short survey and the site will define, which place will meet your wishes and be the best for your visit', 
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
	 console.log(slideWidth);
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.pop-up__window').css('max-width', slideWidth);
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
