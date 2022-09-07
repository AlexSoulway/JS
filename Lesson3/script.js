// let i = 0;
//
// while (i < 3) {
//     console.log(i);
//     i++;
// }

// let i = 7;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// for (let i = 0, j = 10; i < 3 && j > 3; i++, j--) {
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// while (true) {
//
// }

// do {
//
// } while (true);

// for (;;) {
//
// }

// someMark: for (let a = 0; a < 4; a++) {
//     console.log('upper cycle');
//
//     for (let b = 0; b < 5; b++) {
//         console.log('inner cycle');
//         if (b === 1) break someMark;
//         // if (b % 2 === 0) continue;
//
//         console.log('some code', b);
//     }
// }

// let arr = [1, 5, 8];
// let arr = new Array(6, 4, 7);
// let arr = new Array(6);
// console.log(arr.length);
// arr.length = 10;
// arr[9] = 10;
// console.log(arr.length, arr);

// let arr = [
//     [1, 5, 'hi', false],          // 0
//     [55, true, 1, 100],           // 1
//     [true, 'string', NaN, 32],    // 2
// ];
// console.log(arr[1][2]);
// console.log(JSON.stringify(arr, null, 4));

// let arr = [true, 'string', NaN, 32];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const index in arr) {
//     console.log(arr[index]);
// }

// for (const value of arr) {
//     console.log(value);
// }

// arr.forEach(function (value, index, array) {
//     console.log('value:', value);
//     // console.log('index:', index);
//     // console.log('array:', array);
// });

// find(), some(), indexOf(), map(), filter(), includes(), reduce()

// let arr = [true, 'string', NaN, 32];
// arr[4] = 444;
// arr[arr.length] = 444;

// console.log(arr.push('end'), arr);
// console.log(arr.unshift('begin'), arr);
// delete arr[5];
// console.log(arr);
// console.log(arr.pop(), arr);
// console.log(arr.shift(), arr);
// console.log(arr.splice(1, 1), arr);
// console.log(arr.splice(1, 1, 'qwerty'), arr);
// console.log(arr.splice(1, 0, 'qwerty'), arr);

// let arr = [true, 'string', NaN, 32];
// // let copy = arr;
// // let copy = Array.from(arr);
// let copy = JSON.parse(JSON.stringify(arr));
//
// copy.pop();
//
// console.log(arr === copy);
// console.log(copy, arr);
