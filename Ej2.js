/* Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10] */

const array = [1,2,4,5];

const duplicarValor = (arrayNumeros) => {
    for (let i = 0; i < arrayNumeros.length; i++) {
        arrayNumeros[i] = arrayNumeros[i]*2;
    }
    console.log(arrayNumeros);
}

duplicarValor(array);
 
const duplicarConMap = (arrayNumeros) =>{
    console.log(arrayNumeros.map((numero)=>numero*2));
}

duplicarConMap(array);