import { Component, OnInit, ElementRef } from '@angular/core';
declare const $;
window['$'] = window['jQuery'] = $;

@Component({
  selector: 'productinfo',
  templateUrl: './productinfo.component.html',
  
})
export class ProductinfoComponent implements OnInit {

  constructor(
    private elementRef : ElementRef
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit(){
    		
		//Call JQuery lightSlider Settings
		var thumbslider = $(".thumb-vertical-outer .thumb-vertical").lightSlider({
			item: 4,
			autoWidth: false,
			vertical:true,
			slideMargin: 0,
			verticalHeight:420,
            pager: false,
			controls: false,
            prevHtml: '<i class="fa fa-angle-up"></i>',
            nextHtml: '<i class="fa fa-angle-down"></i>',
			responsive: [
				{
					breakpoint: 1199,
					settings: {
						verticalHeight: 312,
						item: 3,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						verticalHeight: 500,
						item: 4,
					}
				},
				{
					breakpoint: 768,
					settings: {
						verticalHeight: 360,
						item: 3,
					}
				},
				{
					breakpoint: 479,
					settings: {
						verticalHeight: 120,
						item: 1,
					}
				}
			]
        });
		
		//Call JQuery lightSlider - Go to previous slide
		if(6 >= 4){
			$('#thumb-slider-prev').click(function(){
				thumbslider.goToPrevSlide();
			});
			$('#thumb-slider-next').click(function(){
				thumbslider.goToNextSlide();
			});
		}else{
			$('#thumb-slider .slider-btn').hide();
		}
		
			//Call JQuery lightSlider Active
		$("#thumb-slider .owl2-item").each(function() {
			$(this).find("[data-index='0']").addClass('active');
		});
		 

    	//Call JQuery Zoom
    var zoomCollection = '.large-image img';
		$( zoomCollection ).elevateZoom({
			zoomType        : "inner",
			lensSize    :"200",
			easing:true,
			gallery:'thumb-slider',
			cursor: 'pointer',
			galleryActiveClass: "active"
		});
          
    $('.large-image img').magnificPopup({
			items: [
        {src: 'assets/image/cache/catalog/product/e13-1000x1000.jpg'},
        {src: 'assets/image/cache/catalog/product/15-1000x1000.png'},
        {src: 'assets/image/cache/catalog/product/44-1000x1000.jpg'},
        {src: 'assets/image/cache/catalog/product/e13-1000x1000.jpg'},
        {src: 'assets/image/cache/catalog/product/8-1000x1000.png'},
        {src: 'assets/image/cache/catalog/product/23-1000x1000.png'},										],
			gallery: { enabled: true, preload: [0,2] },
			type: 'image',
			mainClass: 'mfp-fade',
			callbacks: {
        open: function() {
          var activeIndex = parseInt($('#thumb-slider .img.active').attr('data-index'));
          var magnificPopup = $.magnificPopup.instance;
          magnificPopup.goTo(activeIndex);
        }
      }
    });
  }

}
