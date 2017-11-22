;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	/* ================================
	===  PRE LOADING EFFECT  	   ====
	=================================== */
	/*$win.load(function() {
	    
	    $(".preloader-text").addClass('pre-animate');

	    // will first fade out the loading animation
		$(".status").delay(3000).fadeOut();
	    
	    // will fade out the whole DIV that covers the website.
		$(".preloader").delay(3500).fadeOut("slow");
	});

	
	$(document).ready(function() {
		$('.link-photo').magnificPopup({
			type: 'image',
			mainClass: 'mfp-with-zoom',
			removalDelay: 300,
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			},
			gallery: {
				enabled: true
			}
		});
	});*/
	/* ================================
	===  PAGE SCROLLING EFFECTS    ====
	=================================== */
	var iScrollPos = 0;
	
	function scrollEffect() {

		var iCurScrollPos = $(this).scrollTop(),
			newStream = $('.news'),
			navTrigger = $('.nav-trigger'),
			headerStrem = $('.header');
		if (iCurScrollPos > iScrollPos && iCurScrollPos > 100) {

	        newStream.addClass('scrolling');
	        navTrigger.addClass('scrolling');
	        headerStrem.addClass('scrolling');
	    } else if ( iCurScrollPos < 200) {

	       newStream.removeClass('scrolling');
	       navTrigger.removeClass('scrolling');
	       headerStrem.removeClass('scrolling');
	    }


	    iScrollPos = iCurScrollPos;	
	}

	$win.on('scroll',scrollEffect);






	/* ================================
	===  BACK TO TOP ANIMATION     ====
	=================================== */
	var offset = 700,
		offsetOpacity = 1200,
		scrollTopDuration = 700,
		backToTop = $('.back-to-top');

	//hide or show the "back to top" link
	$win.scroll(function(){
		( $(this).scrollTop() > offset ) ? backToTop.addClass('is-visible') : backToTop.removeClass('is-visible fade-out');
		if( $(this).scrollTop() > offsetOpacity ) { 
			backToTop.addClass('fade-out');
		}
	});

	//smooth scroll to top
	backToTop.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scrollTopDuration
		);
	});



	/* ================================
	===  MAIN NAVIGATION           ====
	=================================== */
	var navTrigger = $('.nav-trigger'),
		body = $('body'),
		overlay = $('.overlay');
		

		function toggleNavigation( event ) {
			event.preventDefault();
			body.toggleClass('nav-open');
		}

		function overlayFunction() {
			body.toggleClass('nav-open');
		}

		navTrigger.on('click',toggleNavigation);
		overlay.on('click',overlayFunction);
		

		$('#navigation li').each(function(){  
			$(this).on('click',function(){
       			body.toggleClass('nav-open');
       		});
    	});

		

	
	/* ================================
	===  PARALLAXIFY               ====
	=================================== */

	/*$.parallaxify({
		positionProperty: 'transform',
		responsive: true,
		motionType: 'natural',
		mouseMotionType: 'performance',
		motionAngleX: 70,
		motionAngleY: 70,
		alphaFilter: 0.5,
		adjustBasePosition: true,
		alphaPosition: 0.025
	});*/




	/* ================================
	===  SLICK SLIDER              ====
	=================================== */
	
	/*var slickSlide = $('.screenshot-slider').slick({
		'arrows': false,
		'autoplay' : true,
		'fade' : true
	});

	$('#prev').on('click', function (e) {
    	e.preventDefault();
        slickSlide.slick('slickPrev');
    });

    $('#next').on('click', function (e) {
    	e.preventDefault();
      	slickSlide.slick('slickNext');
    });*/





	/* ================================
	===  NEWS TICKER               ====
	=================================== */

	/*$('#vticker').vTicker();*/
	
	



	/* ================================
	===  OWL CAROUSELS             ====
	=================================== */
	var owl = $("#screenshot-carousel"),
		owlAdvantages = $('#owl-advantages'), owlTargets = $('#owl-target');
	owl.owlCarousel({
		        items: 3,//3 items above 1000px browser width
		        margin: 20,
		        itemsDesktop: [1000, 3], //3 items between 1000px and 901px
		        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
		        itemsTablet: [600, 1], //1 items between 600 and 0
		        itemsMobile: [479,1], // itemsMobile disabled - inherit from itemsTablet option
		        navigation: false, // Show next and prev buttons
		        slideSpeed: 800,
		        paginationSpeed: 400,
		        // autoPlay: 5000,
		        stopOnHover: true
	});
 
	/*owl.owlCarousel({
      singleItem: true,
      autoPlay: false
    });

    owlAdvantages.owlCarousel({
    	singleItem: true,
    	autoPlay: false
    });

    owlTargets.owlCarousel({
        singleItem: true,
        autoPlay: false
    });*/
	
	/* ================================
	===  SCREENSHOT IMAGES         ====
	=================================== */

	$('#screenshot-carousel a').nivoLightbox({
        effect: 'fadeScale',
    });
	
	/* ================================
	===  ACCORDION                 ====
	=================================== */
	
	var acc = document.getElementsByClassName("accordion-header");
	var i;

	for (i = 0; i < acc.length; i++) {
	    acc[i].onclick = function(){
	        /* Toggle between adding and removing the "active" class,
	        to highlight the button that controls the panel */
	        this.classList.toggle("active");

	        /* Toggle between hiding and showing the active panel */
	        var panel = this.nextElementSibling;
	        if (panel.style.display === "block") {
	            panel.style.display = "none";
	        } else {
	            panel.style.display = "block";
	        }
	    }
	}

    /* ================================
	===  REVIEW TAB                ====
	=================================== */
	
	// SET REVIEW TAB WATERMARK TEXT
	var reviewSection = $('#about');
	var firstLinkText = $('.nav-tabs li:first-child').children('a').text();
	reviewSection.append('<div class="review-watermark">'+ firstLinkText +'</div>');

	$('.nav-tabs li').each(function(){  

		$this = $(this);
		$tabLink = $this.children('a');
		
		$tabLink.on('click',function(){

   			$linkText = $(this).text();
   			$('.review-watermark').remove();
   			reviewSection.append('<div class="review-watermark">'+ $linkText +'</div>');
   		});

	});
	
	
	$(".nav-tabs li").click(function(){
	    var  cur =$(".nav-tabs li").index(this);
	    var elm = $('.tab-pane:eq('+cur+')');
	    elm.addClass("animated fadeInLeft");
	    $('.review-watermark').addClass('animated slideInUp');
	    setTimeout(function() {
	          elm.removeClass("fadeInLeft");
	          $('.review-watermark').removeClass('animated slideInUp');

	    }, 1000);
	});






	/* ================================
	===  ANIMATE ON SCROLL         ====
	=================================== */
	AOS.init({
		easing: 'ease-out-quart',
		duration: 1200,
		//disable: 'mobile',
		disable: function () {
	    var maxWidth = 1024;
	    return window.innerWidth <= maxWidth;
	  }
	});


})(jQuery, window, document);
