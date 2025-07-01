const FirstNumber = document.querySelector("#firstNumber");
const SecondNumber = document.querySelector("#secondNumber");
const Add = document.querySelector("#add");
const Subtract = document.querySelector("#substract");
const Multiply = document.querySelector("#multiply");
const Divide = document.querySelector("#divide");
const log = document.querySelector("#log");

let num1;
let num2;

FirstNumber.addEventListener("click", () => {
    num1 = Number(prompt("Your first number here:"));
});

SecondNumber.addEventListener("click", () => {
    num2 = Number(prompt("Your second number here:"));
});

Add.addEventListener("click", () => {
    if (isValid()) {
        const result = num1 + num2;
        log.textContent = `Sum: ${result}`;
        alert(`The sum is ${result}`);
    }
});

Subtract.addEventListener("click", () => {
    if (isValid()) {
        const result = num1 - num2;
        log.textContent = `Subtraction: ${result}`;
        alert(`The difference is ${result}`);
    }
});

Multiply.addEventListener("click", () => {
    if (isValid()) {
        const result = num1 * num2;
        log.textContent = `Product: ${result}`;
        alert(`The product is ${result}`);
    }
});

Divide.addEventListener("click", () => {
    if (isValid()) {
        if (num2 === 0) {
            alert("Division by zero is not allowed.");
            log.textContent = "Division by zero!";
        } else {
            const result = num1 / num2;
            log.textContent = `Division: ${result}`;
            alert(`The result is ${result}`);
        }
    }
});

function isValid() {
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter both numbers first.");
        return false;
    }
    return true;
}

