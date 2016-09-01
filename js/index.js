"use strict";
(function($){
  
  
  //初始化
  $(document).ready(function(){
  	$('#nav').onePageNav({
		scrollThreshold: 0.3
	});

	$(window).scroll(function(){
		if($(window).scrollTop() >150){
			$('#nav-mini').fadeIn();
			$('.header').hide();
		} else {
			$('#nav-mini').fadeOut();
			$('.header').show(1000);
		}
	});
  
 })
  
  //加载轮播图相关
  $(window).load(function(){
	
	//轮播图高度
	$('#home-slider').height($(window).height());
	$("#owl-main").owlCarousel({
			autoPlay: 3500,
			navigation: false,
            goToFirst: true,
            goToFirstSpeed: 2000,
			slideSpeed: 700,
			pagination: true,
			transitionStyle: "fade",
			singleItem: true,
			afterInit: function() {
                $('#home-slider').height($(window).height());
                if (!$('#home-slider').hasClass('fixed-height')) {
                    $('#home-slider #owl-main .item').height($(window).height());
                    $('#home-slider #owl-main img').height($(window).height());
                } else {
                    $('#home-slider #owl-main .item').height(1200);
                }
                
                $('#home-slider #owl-main img').width('auto');
                
                var left = ((($('#home-slider').width() - $('#home-slider #owl-main img').width())/2));
                if (left<0) {
                    $('#home-slider #owl-main img').css('top', '0px' );

                    $('#home-slider #owl-main img').css('left', left + 'px' );
                } else {
                    $('#home-slider #owl-main img').css('left', '0px' );
                    $('#home-slider #owl-main img').height('auto');
                    $('#home-slider #owl-main img').width($(window).width());
                    $('#home-slider #owl-main img').css('top', ((($('#home-slider').height() - $('#home-slider #owl-main img').height())/2)) + 'px' );
                }

            },
            afterUpdate: function() {
                $('#home-slider').height($(window).height());
                if (!$('#home-slider').hasClass('fixed-height')) {
                    $('#home-slider #owl-main .item').height($(window).height());
                    $('#home-slider #owl-main img').height($(window).height());
                } else {
                    $('#home-slider #owl-main .item').height(600);
                }
                $('#home-slider #owl-main img').width('auto');
                var left = ((($('#home-slider').width() - $('#home-slider #owl-main img').width())/2));
                if (left<0) {
                    $('#home-slider #owl-main img').css('top', '0px' );
                    $('#home-slider #owl-main img').css('left', left + 'px' );
                } else {
                    $('#home-slider #owl-main img').css('left', '0px' );
                    $('#home-slider #owl-main img').height('auto');
                    $('#home-slider #owl-main img').width($(window).width());
                    $('#home-slider #owl-main img').css('top', ((($('#home-slider').height() - $('#home-slider #owl-main img').height())/2)) + 'px' );
                }
            }
		});
		$("#owl-main-text").owlCarousel({
    		autoPlay: 3500,
    		goToFirst: true,
    		goToFirstSpeed: 2000,
    		navigation: false,
    		slideSpeed: 700,
    		pagination: false,
    		transitionStyle: "fadeUp",
    		singleItem: true
    	});
		//Set home slider height on resize
	  $(window).resize(function () { 
	        $('#home-slider').height($(window).height());
	        if ($(window).width() >1024) { $('.slider-parallax').css('padding-top', $(window).height() + 'px'); }
	  });
	  
	  $('#outer').unleash({
			          duration: 700,
				        childClassName: '.box',
				        captionClassName: '.caption_1',
                SliderWidth: '940px',
				        OpenFirstOnload: true,
                SliderHeight: '300px',
                width: 0.63,
                Event: "hover",
                easing:  "easeOutQuad",
				        captionEasing:  "easeInOutBack",
                CollapseOnMouseLeave: true,
                CaptionAnimation: "pop-up"
			});
})

//动画相关
jQuery(document).ready(function($) {
        "use strict";
        if ($(window).width()>1024) {
            jQuery(window).on("scroll", function(){//when the user is scrolling...
                /* Parallax */
                Move('.paraOn'); //move the background images in relation to the movement of the scrollbar
            });
        }
    });
    function Move(seccio){
        jQuery(seccio).each(function(){
            //var posY = jQuery(window).scrollTop()+jQuery(window).height()-jQuery(this).attr('yPos')/10+jQuery(this).height()+'px';
            //jQuery(this).css('background-position', '0 ' + posY);
            $(this).css('background-position', '0 '+(($(window).scrollTop()+$(window).height()-$(this).attr('yPos'))/3+$(this).height())+'px');


        });
    }
    jQuery('.parallax').on('inview', function(event, visible) {
            if (visible === true) {
                // element is now visible in the viewport
                var offset = jQuery(this).offset();
                jQuery(this).addClass('paraOn').attr('yPos',offset.top);
            } else {
                // element has gone out of viewport
                jQuery(this).removeClass('paraOn');
            }
    });


    jQuery(document).ready(function(){
        jQuery(".corner").click(function(){
            jQuery('#customizer').toggleClass('s-open');
        });
    });

    function swapStyleSheet(sheet){
        document.getElementById('general-css').setAttribute('href', sheet);
    }
}(jQuery));