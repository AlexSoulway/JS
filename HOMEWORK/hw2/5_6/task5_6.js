function sum(a = 10, b = 5) {
    return (a + b);
}
function subtraction(a = 10, b = 5) {
    return (a - b);
}
function mult(a = 10, b = 5) {
    return (a * b);
}
function division(a = 10, b = 5) {
    return (a / b);
}
const functionExecutionResult = sum();
console.log(functionExecutionResult);

console.log(sum());
console.log(subtraction());
console.log(mult(sum(6, 7), sum(5, 9)));
console.log(division());