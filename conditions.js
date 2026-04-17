let firstNumber = Number(prompt("First number"));
let secondNumber = Number(prompt("Second number"));
let choice = prompt("Operation +, -, *, /, %");

switch (choice) {
    case "+":
        console.log(firstNumber + secondNumber);
        break;
    case "-":
        console.log(firstNumber - secondNumber);
        break;
    case "*":
        console.log(firstNumber * secondNumber);
        break;
    case "/":
        if (secondNumber !== 0) {
            console.log(firstNumber / secondNumber);
        } else {
            console.log("Error");
        }
        break;
    case "%":
        if (secondNumber % 2 === 0) {
            console.log("The number is even");
        } else {
            console.log("The number is odd");
        }
        break;
    default:
        console.log("Error choice");
        break;
}