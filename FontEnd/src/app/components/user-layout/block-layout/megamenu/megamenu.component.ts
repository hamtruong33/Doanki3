import { Component, OnInit } from '@angular/core';

declare const $;

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.css']
})
export class MegamenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

  }

}
