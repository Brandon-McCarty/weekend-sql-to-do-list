$(handleReady);

function handleReady() {
    console.log('JQ Loaded');
    // Show tasks on page load
    getToDoList();
    addClickHandlers();
}; // end handleReady

function addClickHandlers() {
    $('#addTaskBtn').on('click', handleSubmit);
    $('#toDoList').on('click', '.markCompleteBtn', changeCompleteStatus);
    $('#toDoList').on('click', '.deleteBtn', deleteTask);
}; // end addClickHandlers

// GET /toDo
function getToDoList() {
    $.ajax({
        type: 'GET',
        url: '/todo'
    }).then(function (response) {
        console.log(response);
        renderToDoList(response);
        $('input').val('')
    }).catch(function (error) {
        console.log('error in GET', error);
    });
}; // end getToDoList

// Render all tasks on the DOM
function renderToDoList(toDoList) {
    // empty before appending to avoid repetition  
    $('#toDoList').empty();
    // loop through the object sent by database
    for (let i = 0; i < toDoList.length; i += 1) {
        let task = toDoList[i];
        let row;
        if (task.status === false) {
            row = $(`
        <tr>
          <td>${task.task}</td>
          <td>Incomplete</td>
          <td><button class="markCompleteBtn btn btn-success">Mark As Complete</button></td>
          <td><buttontype="button" class="btn btn-danger deleteBtn">DELETE</buttontype=></td>     
        </tr>
      `)
            row.data('task', task);
        } else {
            row = $(`
        <tr class="table-success">
          <td class="complete">${task.task}</td>
          <td>Complete</td>
          <td><button class="markCompleteBtn btn btn-danger">Mark As Incomplete</button></td>
          <td><button type="button" class="btn btn-danger deleteBtn" >DELETE</button></td>     
        </tr>
      `)
            row.data('task', task);
        }

        // row.data('task', task);
        // For each task, append a new row to our table
        $('#toDoList').append(row);
    }
}; // End renderToDoList

function handleSubmit() {
    console.log('Submit Clicked');
    let newTask = {};
    // Set newTask.task as the user input
    newTask.task = $('#taskInput').val()
    // newTask.status = false;
    console.log(newTask);
    addNewTask(newTask);
} // end handleSubmit


// POSTS a new task to the database
function addNewTask(newTask) {
    $.ajax({
        type: 'POST',
        url: '/todo',
        data: newTask,
    }).then(function (response) {
        console.log('Response from server.', response);
        // Refresh DOM after adding new task
        getToDoList();
    }).catch(function (error) {
        console.log('Error in POST', error)
        alert('Unable to add task at this time. Please try again later.');
    });
}; // end addNewTask

// Toggle the status of a task completion
function changeCompleteStatus() {
    let task = $(this).closest('tr').data('task');
    console.log('Changing completed status...', task.id);

    $.ajax({
        url: `/todo/${task.id}`,
        method: 'PUT',
        // changing the complete status
    }).then(function (response) {
        console.log('Updated');
        getToDoList();
    }).catch(function (err) {
        console.log(err);
    })
}; // end changeCompleteStatus

function deleteTask() {
    let task = $(this).closest('tr').data('task');
    console.log('CLICKED DELETE', task.id);
    console.log(task);

    let id = task.id;
    // console.log(id);

    $.ajax({
        url: `/todo/${id}`,
        method: 'DELETE'
    }).then(function (response) {
        console.log('Deleted');
        getToDoList();
    }).catch(function (err) {
        console.log(err);
    })

} // end deleteTask

console.log('test');
