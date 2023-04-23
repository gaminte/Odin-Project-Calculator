// Creating display elements-
display = document.querySelector(".display");
secDisplay = document.createElement("h4");
mainDisplay = document.createElement("h2");

function createElement() {
  secDisplay.setAttribute("id", "secDisplay");
  mainDisplay.setAttribute("id", "mainDisplay");
  display.append(secDisplay, mainDisplay);
  mainDisplay.innerText = "0";
  secDisplay.innerText = "";
}

// Deleting Elements-
function delElement() {
  secDisplay.remove();
  mainDisplay.remove();
}

// Functions and events for mouse click controls--
// Display functions-
function displayMain(e) {
  if (mainDisplay.innerText == "ERROR") {
    void(0);
  } else {
    if((mainDisplay.innerText.length == 1) && (mainDisplay.innerText == 0)) {
      if (e.target.innerText == "+" ||
          e.target.innerText == "-" ||
          e.target.innerText == "×" ||
          e.target.innerText == "÷") {
        mainDisplay.innerText = "0";
      } else {
        mainDisplay.innerText = "";
      }
    }
    mainDisplay.innerText = `${mainDisplay.innerText+e.target.innerText}`;
  }
}

// Calculating functions-
function calc(e) {
  let prob = mainDisplay.innerText;
  arth = ["+", "-", "×", "÷"]
  let n1;
  let n2;
  let result;
  displayMain(e);
  for (y of arth) {
    if (y == "+" && prob.includes(y)) {
      newArr = prob.split(y)
      n1 = parseFloat(newArr[0]);
      n2 = parseFloat(newArr[1]);
      result = n1 + n2;
      result = result.toString();
      if (e.target.innerText != "=") {
        secDisplay.innerText = mainDisplay.innerText.slice(0, -1);
        mainDisplay.innerText = `${result+e.target.innerText}`;
      } else {
        secDisplay.innerText = mainDisplay.innerText.slice(0, -1);
        mainDisplay.innerText = `${result}`;
      }
    }
    if (y == "-" && prob.includes(y)) {
      newArr = prob.split(y)
      n1 = parseFloat(newArr[0]);
      n2 = parseFloat(newArr[1]);
      result = n1 - n2;
      result = result.toString();
      if (e.target.innerText != "=") {
        secDisplay.innerText = mainDisplay.innerText.slice(0, -1);
        mainDisplay.innerText = `${result+e.target.innerText}`;
      } else {
        secDisplay.innerText = mainDisplay.innerText.slice(0, -1);
        mainDisplay.innerText = `${result}`;
      }
    }
    if (y == "×" && prob.includes(y)) {
      newArr = prob.split(y)
      n1 = parseFloat(newArr[0]);
      n2 = parseFloat(newArr[1]);
      result = n1 * n2;
      result = result.toString();
      if (e.target.innerText != "=") {
        secDisplay.innerText = mainDisplay.innerText.slice(0, -1);
        mainDisplay.innerText = `${result+e.target.innerText}`;
      } else {
        secDisplay.innerText = mainDisplay.innerText.slice(0, -1);
        mainDisplay.innerText = `${result}`;
      }
    }
    if (y == "÷" && prob.includes(y)) {
      newArr = prob.split(y)
      n1 = parseFloat(newArr[0]);
      n2 = parseFloat(newArr[1]);
      if (n2 == 0) {
        mainDisplay.innerText = "ERROR";
      } else {
        result = n1 / n2;
        result = result.toString();
        if (e.target.innerText != "=") {
          secDisplay.innerText = mainDisplay.innerText.slice(0, -1);
          mainDisplay.innerText = `${result+e.target.innerText}`;
        } else {
          secDisplay.innerText = mainDisplay.innerText.slice(0, -1);
          mainDisplay.innerText = `${result}`;
        }
      } 
    }
  }
}

function corr(e) {
  if ((e.target.innerText == "+" ||
       e.target.innerText == "-" ||
       e.target.innerText == "×" ||
       e.target.innerText == "÷") && 
       (mainDisplay.innerText.at(-1) == "+" ||
        mainDisplay.innerText.at(-1) == "-" ||
        mainDisplay.innerText.at(-1) == "×" ||
        mainDisplay.innerText.at(-1) == "÷")) {
          let arrStr = mainDisplay.innerText.split("");
          arrStr[arrStr.length - 1] = e.target.innerText;
          mainDisplay.innerText = arrStr.join("");
        } else {
          calc(e);
        }
}

