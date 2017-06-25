"use strict";
var translations = ["Travel in time", "Drink the whole barrel of wine", "Buy a few fashion Old Greece clothes", "Save the World", "Back to the future"];

for (var i = 0; i < translations.length; i++) {
	createTodoItems(i);
}

$("ul").on("click", "li", function() {
	checkedTodoHandler(this);
})

$("ul").on("click", "span", function(event) {
	removeTodo(this);
	event.stopPropagation();
})

$("input").keypress(function() {
	addTodoByEnterPress();
})

function addTodo(value) {
	translations.push(value);
	$("input").val("");
	$("input").focus();
	createTodoItems(translations.length - 1);
}

function addTodoByEnterPress() {
	var inputValue = $("input").val();
	if(event.which === 13 && inputValue != "") {
		addTodo(inputValue);
	}
}

function checkedTodoHandler(item) {
	$(item).toggleClass("checked");
}

function createTodoItems(item) {
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + translations[item] + "</li>")
}

function removeTodo(item) {
	$(item).parent().fadeOut(500, function() {
		$(item).parent().remove();
	})
}