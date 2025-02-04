/* Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */

const arrayNumbers = [1, 2, 3, 4];
const sumAndMultiplication = (array) => {
    let sum = 0;
    let mul = 1;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        mul *= array[i];
    }
    console.log(`The sum is ${sum}. The product is ${mul}.`);
}

sumAndMultiplication(arrayNumbers);