// Dot Function-
function dot(e) {
  if (mainDisplay.innerText.includes(".")) {
    void(0);
  } else {
    displayMain(e);
  }
}

// Equal Function-
function equalTo(e) {
  if (mainDisplay.innerText.includes("=")) {
    mainDisplay.innerText = "ERROR";
  } else {
    calc(e);
  }
}

// button functions-
button1 = document.getElementById("1");
button1.onclick = (e) => {
  displayMain(e);
}

button2 = document.getElementById("2");
button2.onclick = (e) => {
  displayMain(e);
}

button3 = document.getElementById("3");
button3.onclick = (e) => {
  displayMain(e);
}

button4 = document.getElementById("4");
button4.onclick = (e) => {
  displayMain(e);
}

button5 = document.getElementById("5");
button5.onclick = (e) => {
  displayMain(e);
}

button6 = document.getElementById("6");
button6.onclick = (e) => {
  displayMain(e);
}

button7 = document.getElementById("7");
button7.onclick = (e) => {
  displayMain(e);
}

button8 = document.getElementById("8");
button8.onclick = (e) => {
  displayMain(e);
}

button9 = document.getElementById("9");
button9.onclick = (e) => {
  displayMain(e);
}

button0 = document.getElementById("0");
button0.onclick = (e) => {
  displayMain(e);
}

buttonDot = document.getElementById("dot");
buttonDot.onclick = (e) => {
  dot(e);
}

buttonAdd = document.getElementById("add");
buttonAdd.onclick = (e) => {
  corr(e);
}

buttonSub = document.getElementById("sub");
buttonSub.onclick = (e) => {
  corr(e);
}

buttonMul = document.getElementById("mul");
buttonMul.onclick = (e) => {
  corr(e);
}

buttonDivi = document.getElementById("divi");
buttonDivi.onclick = (e) => {
  corr(e);
}

buttonClear = document.getElementById("clear");
buttonClear.onclick = (e) => {
  delElement();
  createElement();
}

buttonDel = document.getElementById("delete");
buttonDel.onclick = (e) => {
  if (mainDisplay.innerText == "ERROR") {
    delElement();
    createElement();
  } else {
    if (mainDisplay.innerText.length <= 1) {
      mainDisplay.innerText = 0;
    } else {
      mainDisplay.innerText = mainDisplay.innerText.slice(0, -1);
    }
  }
}

buttonEqual = document.getElementById("equal");
buttonEqual.onclick = (e) => {
  equalTo(e);
}
// End of Functions and events for mouse click controls--


// Functions and events for keyboard controls--
// Display Keyboard function-
function keyboardDisplayMain(e) {
  let numArr = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "=", "."]
  if (mainDisplay.innerText == "ERROR") {
    void(0);
  } else if (numArr.indexOf(e.key) != -1) {
      if((mainDisplay.innerText.length == 1) && (mainDisplay.innerText == 0)) {
        if (e.key == "+" ||
            e.key == "-" ||
            e.key == "*" ||
            e.key == "/") {
          mainDisplay.innerText = "0";
        } else {
          mainDisplay.innerText = "";
        }
      }
      if (e.key == "*") {
        mainDisplay.innerText = `${mainDisplay.innerText+"×"}`;
      } else if(e.key == "/") {
        mainDisplay.innerText = `${mainDisplay.innerText+"÷"}`;
      } else {
        mainDisplay.innerText = `${mainDisplay.innerText+e.key}`;
      }
  }
}

