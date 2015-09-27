var $div = "<div class= 'sketchPad'> </div>";
var size = 16;
var squaresNum = size * size;
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


$(document).ready(function () {

	makeGrid ();
	resetGrid ();
	sketch ();	
});

function makeGrid (){
	
	for (var i = 0; i < squaresNum; i++){
		$("#wrapper").append($div);
	};
	squareSize(size);
}
function resetGrid () {
	$('.reset').click(function () {
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
	$(".sketchPad").width((960 - size -2) / size -2);
	$(".sketchPad").height((960 - size -2) / size -2);
}

//currently something wrong w/ size function- change no of squares + dimensions, but wrong dimensions + numbers
//dialog box not opening either- initialisation error

	



