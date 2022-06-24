let number1 = parseInt(prompt("Input the first number"));
let operator = prompt("Enter any Operator between (+ , - , * ,/ )");
let number2 = parseInt(prompt("Input the second number"));

if (operator === "+" ) {
    alert("Result ="+ " " + (number1 + number2));
}
else if (operator === "-" ) { 
    alert("Result ="+ " " + (number1 - number2));
}
else if (operator === "*" ) { 
    alert("Result ="+ " " + (number1 * number2));
}
else if (operator === "/" ) { 
    alert("Result ="+ " " + (number1 / number2));
}
else { 
    alert("Invalid Operation, refresh and enter correct numbers and operator");
}