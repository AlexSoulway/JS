// // 2. С этого урока начинаем работать с функционалом интернет-магазина.
// // Предположим, есть сущность корзины. Нужно реализовать функционал 
// подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
// // Товары в корзине хранятся в массиве. Задачи:
// // a) Организовать такой массив для хранения товаров в корзине;
// // b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
// Создаю массив для хранения товаров. Это будет необходимая по ТЗ корзина.
let basket = [];

//  переменная - баскет прайс, по умолчанию = 0
let basketPrice = 0;

// Товар
let product;

// Стоимость товара
let price;


basket.push({ product: 'коврик для йоги', price: 800 });
basket.push({ product: 'ролик для пресса', price: 650 });
basket.push({ product: 'ролик массажный', price: 2000 });


// Проверяем содержимое корзины
console.log(basket);


// посчет стоимости корзины
function countBasketPrice(bPrice) {
    for (i = 0; i < basket.length; i++) {
        basketPrice = basketPrice + basket[i].price;
    }
    return basketPrice;
}

// console.log(countBasketPrice(basket));
countBasketPrice(basketPrice);