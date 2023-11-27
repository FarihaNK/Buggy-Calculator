
var expression = "";
function myFunction(value) {
    expression += value;
    const typerElement = document.getElementById("typer");
    typerElement.textContent = expression;
    if (value == "="){
        expression = expression.substring(0, expression.length - 1);
        let answer = eval(expression);
        typerElement.textContent = answer;
    }
  }