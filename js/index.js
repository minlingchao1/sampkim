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
	
	/**
	 * 产品展示 
	 */
	var n=1;
	$(".block3 ul li").click(function() {
        if (1 == window.mdslide || $(this).hasClass("current")) return ! 1;
        var e = $(this).index();
        n = e,
        window.mdslide = !0,
        $(".block3 ul li.current").removeClass("current");
        var t = $(this);
        return t.addClass("current"),
        $(".block3 ul li").find("p").hide(),
        setTimeout(function() {
            t.find("p").show()
        },
        400),
        setTimeout(function() {
            window.mdslide = !1
        },
        900),
        !1
    });
    var t = $(".block3 ul li").length,
    i = setInterval(function() {
        $(".block3 ul li").eq(n).click(),
        n += 1,
        n == t && (n = 0)
    },
    4e3);
    $(".block3 ul").hover(function() {
        clearInterval(i)
    },
    function() {
        i = setInterval(function() {
            $(".block3 ul li").eq(n).click(),
            n += 1,
            n == t && (n = 0)
        },
        4e3)
    }),

     $(".serBox").hover(function () {
		   $(this).children().stop(false,true);
		   $(this).children(".serBoxOn").fadeIn("slow");
	     $(this).children(".pic1").animate({right: -110},400);
	     $(this).children(".pic2").animate({left: 41},400);
	     $(this).children(".txt1").animate({left: -240},400);
	     $(this).children(".txt2").animate({right: 0},400);	
     },function () {
		   $(this).children().stop(false,true);
		   $(this).children(".serBoxOn").fadeOut("slow");
		   $(this).children(".pic1").animate({right:41},400);
	     $(this).children(".pic2").animate({left: -110},400);
	     $(this).children(".txt1").animate({left: 0},400);
	     $(this).children(".txt2").animate({right: -240},400);	
     });

      var number = 0;
      $('.dtqw-min-box .content ul').width(890*$('.dtqw-min-box .content li').length+'px');
			$(".dtqw-min-box .dtqw-header-box .dtqw-cont-box1").mouseover(function(){
				$(this).addClass('on').siblings().removeClass('on');
				var img=$(this).find("#service-img");
				
				img.attr("src",img.attr("src").replace("_2","_1")); 
				var index = $(this).index();
				number = index;
				var distance = -890*index;
				$('.dtqw-min-box .content ul').stop().animate({
					left:distance
				});
			});
			
			$(".dtqw-min-box .dtqw-header-box .dtqw-cont-box1").mouseout(function(){
				var img=$(this).find("#service-img");
				img.attr("src",img.attr("src").replace("_1","_2")); 
			});

      /**
       * 
       */
      $("#sidebar .sidebar-btn").click(function() {
            var e = $("#sidebar");
            return e.width() > 50 ? ($(this).find("em").html("\u5c55\u5f00"), e.width(0)) : ($(this).find("em").html("\u6536\u8d77"), e.width(150)),
            !1
      });
 })
  
  //加载轮播图相关
  $(window).load(function(){
	
	  $(window).resize(function () { 
        $('#home-slider').height($(window).height());
    });

	
	//轮播图高度
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
    	
    $("#owl-about").owlCarousel({
        autoPlay: 5000,
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        paginationNumbers:false,
        pagination:false
    });

		//Set home slider height on resize
	  $(window).resize(function () { 
	        $('#home-slider').height($(window).height());
	        if ($(window).width() >1024) { $('.slider-parallax').css('padding-top', $(window).height() + 'px'); }
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