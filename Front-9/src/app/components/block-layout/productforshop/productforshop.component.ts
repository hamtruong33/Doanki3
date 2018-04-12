import { Component, OnInit, ElementRef } from '@angular/core';
declare const $;
window['$'] = window['jQuery'] = $;
@Component({
  selector: 'productforshop',
  templateUrl: './productforshop.component.html'
  
})
export class ProductforshopComponent implements OnInit {

  constructor(
    private elementRef : ElementRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){

    //--\Js productforshop
    $('.item-wrap').owlCarousel2({
      pagination: false,
      center: false,
      rtl: false,
      nav: true,
      dots: false,
      loop: true,
      margin: 0,
      navText: [ 'prev', 'next' ],
      slideBy: 4,
      autoplay: false,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      startPosition: 0, 

      responsive:{
        0:{
          items:1
        },
        480:{
          items:2
        },
        768:{
          items:2
        },
        911:{
          items:3
        },
        1200:{
          items:4
        }
      }
    });
  }

}
