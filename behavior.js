
/*I would like to seperate each element into its own bucket*/
/*This first part focuses on the functions of the buttons and such*/



/*Deletes the task when the delete button is clicked*/

/*Problem: No matter which task you delete, only the first one is deleted
I think it has to do with the fact that they all have the same id so it causes
JavaScript to always delete the first one*/

/*Solution: from w3schools: get every element with the same class
go through them
whenever one of them is clicked the function is ran
where the parent of the button element (x3) which is basically the card div
is then removed*/

function deleteTask(){
	var deleteButton = document.getElementsByClassName("btn btn-danger");
	for(var i = 0; i < deleteButton.length; i++){
		deleteButton[i].onclick = function(){
			var elementToDelete = ((this.parentElement).parentElement).parentElement;	
			elementToDelete.remove();
		}

	}
}

/*-----------*/
/*This part is primarily for creating*/


/*Creates new Task by creating a new card and appending it to
the bigger "todo-lists" div*/

function addTask(){

	//getting current div containing all the lists
	const currentTasks = document.getElementById("collection-of-todo-lists");

	const newTask = createNewCardDiv();

	currentTasks.appendChild(newTask);

}


/*Creates the new div for the card with the attributes:
	- class = "card d-grid mx-auto col-6 bg-light"
	- id = "todolist-with-card"

creates new card body and 
appends to the div
and returns it*/

function createNewCardDiv(){
	const newDiv = document.createElement("div");
	newDiv.setAttribute("class", "card d-grid mx-auto col-6");
	newDiv.setAttribute("id", "todolist-with-card");

	const cardBody = createNewCardDivBody();

	newDiv.appendChild(cardBody);

	return newDiv;
}


/*creates the div for the body of the card 
sets attributes:
- class = "card-body"

creates newInputDiv and description area
appends both of them to the div
and returns it*/
function createNewCardDivBody(){
	
	const newBodyDiv = document.createElement("div");
	newBodyDiv.setAttribute("class", "card-body");

	const input = createNewInputDiv();
	const options = createButtonGroupDiv()
	const deleteButton = createDeleteButtonDiv();

	newBodyDiv.appendChild(input);
	newBodyDiv.appendChild(options);
	newBodyDiv.appendChild(deleteButton);

	return newBodyDiv;
	
}

/*creating a div for the checbox and title box
sets attributes:
 - class = "input-group mb-3"
creates newCheckBoxDiv and Title and 
appends both to the div
and returns it*/
function createNewInputDiv(){
	const inputDiv = document.createElement("div");
	inputDiv.setAttribute("class", "input-group mb-3");

	const checkBox = createNewCheckboxDiv();
	const title = createTitle();
	const priorityButton = createPriorityBtn();

	inputDiv.appendChild(checkBox);
	inputDiv.appendChild(title);
	inputDiv.appendChild(priorityButton);

	return inputDiv;
}

/*creating the div that will hold the checkbox with attributes set:
 - class = "input-group-text"

	creates checkbox and appends it to the div
	and returns it
 */
function createNewCheckboxDiv(){
	const checkBoxDiv = document.createElement("div");
	checkBoxDiv.setAttribute("class", "input-group-text");

	//creates check box
	const checkBox = createCheckBox();

	//appends checkbox to div
	checkBoxDiv.appendChild(checkBox);

	return checkBoxDiv;

}

/*create checkbox. attributes set:
	- class = "form-check-input mt-0"
	- type = "checkbox"
and returns it
*/
function createCheckBox(){
	const newBox = document.createElement("input");
	newBox.setAttribute("class", "form-check-input mt-0");
	newBox.setAttribute("type", "checkbox");

	return newBox;
}

/*creating the text with the title next to the checkbox. Attribute set:
 - class = "form-control"
 - type = "text"
 - placeholder = "Name of Task"
and return it*/

function createTitle(){
	const newTitle = document.createElement("input");
	newTitle.setAttribute("class", "form-control");
	newTitle.setAttribute("type", "text");
	newTitle.setAttribute("placeholder", "Name of Task");

	return newTitle;
}

/*Creating a button responsible for prioratizing the task
Attributes set: 
- class = "btn btn-outline-secondary"
- type = "button"
- id = "priorityButton"
- title = "Prioratize this task?"
*/

