// var taskadd = document.getElementsByClassName('taskadder')[0];


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

    //add task and description to the added tasks section
    taskSection = document.getElementById('addedTasks');

    taskSection.innerHTML += '<div id = "addedtask">' + '<span>' + 'Task: ' + task + '</span>'+
    '<span>' + ' Description: ' + description + '</span>' + '<button onclick="markCompleted()"> Completed </button>' +'<br>' + '</div>'; 

    // task = '';
    // description = '';

    console.log(task,description);


}

function markCompleted() {

    markTask = document.getElementById('addedtask');

    console.log(markTask);

    markTask.style.color="blue";
}




