function Project(name){
	this.name=name;
	this.todos=[];
	
}

Project.prototype.addTodo = function(todoObject){
	// console.log(todoObject);
	if (todoObject) {
	this.todos.push(todoObject);
	// document.getElementById("addTodo").value = "";
}
};

// Project.prototype.deleteTodo = function(todoObject){
// 	console.log(todoObject);
// 	removeItem(this.todos,todoObject);
// 	this.listTodos();
// };	

Project.prototype.listTodos = function(){
	// document.getElementById("listTodos").innerHTML = "";
	for (var i = 0; i < projectsAll[i].todos.length; i++) {
		document.getElementById(this.name).innerHTML += "<li>" + '<span>'+this.todos[i]+'</span>'+"</li>";
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

	// var li = document.createElement("li");  //creating li element to add
	// li.innerHTML = '<a href="#" onclick="">' + this.name + '</a>';    //inserting text into newly created <li> element
	//li.addEventListener('click', remove, false);
	// var links = document.getElementsByTagName("li");
	// links.addEventListener("click", function() {this.parentNode.removeChild(this)});

	var li= "<li ondblclick='remove()' onclick='GlobalProject.listTodos(); ChangeProject(this.name);'>" + '<a href="#">'+ this.name+'</a>'+"<ol id="+ this.name + "></ol></li>";
	document.getElementById("listProjects").innerHTML += li ;

		
};
	
	 
var remove = function(){
    this.parentNode.removeChild(this);
};
   
// ------------- Todo Object   --------------- // 


var ToDo =function(){	
  Project.apply(this);
};

ToDo.prototype = new Project();

var GetData = function(GetSelector) {
	 var task = document.getElementById(GetSelector).value;
	 document.getElementById(GetSelector).value = "";
	 return task; 
	};

function ChangeProject(projectname) {
	console.log(projectname);
	console.log(GlobalProject.name);
	console.log(projectsAll[0].name);
	for (var i = projectsAll.length - 1; i >= 0; i--) {
		if (projectsAll[i].name == projectname){
			GlobalProject = projectsAll[i];
		}
	}
	GlobalProject.listTodos();
	document.getElementById("title").innerHTML = GlobalProject.name;
}




// ------------- Run time  --------------- // 

var GlobalProject;
var projectsAll = [];

document.getElementById('ProjectButton').onclick  = function() {
	var project= new Project();
	project.name = project.getName('addProject');
	GlobalProject=project;
	project.name ? projectsAll.push(project) : "" ;
	project.show();
	ChangeProject(project.name);
	
};

document.getElementById('todoButton').onclick  = function() {
	var todo = new ToDo();
	todo.name = GetData('addTodo');
	GlobalProject.addTodo(todo.name);
	GlobalProject.listTodos();
};


// // ------------- Templates  --------------- // 

// var buttonHTML = "<button class='btn btn-danger deleteTodo' onclick='project1.deleteTodo(this.parentNode.childNodes[1].textContent);'>Delete</button>";

