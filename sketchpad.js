var $div = "<div class= 'sketchPad'> </div>";
var size = 16; 
$(document).ready(function () {
	$("#dialog").dialog( { //settings of the custom dialog box
		dialogClass: "no-close",
		autoOpen: false,
		buttons: [ 			
				{
			text: "Close",
			click: function () {
				$(this).dialog("close");
			}
		}
		]
	});
	randomColour();
	makeGrid();
	resetGrid();
	$("#opacity").click(changeOpacity());
});


function changeOpacity () {
	$("#opacity").click(function(){
		$(".sketchPad").removeClass("highlighted").css({"opacity" : 0});
		$(".sketchPad").hover(function() {
			$(this).css("opacity", "+=0.1");
		});
	});
};
function randomColour(){
	$("#rndColor").click(function(){
		var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
		$(".sketchPad").mouseenter(function(){
			$(this).css("background-color", randomColor);
			$(this).click(sketch());
		});
		
	});	
};
function makeGrid (){
	for (var i = 0; i < size*size; i++){
		$("#wrapper").append($div);
	};
	squareSize(size);
	sketch();
}
function resetGrid () {
	$('#reset').click(function () {
		size = prompt("How many squares would you like per column and row?");
		if ($.isNumeric(size)){
				$("#wrapper").empty();
				makeGrid(size);
				}
		else {
			$("#dialog").dialog("open");
			};
	});
}

function sketch() {
	$('.sketchPad').mouseenter( function (){
		$(this).addClass('highlighted');
		});
	$('.sketchPad').mousedown(function (){
		$(this).removeClass('highlighted');
	});
};

function squareSize(size) {
	$(".sketchPad").css({'height':960/size-2 + "px", 'width':960/size-2+ "px", 'margin' : 0}); 
}




	



