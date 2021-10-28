let resultBox = document.querySelector("#resultBox");
let firstNumber = document.querySelector("#firstInput");
let secondNumber = document.querySelector("#secondInput");

let addButton = document.querySelector("#addButton");
let subtractButton = document.querySelector("#subtractButton");
let divideButton = document.querySelector("#divideButton");
let multiplyButton = document.querySelector("#multiplyButton");

addButton.addEventListener("click", () => {
    let input1 = parseInt(firstNumber.value);
    let input2 = parseInt(secondNumber.value);

    let sum = input1+input2;
    resultBox.innerHTML = sum;
})

subtractButton.addEventListener("click", () => {
    let input1 = parseInt(firstNumber.value);
    let input2 = parseInt(secondNumber.value);

    let difference = input1-input2;
    if (difference < 0) {
        alert("The result is less than 0, please check your inputs and reverse if needed.");
    } else {
        resultBox.innerHTML = difference;
    }
})

divideButton.addEventListener("click", () => {
    let input1 = parseInt(firstNumber.value);
    let input2 = parseInt(secondNumber.value);

    let kvot = input1/input2;
    resultBox.innerHTML = kvot;
})

multiplyButton.addEventListener("click", () => {
    let input1 = parseInt(firstNumber.value);
    let input2 = parseInt(secondNumber.value);

    let product = input1*input2;
    resultBox.innerHTML = product;
})