$(document).ready(function(){
	var gridSize;
	var gameTiles;
	var gridArray;
	var rowSize;
	var move = 0;
	var wins = 0;
	var games = 0;
	var cards = [
		"<img src='images/default/monsters-01.png'/>",
		"<img src='images/default/monsters-02.png'/>",
		"<img src='images/default/monsters-03.png'/>",
		"<img src='images/default/monsters-04.png'/>",
		"<img src='images/default/monsters-05.png'/>",
		"<img src='images/default/monsters-06.png'/>",
		"<img src='images/default/monsters-07.png'/>",
		"<img src='images/default/monsters-08.png'/>",
		"<img src='images/default/monsters-09.png'/>",
		"<img src='images/default/monsters-10.png'/>",
		// "<img src='images/default/monsters-11.png'/>",
		// "<img src='images/default/monsters-12.png'/>",
		"<img src='images/default/monsters-13.png'/>",
		"<img src='images/default/monsters-14.png'/>",
		"<img src='images/default/monsters-15.png'/>",
		"<img src='images/default/monsters-16.png'/>"
		];

	

		$("input").click(function(){
			var diff = $(this).val();
			if (diff == "easy") {
				rowSize = 5;
				gridSize = rowSize * 2;
			}else if(diff == "med"){
				rowSize = 5;
				gridSize = rowSize * 4;
			}else if(diff == "hard"){
				rowSize = 5;
				gridSize = rowSize * 8;
			}
			$("#button-bucket").toggle();
			gameTiles = cards.slice(0,(gridSize/2));
			// console.log(gameTiles); test
			gridArray = $.merge(gameTiles,gameTiles);
			// console.dir(gridArray);
			

			//shuffle here


			//place here

			for(i = 0 ; i < gridArray.length; i++){
				var html = "<div class='mg-tile'>";
						html += "<div class= 'mg-tile-inner unmatched flipped'>";
							html += "<div class='mg-tile-outside'></div>";
							html += "<div class='mg-tile-inside'>" + gridArray[i] + "</div>";
						html += "</div>";
					html += "</div>";
					$("#mg-contents").append(html);

			}

			setTimeout(function () {

				$(".mg-tile-inner").removeClass("flipped"); 

			},1000);


		$('.mg-tile-inner')

		$('.mg-tile').click(function(){
			$(this).find('.mg-tile-inner').addClass('flipped');
			if($('.flipped.unmatched').length == 2){
				move++
				var visibleCards = $('.flipped.unmatched img');
				if(visibleCards[0].src == visibleCards[1].src){
					//keep them flipped
					//add class matched
					$('.flipped.unmatched').addClass('matched');
					//remove unmatched
					$('.flipped.unmatched').removeClass('unmatched');
				}else{
					//if cards don't match
					setTimeout(function(){
						$('.flipped.unmatched').removeClass('flipped');	
					},500);
				}
				if($('.flipped.matched').length == gridArray.length){
					alert('you have matched them all');
					wins++
				}
			}else{
				//Only one card is flipped up
			}
			$('#move-counter').html(move);
			$('#wins-counter').html(wins);			
		});

	});














});












