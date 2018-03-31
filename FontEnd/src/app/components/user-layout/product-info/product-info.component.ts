import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  //selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //
    $(document).ready(function () {
      var $nav = $("#thumb-slider");
      $nav.each(function () {
        $(this).owlCarousel2({
          nav: true,
          dots: false,
          slideBy: 1,
          margin: 10,
          responsive: {
            0: {
              items: 2
            },
            600: {
              items: 3
            },
            1000: {
              items: 3
            }
          }
        });
      })
    });

   
    $(document).ready(function () {
      //code zoom img
      var zoomCollection = '.large-image img';
      if($('.large-image img').length ==0){
      $(zoomCollection).elevateZoom({
        zoomType: "inner",
        lensSize: "200",
        easing: true,

        gallery: 'thumb-slider',
        cursor: 'pointer',
        galleryActiveClass: "active"
      });}
      //end zoom
      $('.large-image img').magnificPopup({
        items: [
          { src: 'http://opencart.opencartworks.com/themes/so_maxshop/layout3/image/cache/catalog/product/33-1000x1000.jpg' }, 
          { src: 'http://opencart.opencartworks.com/themes/so_maxshop/layout3/image/cache/catalog/product/e27-1000x1000.jpg' },
           { src: 'http://opencart.opencartworks.com/themes/so_maxshop/layout3/image/cache/catalog/product/33-1000x1000.jpg' }, 
           { src: 'http://opencart.opencartworks.com/themes/so_maxshop/layout3/image/cache/catalog/product/W8-1000x1000.jpg' }, 
           { src: 'http://opencart.opencartworks.com/themes/so_maxshop/layout3/image/cache/catalog/product/e2-1000x1000.JPG' },],
        gallery: { enabled: true, preload: [0, 2] },
        type: 'image',
        mainClass: 'mfp-fade',
        callbacks: {
          open: function () {
            var activeIndex = parseInt($('#thumb-slider .img.active').attr('data-index'));
            var magnificPopup = $.magnificPopup.instance;
            magnificPopup.goTo(activeIndex);
          }
        }
      });
    
     
    });

    //
    jQuery(document).ready(function ($) {
      $('.releate-products-slider').owlCarousel2({
        pagination: false,
        center: false,
        nav: true,
        dots: false,
        loop: true,
        margin: 25,
        navText: ['prev', 'next'],
        slideBy: 1,
        autoplay: false,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        startPosition: 0,
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 1
          },
          768: {
            items: 1
          },
          1200: {
            items: 1
          }
        }
      });
    });
  }

} 
