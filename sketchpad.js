$(document).ready(function () {
	var box = function () {prompt("How many squares would you like per column and row in the grid?"); } //function to display prompt so can be reused for different functions 
	$("#dialog").dialog( { //settings of the custom dialog box
		dialogClass: "no-close",
		autoOpen: false,
		buttons: [ 			
				{
			text: "Reset Grid",
			click: function () {
				$(this).dialog("close");
				box (); 
			}
		}
		]
	});
	var $div = "<div class= 'sketchPad'> </div>";
	var squaresNum = 256;
	for (var i = 0; i < squaresNum; i++){
		$("#wrapper").append($div);
	};
	$('.reset').click(function () {
		box();
		if (isNaN(box)=== true) {
			$("#dialog").dialog("open");
			}
		else {
			$("#wrapper").empty();
			squaresNum = box*box;
			
		};
	});
	$('.sketchPad').mouseenter( function (){
		$(this).addClass('highlighted');
		});
	$('.sketchPad').mousedown(function (){
		$(this).removeClass('highlighted');
	});
	
});
