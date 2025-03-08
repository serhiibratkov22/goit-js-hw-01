function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee; // Обчислюємо загальну вартість
  return `Shipping to ${country} will cost ${totalPrice} credits`; // Формуємо рядок з повідомленням
}

// Перевірка роботи функції
console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"

/**
 * Оператори
 *
 * - Оператори порівняння
 * - Оператори рівності
 * - Приведение типов операндов
 */

//!======================================================

// const userPassword = 'Helloworldawdawdawd';
// const minLen = 6;

// const validLen = userPassword.length < 12;

// console.log(validLen);

//!======================================================
// const userBalance = prompt('Enter your balance');
// const productPrice = prompt('Enter product price');
// const productAmount = prompt('Enter product amount');

// console.log(userBalance >= productPrice * productAmount);
// console.log(userBalance <= productPrice * productAmount);
// console.log(userBalance > productPrice * productAmount);
// console.log(userBalance < productPrice * productAmount);

// const balance = -200;

// const positiveBalance = balance >= 0;

// console.log(positiveBalance);

// console.log(-10 > 'Hello');
// console.log(-10 > 'Hello');

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('a' > 'b');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log(true > false);

//!======================================================

// console.log(0 === Number(null));

// console.log('6' == 6);

// console.log('false' == false);

// console.log(1 == true);

// console.log(1 === true);

// console.log(false == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);
//!======================================================

// const x = 10 + (25 > 15);

// console.log(x);
