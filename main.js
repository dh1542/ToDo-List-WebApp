// event-listeners for button and list elements
document.getElementById('button').addEventListener("click", function(){addTask()});
document.getElementById('theList').addEventListener("click", function(e){uncheckTask(e)});
document.getElementById('remove').addEventListener("click", function(){removeTask(listElementsCounter)})
// counts elements
var listElementsCounter = 1;


/**
 * removes task from list
 * @param {button} _i 
 */
function removeTask(_i){
    // first give li element new id
    console.log("remove");
    document.getElementById('listElement' + _i).remove();

  
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
    var listItem = '<li class="undone" ' + 'id="listElement' + listElementsCounter  +'">'+input+'<span id="remove">x</span></li>'

    // add new overlfow list item
    document.getElementById('theList').innerHTML += (listItem);

    // clear text field after task was added
    document.getElementById('text-field').value = "";

    // log
    console.log("added task");

    // adds eventListener for remove button

    
    
    listElementsCounter = listElementsCounter + 1;
    
    }
    
}





