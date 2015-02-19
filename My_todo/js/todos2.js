function Project(name){
	this.name=name;
	this.todos=[];
	
}

Project.prototype.addTodo = function(todoObject){
	console.log(todoObject);
	if (todoObject) {
	this.todos.push(todoObject);
	document.getElementById("addTodo").value = "";
}
};

Project.prototype.deleteTodo = function(todoObject){
	console.log(todoObject);
	removeItem(this.todos,todoObject);
	this.listTodos();
};	

Project.prototype.listTodos = function(){
	document.getElementById("listTodos").innerHTML = "";
	for (var i = 0; i < this.todos.length; i++) {
		document.getElementById("listTodos").innerHTML += "<li>" + buttonHTML + '<span>'+this.todos[i]+'</span>'+"</li>";
	}	
	return this.todos;
};

Project.prototype.getName = function(getSelector){
	var task = document.getElementById(getSelector).value;
	 document.getElementById(getSelector).value = "";
	 if (task){
	 	this.name = task;
	 }
	 return task; 
	};


Project.prototype.show = function(){
	document.getElementById("listProjects").innerHTML += "<li>" + buttonHTML + '<a href="#" onclick="">'+ this.name+'</a>'+"</li>";
		
};



// ------------- Run time  --------------- // 

var GlobalProject;
var projectsAll = [];

document.getElementById('ProjectButton').onclick  = function() {
	var project= new Project();
	project.name = project.getName('addProject');
	project.show();
	
};

document.getElementById('todoButton').onclick  = function() {
	var todo = new ToDo();
	todo.name = GetData('addTodo');
	GlobalProject.addTodo(todo.name);
	GlobalProject.listTodos();
};


// ------------- Templates  --------------- // 

var buttonHTML = "<button class='btn btn-danger deleteTodo' onclick='project1.deleteTodo(this.parentNode.childNodes[1].textContent);'>Delete</button>";

