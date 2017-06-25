"use strict";
var value;
//
// Cross out clicked Todo's
$("ul").on("click", "li", function() {
	$(this).toggleClass("checked");
})

// Remove Todo's
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	event.stopPropagation();
})

// Adding Todo's by "keypress"
$("input").keypress(function() {
	value = $(this).val();

	if(event.which === 13 && value != "") {
		addTodo(value);
	}
})

function addTodo(value) {
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + value + "</li>");
	$("input").val("");
	$("input").focus();
}