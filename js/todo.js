var template = $('#hidden-template').html();

var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

$(document).ready(function(){
	for(var i = 0; i < tasks.length; i++){
		addTask(tasks[i]);
	}

	$('form').on('submit', function(event){
		event.preventDefault();

		var taskText = $('#taskName').val();
		if(taskText){
			addTask(taskText);
			tasks.push(taskText);
			saveTasks(tasks);
			localStorage.setItem('tasks', JSON.stringify(tasks));
			$('#taskName').val('');
		}
	});

	//this is an alternative to binding to the individual
	//list items. More here: http://learn.jquery.com/events/event-delegation/
	$('#tasks').on('click', '.task', function(event){
		var $context = $(event.target);
		var $task = $context.closest('li');
		
		if($context.hasClass('prioritize')){
			$task.insertBefore($task.prev());
		}else if($context.hasClass('deprioritize')){
			$task.insertAfter($task.next());
		}else{
			$task.addClass('hide');
		}
	});

	$('#tasks').on('transitionend', '.task', function(){
		var $this  = $(this);
		var taskText = $this.find('.task-body').text();
		var index = tasks.indexOf(taskText);
		tasks.splice(index, 1);
		saveTasks(tasks);
		$this.remove();
	});
});



function addTask(taskText){
	//grab a fresh copy of the template
	var template = $('#hidden-template').html();
	var $template = $(template);
	$template.find('.task-body').text(taskText);
	// bindTaskActions($template);
	$('#tasks').append($template);
}

function saveTasks(tasks){
	localStorage.setItem('tasks', JSON.stringify(tasks));
}