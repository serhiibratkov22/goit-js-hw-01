function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid; // Обчислюємо загальну вартість
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`; // Формуємо рядок з повідомленням
}

// Перевірка роботи функції
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

/**
 * Перетворення типів: числа
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */
//!======================================================
// console.log(Number('5')); // 5
// console.log(Number('5+5')); // NaN
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number('Jacob')); // NaN
// console.log(Number('25px')); // NaN

// const x = '25px';
// const y = +x;
// const y = Number(x);

// console.log(y);

//!======================================================

// const userAge = undefined;
// const x = Number(userAge); // 25
// console.log(x);

// console.log('5' * 2); // 10
// console.log('10' - 5); // 5
// console.log(5 + true); // 6
// console.log(5 - true); // 4

// const x = true;
// const y = true;

// console.log(x + y);
