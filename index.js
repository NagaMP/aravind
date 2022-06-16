var inputIdFirst = "valueOfX",inputIdSecond = "valueOfY",outputId = "result" ;
    var calculate = function(operationName) {
    var get = function(id) 
    {
      return Number(document.getElementById(id).value);
    }
      x = get(inputIdFirst);
      y = get(inputIdSecond);
      if(operationName == 'add')
        return x + y;
      else if(operationName == 'sub')
        return x - y;
      else if(operationName == 'mul')
        return x * y;
      else if(operationName == 'div')
        return x /y;
    } 
    var showOutput = function(outputValue) {
      document.getElementById(outputId).innerHTML = outputValue;}
    var operation = function(operationName){
      output = calculate(operationName);
      showOutput(output);
      console.log(x + " " + operationName + " " + y + " = " + output)
      console.log(this)
    };
function error1() {
  x = document.getElementById("valueOfX").value;
  let text;
  if (isNaN(x) || typeof(x)=="symbol") {
    text = "Input not valid In First box";
  } else {
    text = "Input OK in first box";
  }
  document.getElementById(outputId).innerHTML = text;
}
function error2() {
  y = document.getElementById("valueOfY").value;
  let text;
  if (isNaN(y) || typeof(y)=="symbol") {
    text = "Input not valid In Second box";
  } else {
    text = "Input OK in seond box";
  }
  document.getElementById(outputId).innerHTML = text;
}

    
    

