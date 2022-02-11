// event-listeners for button and list elements
document.getElementById('button').addEventListener("click", function(){addTask()});

// array of event listeners
var listener = [];

// counts elements
var listElementsCounter = 0;


/**
 * removes task from list
 * @param {button} e 
 */
function removeTask(e){
    // first give li element new id
    console.log("remove");
    e.removeTask
    // readd list
    // document.getElementById('container').innerHTML += '<ul id="theList"></ul>';
}

/**
 * Adds list element e to class 'done'
 * @returns void
 */
function uncheckTask(e){
    console.log("unchecked task");
    e.target.className = "done";
}

/**
 * Adds a new list element to the to-do list
 * @returns void
 */
function addTask(){
  // get value of text-field
  var input = document.getElementById('text-field').value;
  
  
  
  // warn if nothing is in text-field
  if(input.length == 0){
    alert("Insert a task!");
    return;
  }
  // else add list element
  else{
    // create string for list element
    var listItem = '<li class="undone" ' + 'id="listElements">'+input+'<button id="remove">Remove</button></li>'

    // add new overlfow list item
    document.getElementById('theList').innerHTML += (listItem);

    // clear text field after task was added
    document.getElementById('text-field').value = "";

    // log
    console.log("added task");

    // adds eventListener for remove button

    var l1 = document.getElementById('listElements').addEventListener("click", function(e){removeTask(e)});
    listener.push(l1);
    // adds eventListener for new task


    var l2 = document.getElementById('theList').addEventListener("click", function(e){uncheckTask(e)});
    listener.push(l2);
    listElementsCounter = listElementsCounter + 1;
    
    }
}





