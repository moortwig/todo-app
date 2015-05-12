

var tasks = [];
// console.log('empty tasks', tasks);

$(document).ready(function() {
	console.log('todo app ready');
	loadTasks(tasks);
	$.each(tasks, function(index, value) {
		console.log(value[1]); // consolar ut description
		$('.tasks').append("<dl><dd>Task:</dd>" + "<dt>" + value[0] + "</dt>" + "<dd>Description:</dd>" + "<dt>" + value[1] + "</dt></dl>"); 
		$('tasks').append("<input type='checkbox' value='index' /> <hr />");
		
	});
});



var loadTasks = function() {
	if(localStorage.getItem('todo') != null) {
		tasks = JSON.parse(localStorage.getItem('todo'));
		console.log('loaded tasks', tasks);
	} else {
		console.log('tasks null', tasks);
		localStorage.setItem('todo', JSON.stringify(tasks));
		tasks = JSON.parse(localStorage.getItem('todo'));
	}
}


var setTask = function() {
	var singleTask = [];
	var newTask = $('#task').val();
	var taskDescription = $('#description').val();

	singleTask.push(newTask, taskDescription);
	console.log('pushed', singleTask); 		// pushed ["Testar", "litet bara"]
	tasks.push(singleTask);

	// localStorage.setItem("todo", JSON.stringify(tasks)); // overwrites!!!
	localStorage['todo'] = JSON.stringify(tasks);
	// localStorage.setItem('todo', tasks);


	$('#todo-task').val(''); // empty input field
}


var getTasks = function() {
	// var fetched = localStorage.getItem('todo');
	// console.log(fetched);
	var todoList = '';
	var todoList = JSON.parse(localStorage.getItem('todo'));
	console.log('todoList', todoList);


}
