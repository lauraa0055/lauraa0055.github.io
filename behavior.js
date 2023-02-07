
/*I would like to seperate each element into its own bucket*/

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
	newDiv.setAttribute("class", "card d-grid mx-auto col-6 bg-light");
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
	const description = createDescriptionDiv();

	newBodyDiv.appendChild(input);
	newBodyDiv.appendChild(description);

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

	inputDiv.appendChild(checkBox);
	inputDiv.appendChild(title);

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


