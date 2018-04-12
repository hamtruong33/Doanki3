import { Component, OnInit, ElementRef } from '@angular/core';

declare const $;
window['$'] = window['jQuery'] = $;

@Component({
  selector: 'categorylist',
  templateUrl: './categorylist.component.html',
  
})
export class CategorylistComponent implements OnInit {

  constructor(
    private elementRef : ElementRef
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit(){ 
    $('.view-mode .list-view button').bind("click", function() {
			if ($(this).is(".active")) {return false;}
			$.cookie('listingType', $(this).is(".grid") ? 'grid' : 'list', { path: '/' });
			location.reload();
		});

  }

}
