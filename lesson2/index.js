let goodsCount = 10;

// if (goodsCount > 0) {
//     console.log('Количество товаров: ', goodsCount);
// } else {
//     console.log('Корзина пуста.');
// }
// if (goodsCount > 0) console.log('Количество товаров: ', goodsCount);
// else console.log('Корзина пуста.');

// goodsCount > 0
//     ? console.log('Количество товаров: ', goodsCount) // true
//     : console.log('Корзина пуста.'); // false

// let goodsInfoText = (goodsCount > 0
//     ? `Количество товаров: ${goodsCount}`
//     : 'Корзина пуста.');
//
// console.log(goodsInfoText);

// const good = 'Яблоки';

// if (good === 'Бананы') {
//     console.log('Стоимость бананов 50р.');
// } else {
//     if (good === 'Манго') {
//         console.log('Стоимость манго 80р.');
//     } else {
//         if (good === 'Яблоки' || good === 'Груши') {
//             console.log('Стоимость яблок и груш 40р.');
//         } else {
//             console.log('Неизвестный фрукт');
//         }
//     }
// }
// if (good === 'Бананы') {
//     console.log('Стоимость бананов 50р.');
// } else if (good === 'Манго') {
//     console.log('Стоимость манго 80р.');
// } else if (good === 'Яблоки' || good === 'Груши') {
//     console.log('Стоимость яблок и груш 40р.');
// } else {
//     console.log('Неизвестный фрукт');
// }

// const good = 'Яблоки';

// switch (good) {
//     case 'Бананы':
//         console.log('Стоимость бананов 50р.');
//         break;
//
//     case 'Манго':
//         console.log('Стоимость манго 80р.');
//         break;
//
//     case 'Яблоки':
//     case 'Груши':
//         console.log('Стоимость яблок и груш 40р.');
//         break;
//     default:
//         console.log('Неизвестный фрукт');
// }
// const good = 'Яблоки';

// function sayPrice(good) {
//     // console.log(good);
//     switch (good) {
//         case 'Бананы':
//             console.log('Стоимость бананов 50р.');
//             break;
//
//         case 'Манго':
//             console.log('Стоимость манго 80р.');
//             break;
//
//         case 'Яблоки':
//         case 'Груши':
//             console.log('Стоимость яблок и груш 40р.');
//             break;
//         default:
//             console.log('Неизвестный фрукт');
//     }
// }
// function sayPrice(goodName) {
//     console.log(goodName);
//     switch (good) {
//         case 'Бананы':
//             console.log('Стоимость бананов 50р.');
//             break;
//
//         case 'Манго':
//             console.log('Стоимость манго 80р.');
//             break;
//
//         case 'Яблоки':
//         case 'Груши':
//             console.log('Стоимость яблок и груш 40р.');
//             break;
//         default:
//             console.log('Неизвестный фрукт');
//     }
// }

// sayPrice();
// sayPrice('Груши');
// sayPrice(good); // sayPrice('Яблоки');

// function getGoodPrice(good) {
//     switch (good) {
//         case 'Бананы': return 50;
//         case 'Манго': return 80;
//         case 'Яблоки':
//         case 'Груши': return 40;
//         default: return null;
//     }
// }

// const price = getGoodPrice('Груши');
// console.log(price);
// console.log(getGoodPrice('Груши'));

// if (price != null) console.log(price)
// else console.log('Товара нет');

// function getGoodPrice(good) {
//     switch (good) {
//         case 'Бананы': return 50;
//         case 'Манго': return 80;
//         case 'Яблоки':
//         case 'Груши': return 40;
//         default: return null;
//     }
// }
//
// function getGoodPriceByCount(good, count = 1) {
//     const goodPrice = getGoodPrice(good);
//
//     if (goodPrice == null) return null;
//
//     return goodPrice * count;
// }
//
// console.log(getGoodPriceByCount('Яблоки'));
// foo();
//
// function foo() {
//     console.log('foo');
// }
//
// foo();
// const good = 'Яблоки';
// var foo;

// foo();

// const foo = function () {
//     console.log('foo');
//     // console.log(good);
// }
// var foo = function () {
//     console.log('foo');
//     // console.log(good);
// }
// foo = function () {
//     console.log('foo');
//     // console.log(good);
// }
//
// foo();

// function foo(a, b) {
//     console.log(a, b);
//     console.log(arguments);
// }
//
// foo(1,6,7,9,4,3);

// function recursion(x) {
//     if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое положительное число';
//     if (x === 1) return '1';
//
//     return recursion(x - 1) + ' ' + x;
// }
//
// console.log(recursion(10));

let number;
let attempts;

function reset() {
    attempts = 0;
    number = Math.floor(Math.random() * 100);
    console.log(number);
}

function tryGuessNumber() {
    const userAnswer = parseInt(prompt('Введите число от 0 до 100, для выхода наберите -1'));

    if (userAnswer === -1) return alert('Game Over');

    if (isNaN(userAnswer)) {
        alert('Необходимо ввести целое число от 0 до 100.');
        tryGuessNumber();
        return;
    }

    attempts++;

    if (userAnswer > number) {
        alert('Введите число меньше');
    } else if (userAnswer < number) {
        alert('Введите число больше');
    } else {
        alert(`Поздравляем! Вы угадали число с ${attempts} попытки.`);

        if (!confirm('Хотите сыграть еще?')) {
            return alert('Game Over');
        }

        reset();
    }

    tryGuessNumber();
}

reset();
tryGuessNumber();
