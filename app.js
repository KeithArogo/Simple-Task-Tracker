function addtask() {
    
    var taskDescriptionField = document.getElementById('taskinfo');
    
    taskDescriptionField.innerHTML += '<form>'+
    '<label for="task"> Task: </label><br>'+
    '<input type="text" id="task" name="task"><br>'+
    '<label for="description">Task Description:</label><br>'+
    '<input type="description" id="description" name="description"> </form>';    
    
    // var task = task.value;
    // var description = description.value;
    //--------------------------------------------    
    var doneButton = document.getElementById('doneButton');

    doneButton.innerHTML += '<button onclick="addToTasks()"> Done </button>';

    }
    // 1. click done and save into an array. 2. Read array position and go ahead and mark as completed/delete
    // How would I read array position? What would I have to work with? an array with each index containing..
    //.. the task and the description, so how would I identify which index needs to be marked completed on clicking?
    // the index of the task-description pair would mimic the indexing of the child elements of the container

function addToTasks() {

    //get value of the task and the description...
    var task = document.getElementById('task').value;
    var description = document.getElementById('description').value;

    var li = document.createElement("li");
    var inputValue = " Task: " + task  + "\nDescription: " + description;//
    // console.log(f);
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Please type in a task!");
    } else {
      document.getElementById("mytasks").appendChild(li);
    }
    
    document.getElementById("task").value = "";
    document.getElementById("description").value = "";

    //add task and description to the added tasks section
    
    
    //console.log(task,description);
    // var x = document.getElementById("taskinfo").firstChild;
    // console.log(x);
    // x.remove();

    // var y = document.getElementById("doneButton").firstChild;
    // console.log(y);
    // y.remove();

}



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');//get the first ul element within the document (ul contains the whole list)...
list.addEventListener('click', function(evnt) {
  if (evnt.target.tagName === 'LI') {//....
    
    console.log(evnt.target.classList);
    evnt.target.classList.toggle('checked');//The classList property returns the class name(s) of an element.
  }

}, false);




function markCompleted() {

    markTask = document.getElementById('addedtask');

    console.log(markTask);

    markTask.style.color="blue";
}


// Create a new list item when clicking on the "Add" button
// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
  
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
//   }

