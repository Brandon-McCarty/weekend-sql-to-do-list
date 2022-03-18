$(handleReady);

function handleReady() {
    console.log('JQ Loaded');
    // Show tasks on page load
    getToDoList();
    addClickHandlers();

}; // end handleReady

function addClickHandlers () {
    $('#addTaskBtn').on('click', handleSubmit)
}

// GET /toDo
function getToDoList() {
    $.ajax({
        type: 'GET',
        url: '/todo'
    }).then(function (response) {
        console.log(response);
        renderToDoList(response);
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
        let row = $(`
        <tr>
          <td>${task.task}</td>
          <td>${task.status}</td>
          <td><button class="markCompleteBtn">Mark As Complete</button></td>
          <td><button class="deleteBtn">DELETE</button></td>     
        </tr>
      `)

        row.data('task', task);
        // For each task, append a new row to our table
        $('#toDoList').append(row);
    }
}; // End renderToDoList

function handleSubmit () {
    console.log('Submit Clicked');
    
}


// Adds a new task to the database
function addNewTask (newTask) {
    function addBook(bookToAdd) {
        $.ajax({
          type: 'POST',
          url: '/todo',
          data: newTask,
        }).then(function (response) {
          console.log('Response from server.', response);
          refreshBooks();
        }).catch(function (error) {
          console.log('Error in POST', error)
          alert('Unable to add task at this time. Please try again later.');
        });
      }
}