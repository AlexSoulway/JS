//  Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. A 
//   Затем написать скрипт, который работает по следующему принципу:                            
//  	если a и b положительные, вывести их разность;                                          B 
//  	если а и b отрицательные, вывести их произведение;                                      C 
//  	если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.    D 
// 

// A Объявляем переменные и задаем им значения
let a = 2, b = 3;
// let a = -2, b = -3;
// let a = 2, b = -3;
// let a = -2, b = 3;

// B Если а и b положительные, выводим разность
if (a >= 0 && b >= 0)
    console.log(a - b);

// C Если  а и b отрицательные, выводим их произведение
else if (a < 0 && b < 0)
    console.log(a * b);

// D Если оба условия выше не выполняются, значит а и b разных знаков, складываю их значения
else
    console.log(a + b);
