
console.log("file read");
// get string out of textfield once add is pressed

// add event-listener for button
document.getElementById('button').addEventListener("click", function(){addNewListElement()});



function printText(){
  var input = document.getElementById('text-field').value;
  console.log(input);
}

function addNewListElement(){
  var input = document.getElementById('text-field').value;
  
  // warn if nothing is in text-field
  if(input.length == 0){
    alert("Insert a task!");
    return;
  }
  // else add list element
  else{
    document.getElementById('theList').innerHTML += ('<li>'+input+'</li>');
  }
}


