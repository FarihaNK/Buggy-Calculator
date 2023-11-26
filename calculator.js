var expression = "";
function myFunction(value) {
    expression += value;
    const typerElement = document.getElementById("typer");
    typerElement.textContent = expression;
    if (value == "="){otherFunction();}
  }

  var question = [];
  var startindex = 0;
  function otherFunction() {
    for (let i = 0; i < expression.length; i++){
        const temp = "+-x/=";
        if (temp.includes(expression[i])) {
            helperFunction(expression[i], i);
        }
        else if (expression[i] == "=") {
            question.pop();
        }
    }
    console.log(question);
  }

  function helperFunction(string, int) {
    question.push(Number(expression.substring(startindex, int)));
    question.push(string);
    startindex = int+1;
  }

  function anotherFunction(){}