


/*When the button "Add Task is Clicked" a new child list will be made
  for the to-do list.

  currentList = current list in html file

  newTask = new list element created
  attributes:

  	- class = list-group-item

  	- id = emptyTask

  are set to the list element using .setAttribute() function

  newTaskCheckBox + newTaskTextBox = new input element created
  attributes:

  	Checkbox:
  		- class = form-check-input

  		- type = checkbox

	Textbox:
		- class = form-check-input-text

		- type = text

		- placeholder = Click Here to Start

  are set to the input elements using .setAttribute() function

  newTask is appended with newTaskCheckBox and newTaskTextBox
  using the .appendChild() function in order to create the layout
  of the todo-list 
  	- checkbox to the left so it's appended first
  	- followed by the textbox

  Once the actual list is finally done, it is then appended to
  the currentList that is shown in the index.html file.

*/
function addTask(){

	const currentList = document.getElementById("taskList");

	const newTask = document.createElement("li");
	newTask.setAttribute("class", "list-group-item");
	newTask.setAttribute("id", "emptyTask");

	const newTaskCheckBox = document.createElement("input");
	newTaskCheckBox.setAttribute("class", "form-check-input");
	newTaskCheckBox.setAttribute("type", "checkbox");

	newTask.appendChild(newTaskCheckBox);

	const newTaskTextBox = document.createElement("input");
	newTaskTextBox.setAttribute("class", "form-check-input-text");
	newTaskTextBox.setAttribute("type", "text");
	newTaskTextBox.setAttribute("placeholder", "Click Here to Start");

	newTask.appendChild(newTaskTextBox);

	currentList.appendChild(newTask);
}