function getElementWidth(content, padding, border) {
  // Функція для перетворення значення з формату Npx у число
  const parseValue = value => parseFloat(value);

  // Обчислюємо загальну ширину елемента
  const totalWidth =
    parseValue(content) + parseValue(padding) * 2 + parseValue(border) * 2;

  return totalWidth; // Повертаємо загальну ширину
}

// Перевірка роботи функції
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200

/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

//!======================================================
// const x = parseFloat('2.5.6rem');

// console.log(x);

// let elementWidth = '50px';
// console.log('elementWidth: ', parseInt(elementWidth));

// let elementHeight = '200.74px';
// console.log('elementHeight: ', parseFloat(elementHeight));

//!======================================================

// Math.round(5.49); // 6
// Math.ceil(5.1); // 6
// Math.floor(5.8); //5

// Math.random(); // 0 - 1;

// const rand = Math.round(Math.random() * 1000) + 500;
// console.log(rand);

//!======================================================
/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

// const value = 27.9;

// console.log(Math.ceil(value));
// console.log(Math.floor(value));
// console.log(Math.round(value));
