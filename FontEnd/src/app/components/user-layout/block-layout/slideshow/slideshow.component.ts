import { Component, OnInit } from '@angular/core';
declare const $;
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //Jquery for slideshow
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
    //end jQuery for slideshow




  }

}
