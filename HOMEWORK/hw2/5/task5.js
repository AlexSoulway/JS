// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

function sum(a = 10, b = 5) {
    return (a + b);
}


function subtraction(a = 15, b = 5) {
    return (a - b);
}


function mult(a = 10, b = 5) {
    return (a * b);
}


function division(a = 15, b = 5) {
    return (a / b);
}




console.log(sum());
console.log(subtraction());
console.log(mult(sum(5, 1), sum(5, 1)));
console.log(division());