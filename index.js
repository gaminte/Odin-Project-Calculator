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
      console.log(e.target);
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
      console.log(e.target);
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
        console.log(e.target);
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

window.onload = () => {
  createElement();
}

