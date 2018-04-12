import { Component, OnInit, ElementRef } from '@angular/core';

declare const $;
window['$'] = window['jQuery'] = $;

@Component({
  
  templateUrl: './homeuser.component.html',
  
})
export class HomeUserComponent implements OnInit {
email : string='';
  constructor(
    private elementRef : ElementRef
  ){}

  ngOnInit() {
	  this.email=localStorage.getItem('auth_token');
  }

  ngAfterViewInit(){
    
        // --\JS for slide  
		var owl = $(".sohomeslider-inner");
		var total_item = 3;
		function customCenter() {
			$(".owl2-item.active .item .sohomeslider-description .image ").addClass("img-active");
			$(".owl2-item.active .item .sohomeslider-description .text .tilte ").addClass("title-active");
			$(".owl2-item.active .item .sohomeslider-description .text h4 ").addClass("h4-active");
			$(".owl2-item.active .item .sohomeslider-description .text .des").addClass("des-active");
		}
		function customPager() {
			$(".owl2-item.active .item .sohomeslider-description .image ").addClass("img-active");
			$(".owl2-item.active .item .sohomeslider-description .text .tilte ").addClass("title-active");
			$(".owl2-item.active .item .sohomeslider-description .text h4 ").addClass("h4-active");
			$(".owl2-item.active .item .sohomeslider-description .text .des").addClass("des-active");
		}
		$(".sohomeslider-inner").owlCarousel2({
				rtl: false,
				animateOut: 'slideOutLeft',
				animateIn: 'slideInLeft',
				autoplay: true,
				autoplayTimeout: 4000,
				autoplaySpeed:  800,
				smartSpeed: 500,
				autoplayHoverPause: true,
				startPosition: 0,
				mouseDrag:  true,
				touchDrag: true,
				dots: true,
				autoWidth: false,
				dotClass: "owl2-dot",
				dotsClass: "owl2-dots",
				loop: true,
				navText: ["Next", "Prev"],
				navClass: ["owl2-prev", "owl2-next"],
				responsive: {
				0:{	items: 1,
					nav: total_item <= 1 ? false : ((true) ? true: false),
				},
				480:{ items: 1,
					nav: total_item <= 1 ? false : ((true) ? true: false),
				},
				768:{ items: 1,
					nav: total_item <= 1 ? false : ((true) ? true: false),
				},
				992:{ items: 1,
					nav: total_item <= 1 ? false : ((true) ? true: false),
				},
				1200:{ items: 1,
					nav: total_item <= 1 ? false : ((true) ? true: false),
				}
			},
			onInitialized : customPager,
			onTranslated  : customCenter,
		});
        
		// --\JS for tab best_by
		

		// --\JS for new product
		

		// --\JS for table category to selling
		
		
		
		// --\JS Blog
		(function (element) {
			var $element = $(element),
				$extraslider = $(".blog-external", $element),
				_delay = 500,
			_duration = 800,
			_effect = 'none';
	  
			var this_item = $extraslider.find('div.media');
			this_item.find('div.item:eq(0)').addClass('head-button');
			this_item.find('div.item:eq(0) .media-heading').addClass('head-item');
			this_item.find('div.item:eq(0) .media-left').addClass('so-block');
			this_item.find('div.item:eq(0) .media-content').addClass('so-block');

			$extraslider.on("initialized.owl.carousel2", function () {
			  var $item_active = $(".owl2-item.active", $element);
			  if ($item_active.length > 1 && _effect != "none") {
				_getAnimate($item_active);
			  }
			  else {
				var $item = $(".owl2-item", $element);
				$item.css({"opacity": 1, "filter": "alpha(opacity = 100)"});
			  }
			  
						  $(".owl2-nav", $element).insertBefore($extraslider);
				$(".owl2-controls", $element).insertAfter($extraslider);
			  
			});
	  
			$extraslider.owlCarousel2({
					margin: 30,
					slideBy: 1,
					autoplay: false,
					autoplayHoverPause: false,
					autoplayTimeout: 0,
					autoplaySpeed: 1000,
					loop: true,
					startPosition: 0,
					mouseDrag: true,
					touchDrag: true,
					autoWidth: false,
					responsive: {
						0: 	{ items: 1 } ,
						480: { items: 2 },
						768: { items: 2 },
						992: { items: 3 },
						1200: {items: 3}
					},
					rtl: false,
					dotClass: "owl2-dot",
					dotsClass: "owl2-dots",
					dots: false,
					dotsSpeed:500,
					nav: false,
					navSpeed: 500,
					navText: ["&#139;", "&#155;"],
					navClass: ["owl2-prev", "owl2-next"]
		
			});
	  
			$extraslider.on("translate.owl.carousel2", function (e) {
				
				var $item_active = $(".owl2-item.active", $element);
				_UngetAnimate($item_active);
				_getAnimate($item_active);
			});
		
			$extraslider.on("translated.owl.carousel2", function (e) {
		
				
				var $item_active = $(".owl2-item.active", $element);
				var $item = $(".owl2-item", $element);
		
				_UngetAnimate($item);
		
				if ($item_active.length > 1 && _effect != "none") {
				_getAnimate($item_active);
				} else {
		
				$item.css({"opacity": 1, "filter": "alpha(opacity = 100)"});
		
				}
			});
		
			function _getAnimate($el) {
				if (_effect == "none") return;
				//if ($.browser.msie && parseInt($.browser.version, 10) <= 9) return;
				$extraslider.removeClass("extra-animate");
				$el.each(function (i) {
				var $_el = $(this);
				$(this).css({
					"-webkit-animation": _effect + " " + _duration + "ms ease both",
					"-moz-animation": _effect + " " + _duration + "ms ease both",
					"-o-animation": _effect + " " + _duration + "ms ease both",
					"animation": _effect + " " + _duration + "ms ease both",
					"-webkit-animation-delay": +i * _delay + "ms",
					"-moz-animation-delay": +i * _delay + "ms",
					"-o-animation-delay": +i * _delay + "ms",
					"animation-delay": +i * _delay + "ms",
					"opacity": 1
				}).animate({
					opacity: 1
				});
		
				if (i == $el.size() - 1) {
					$extraslider.addClass("extra-animate");
				}
				});
			}
		
			function _UngetAnimate($el) {
				$el.each(function (i) {
				$(this).css({
					"animation": "",
					"-webkit-animation": "",
					"-moz-animation": "",
					"-o-animation": "",
					"opacity": 1
				});
				});
			}
	  
		})("#so_latest_blog")

		// --\JS manufacturer
		$('#ytcs5ac580bd9bc216494888991522892989').each(function () {
			var slider = $(this),
				panels = slider.children('div'),
				data = slider.data();
			
				// Remove unwanted br's
				slider.children(':not(.yt-content-slide)').remove();
				// Apply Owl Carousel
				slider.owlCarousel2({
				mouseDrag: true,
				video:true,
				lazyLoad: (data.lazyload == 'yes') ? true : false,
				autoplay: (data.autoplay == 'yes') ? true : false,
				autoHeight: (data.autoheight == 'yes') ? true : false,
				autoplayTimeout: data.delay * 1000,
				smartSpeed: data.speed * 1000,
				autoplayHoverPause: (data.hoverpause == 'yes') ? true : false,
				center: (data.center == 'yes') ? true : false,
				loop: (data.loop == 'yes') ? true : false,
				dots: (data.pagination == 'yes') ? true : false,
				nav: (data.arrows == 'yes') ? true : false,
				margin: data.margin,	
				navText: ['',''],
				responsive:{
					0:{items:data.item_xs},
					768:{items:data.item_sm},
					992:{items: data.item_lg}
				},
			});
			
		});
          
		
  }

}
