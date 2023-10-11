let expression = "";
function myFunction(value) {
    if (value != "="){
        expression += value
        const typerElement = document.getElementById("typer");
        typerElement.textContent = expression
    } else {otherFunction()}
  }

  function otherFunction() {
    
  }