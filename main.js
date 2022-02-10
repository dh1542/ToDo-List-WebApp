
console.log("file read");
// get string out of textfield once add is pressed

// event-listeners for button and list elements
document.getElementById('button').addEventListener("click", function(){addTask()});
// removes e
document.getElementById('theList').addEventListener("click", function(e){uncheckTask(e)});

/**
 * Adds list element e to class 'done'
 * @returns void
 */
function uncheckTask(e){
  e.target.className = "done";
}



/**
 * Adds an new list element to the to-do list
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
    // add new overlfow list item
    document.getElementById('theList').innerHTML += ('<li class="undone">'+input+'</li>');

    // clear text field after task was added
    document.getElementById('text-field').value = "";
  }
}





