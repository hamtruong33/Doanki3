
	jQuery(document).ready(function ($) {
		;(function (element) {
			var id = $("#so_category_slider_130");
			var $element = $(element),
					$extraslider = $(".slider", $element),
					_delay = 300,
			_duration = 600,
			_effect = 'none',
					total_item = 8;

			$extraslider.on("initialized.owl.carousel2", function () {
				var $item_active = $(".owl2-item.active", $element);
				if ($item_active.length > 1 && _effect != "none") {
					_getAnimate($item_active);
				}
				else {
					var $item = $(".owl2-item", $element);
					$item.css({"opacity": 1, "filter": "alpha(opacity = 100)"});
				}
				var $navpage = $(".page-top .page-title-categoryslider span", id);
				$(".owl2-controls", id).insertAfter($navpage);
				$(".owl2-dot", id).css("display", "none");

			});

			$extraslider.owlCarousel2({
				margin: 5,
			slideBy: 4,
			autoplay: 0,
			autoplayHoverPause: 1,
			autoplayTimeout: 0,
			autoplaySpeed: 1000,
			startPosition: 0,
			mouseDrag: 1,
			touchDrag: 1,
			autoWidth: false,
			dots: false,
					responsive: {
				0:{	items: 1,
					nav: total_item <= 1 ? false : ((true) ? true: false),
				},
				480:{ items: 2,
					nav: total_item <= 2 ? false : ((true) ? true: false),
				},
				768:{ items: 2,
					nav: total_item <= 2 ? false : ((true) ? true: false),
				},
				992:{ items: 3,
					nav: total_item <= 3 ? false : ((true) ? true: false),
				},
				1200:{ items: 4,
					nav: total_item <= 4 ? false : ((true) ? true: false),
				}
			},

			nav: true,
			loop: true,
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

	})("#so_category_slider_130, #so_category_slider_131, #so_category_slider_132");
	});
