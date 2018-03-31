/*
    This is javascript loading event
    1. slideshow
    2. click more category
*/

$(document).ready(function(){
//for event slideshow
    var owl = $(".sohomeslider-inner-1");
    var total_item = 3;    
    $(".sohomeslider-inner-1").owlCarousel2({
            animateOut: 'slideOutDown',
            animateIn: 'slideInDown',
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed:  1000,
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
    //end slideshow

//event more category
	var itemver =  7 ;
	if(itemver <= $( ".vertical ul.megamenu >li" ).length){
		$('.vertical ul.megamenu').append('<li class="loadmore"><i class="fa fa-plus-square-o"></i><span class="more-view"> More Categories</span></li>');
	}
	$('.horizontal ul.megamenu li.loadmore').remove();
	var show_itemver = itemver-1 ;
			
	$('ul.megamenu > li.item-vertical').each(function(i){
		if(i>show_itemver){
		$(this).css('display', 'none');
		}
	});

	$(".vertical .megamenu .loadmore").click(function(){
		if($(this).hasClass('open')){
			$('ul.megamenu li.item-vertical').each(function(i){
					if(i>show_itemver){
							$(this).slideUp(200);
							$(this).css('display', 'none');
					}
			});
			$(this).removeClass('open');
			$('.vertical .megamenu .loadmore').html('<i class="fa fa-plus-square-o"></i><span class="more-view">More Categories</span>');
		}else{
			$('.vertical ul.megamenu li.item-vertical').each(function(i){
					if(i>show_itemver){
							$(this).slideDown(200);
					}
			});
			$(this).addClass('open');
			$('.vertical .megamenu .loadmore').html('<i class="fa fa-minus-square-o"></i><span class="more-view">Close Categories</span>');
		}
	});
//end more category
});//end document.ready


//For slideshow
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
    //end for slideshow
