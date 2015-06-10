/*

TODO:
Confirmation buttons different look
Print button
print css

Check lifetime on local storage
Colours
Nicer grid columns
Code documentation
Rearrange css code

*/



var todos = [];
// console.log('empty todos', todos);


$(document).ready(function() {
	console.log('todo app ready');
	loadTodos();

	// show the Clear All button if there are stored items!
	if (todos.length > 0) {
		$("#clearTodoButton").show();
	}

	$.each(todos, function(index, value) {
		// value[0] = todo title; value[1] = todo description
		$('.todos').prepend("<dl><dd><span>" + value[0] + "</span></dd><dt>" + value[1] + "</dt>" + "</dl>"); 
	});
});


var loadTodos = function() {
	console.log('this loads todos');
	if(localStorage.getItem('todo') != null) {
		todos = JSON.parse(localStorage.getItem('todo'));
		console.log('loaded todos', todos);
	} else {
		console.log('todos null');
		localStorage.setItem('todo', JSON.stringify(todos));
		// todos = JSON.parse(localStorage.getItem('todo'));
	}
}

// TODO change name to addTodo
var setTodo = function() {
	console.log('setTodo');

	var singleTodo = [];
	var newTodo = $('#todo').val();
	var taskDescription = $('#description').val();

	console.log(newTodo, taskDescription);

	if (newTodo === '' || taskDescription === '') {
		// console.log('empty string!');

		$('.default-message').hide();
		$('.error-message').show(); // tell the user what needs to be done!
		return;

	} else {
		// console.log('description actually contains something');
		singleTodo.push(newTodo, taskDescription); // push todo and description into a single array
		todos.push(singleTodo); // push the array into the large array

		localStorage['todo'] = JSON.stringify(todos);

		$('#todo').val(''); // empty input field
		$('#description').val(''); // empty input field

		// TODO add transition to make a smoother page reload
		location.reload();
	}
}


var clearTodo = function() {
	$('.confirm-message').show();
	$('.button').hide();
	$('.button-confirm').show();
}


var confirmClear = function(confirmation) {
	$('.confirm-message').hide();
	if (confirmation === true) {
		localStorage.removeItem('todo');
		location.reload();
	} else {
		$('.button').show();
		$('.button-confirm').hide();
	}
}