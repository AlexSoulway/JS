// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
//  необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function generNumber(num) {
    if (num < 0 || num > 999)
        return console.log('Введенные данные несоответсвуют требуемым параметрам');
    else
        one = num % 10;
    ten = (num - num % 10) / 10 % 10;
    hun = (num - num % 100) / 100 % 10;
    number = {
        'единицы': one,
        'десятки': ten,
        'сотни': hun,
    };
    return console.log(number);
};

generNumber(prompt('Введите число от 0 до 999'));