function createPriorityBtn(){
	const newPriorityButton = document.createElement("button");
	newPriorityButton.setAttribute("class", "btn btn-outline");
	newPriorityButton.setAttribute("type", "button");
	newPriorityButton.setAttribute("id", "priorityButton");
	newPriorityButton.setAttribute("title", "Prioratize this task?");
	newPriorityButton.innerHTML = "Prioratize?";

	return newPriorityButton;
}

/*creating the seperate div for task description
Attribute set:
 - class = "input-group"
 - id = "todo-list-description"
the textarea is appened to the div
and returns it*/
function createDescriptionDiv(){
	const descrptionDiv = document.createElement("div");
	descrptionDiv.setAttribute("class", "input-group");
	descrptionDiv.setAttribute("id", "todo-list-description");

	//creates the text area
	const textArea = createDescriptionTextArea();

	//appends the two and returns it
	return descrptionDiv.appendChild(textArea);
}

/*creating the actual text area for description
Attribute set:
 - class = "form-control"
 - placeholder = "Description of Task"
and returns it*/
function createDescriptionTextArea(){
	const descrptionAreaText = document.createElement("textarea");
	descrptionAreaText.setAttribute("class", "form-control");
	descrptionAreaText.setAttribute("placeholder", "Description of Task");
	
	return descrptionAreaText;
}

/*Creating the div that will hold all the buttons
Attributes set:
- id = "button-divs"
- class = "btn-group"
- role = "group"

and appends the buttons to the div
*/

function createButtonGroupDiv(){
	const newGroupBtnDiv = document.createElement("div");
	newGroupBtnDiv.setAttribute("class", "btn-group");
	newGroupBtnDiv.setAttribute("role", "group");
	newGroupBtnDiv.setAttribute("id", "button-divs");

	newGroupBtnDiv.appendChild(createAddSubBtn());

	newGroupBtnDiv.appendChild(createAddDateBtn());

	newGroupBtnDiv.appendChild(createAddDescriptionBtn());

	return newGroupBtnDiv;


}

/*creating all of the buttons that will be put into the div
Add subtask:
Attributes set:
- type = "button"
- class = "btn btn-primary"
- id = "add-subtask-btn"

Add Due Date:
Attributes set:
- type = "button"
- class = "btn btn-dark"
= id = "addDueDate"

Add Task Description
Attributes set:
- type = "button"
- class = "btn"
- id = "add-description"

*/

function createAddSubBtn(){
	const subtaskBtn = document.createElement("button");
	subtaskBtn.setAttribute("type", "button");
	subtaskBtn.setAttribute("class", "btn btn-primary");
	subtaskBtn.setAttribute("id", "add-subtask-btn");
	subtaskBtn.innerHTML = "Add Subtask";

	return subtaskBtn;
}

function createAddDateBtn(){
	const dueDateBtn = document.createElement("button");
	dueDateBtn.setAttribute("type", "button");
	dueDateBtn.setAttribute("class", "btn btn-dark");
	dueDateBtn.setAttribute("id", "addDueDate");
	dueDateBtn.innerHTML = "Add Due Date";

	return dueDateBtn;

}

function createAddDescriptionBtn(){
	const descriptionBtn = document.createElement("button");
	descriptionBtn.setAttribute("type", "button");
	descriptionBtn.setAttribute("class", "btn");
	descriptionBtn.setAttribute("id", "add-description");
	descriptionBtn.innerHTML = "Add Task Description";

	return descriptionBtn;

}


/*Creating the div that will hold the delete button and appending the actual button to it
Atttributes set:
- id = "exit-button"
*/

function createDeleteButtonDiv(){

	const newDeleteButtonDiv = document.createElement("div");

	newDeleteButtonDiv.setAttribute("id", "exit-button");

	const deleteButton = createDeleteButton();

	newDeleteButtonDiv.appendChild(deleteButton);

	return newDeleteButtonDiv;

}


/*Creating the delete button and returning it
Attribute set:
- onclick = "deleteTask()" 
- type = "button" 
- class = "btn btn-danger"*/

function createDeleteButton(){

	const newDeleteButton = document.createElement("button");

	newDeleteButton.setAttribute("type", "button");

	newDeleteButton.setAttribute("class", "btn btn-danger");

	newDeleteButton.setAttribute("onclick", "deleteTask()");

	newDeleteButton.innerHTML = "Delete";

	return newDeleteButton;

}