//Keyboard Calculating functions-
function keyboardCalc(e) {
  let prob = mainDisplay.innerText;
  arth = ["+", "-", "×", "÷"]
  let n1;
  let n2;
  let result;
  keyboardDisplayMain(e);
  for (y of arth) {
    if (y == "+" && prob.includes(y)) {
      newArr = prob.split(y)
      n1 = parseFloat(newArr[0]);
      n2 = parseFloat(newArr[1]);
      result = n1 + n2;
      result = result.toString();
      if (e.key == "=" || e.key == "Enter") {
        secDisplay.innerText = mainDisplay.innerText;
        mainDisplay.innerText = `${result}`;
      } else {
        secDisplay.innerText = mainDisplay.innerText.slice(0, -1);
        mainDisplay.innerText = `${result+e.key}`;
      }
    }
    if (y == "-" && prob.includes(y)) {
      newArr = prob.split(y)
      n1 = parseFloat(newArr[0]);
      n2 = parseFloat(newArr[1]);
      result = n1 - n2;
      result = result.toString();
      if (e.key == "=" || e.key == "Enter") {
        secDisplay.innerText = mainDisplay.innerText;
        mainDisplay.innerText = `${result}`;
      } else {
        secDisplay.innerText = mainDisplay.innerText.slice(0, -1);
        mainDisplay.innerText = `${result+e.key}`;
      }
    }
    if (y == "×" && prob.includes(y)) {
      newArr = prob.split(y)
      n1 = parseFloat(newArr[0]);
      n2 = parseFloat(newArr[1]);
      result = n1 * n2;
      result = result.toString();
      if (e.key == "=" || e.key == "Enter") {
        secDisplay.innerText = mainDisplay.innerText;
        mainDisplay.innerText = `${result}`;
      } else {
        secDisplay.innerText = mainDisplay.innerText.slice(0, -1);
        mainDisplay.innerText = `${result+y}`;
      }
    }
    if (y == "÷" && prob.includes(y)) {
      newArr = prob.split(y)
      n1 = parseFloat(newArr[0]);
      n2 = parseFloat(newArr[1]);
      if (n2 == 0) {
        mainDisplay.innerText = "ERROR";
      } else {
        result = n1 / n2;
        result = result.toString();
        if (e.key == "=" || e.key == "Enter") {
          secDisplay.innerText = mainDisplay.innerText;
          mainDisplay.innerText = `${result}`;
        } else {
          secDisplay.innerText = mainDisplay.innerText.slice(0, -1);
          mainDisplay.innerText = `${result+y}`;
        }
      } 
    }
  }
}

function keyboardCorr(e) {
  if ((e.key == "+" ||
       e.key == "-" ||
       e.key == "*" ||
       e.key == "/") && 
       (mainDisplay.innerText.at(-1) == "+" ||
        mainDisplay.innerText.at(-1) == "-" ||
        mainDisplay.innerText.at(-1) == "×" ||
        mainDisplay.innerText.at(-1) == "÷")) {
          let arrStr = mainDisplay.innerText.split("");
          if (e.key == "*") {
            arrStr[arrStr.length - 1] = "×";
            mainDisplay.innerText = arrStr.join("");
          } else if(e.key == "/") {
            arrStr[arrStr.length - 1] = "÷";
            mainDisplay.innerText = arrStr.join("");
          } else {
            arrStr[arrStr.length - 1] = e.key;
            mainDisplay.innerText = arrStr.join("");
          }
        } else {
          keyboardCalc(e);
        }
}

// Keyboard Dot Function-
function keyboardDot(e) {
  if (mainDisplay.innerText.includes(".")) {
    void(0);
  } else {
    keyboardDisplayMain(e);
  }
}

// keyboard Equal Function-
function keyboardEqualTo(e) {
  if (mainDisplay.innerText.includes("=")) {
    mainDisplay.innerText = "ERROR";
  } else {
    keyboardCalc(e);
  }
}

// Keyboard Functionality-
document.onkeydown = (e) => {
  if (e.key == "Backspace") {
    if (mainDisplay.innerText == "ERROR") {
      delElement();
      createElement();
    } else {
      if (mainDisplay.innerText.length <= 1) {
        mainDisplay.innerText = 0;
      } else {
        mainDisplay.innerText = mainDisplay.innerText.slice(0, -1);
      }
    }
  } else if (e.key == "Delete") {
      delElement();
      createElement();
  } else if (e.key == "+" ||
             e.key == "-" ||
             e.key == "*" ||
             e.key == "/") {
              keyboardCorr(e);
  } else if (e.key == ".") {
      keyboardDot(e);
  } else if (e.key == "=" || e.key == "Enter") {
      keyboardEqualTo(e);
  } else {
      console.log(e.key);
      keyboardDisplayMain(e);
  }
}
// End of Functions and events for keyboard controls--

window.onload = () => {
  createElement();
}

