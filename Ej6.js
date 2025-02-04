/* OPTIONAL: Exercise # 6
Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100] */

let NumberArray = [3, 6, 12, 5, 100, 1];

const ordenInverso = (array) => {
    let tempNumber = 0;
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length - i - 1; j++) {
            tempNumber = array[j];
            if (array[j] > array[j + 1]) {
                array[j] = array[j + 1];
                array[j + 1] = tempNumber;
            }
        }
    }
    return array;
}
console.log(ordenInverso(NumberArray));



