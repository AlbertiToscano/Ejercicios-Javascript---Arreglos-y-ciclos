/* Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
 */


const entrada = [3, 6, 12, 5, 100, 1];

const revertirOrden = (numeros) => {

    for (let i = 0; i < numeros.length; i++) {

        for (let j = 0; j < numeros.length -1 -i; j++) {
            

            if (numeros[j] > numeros[j + 1]) {
                let temporal = 0;
                temporal = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temporal;
            }

        }

    }
    return numeros;

};

console.log(revertirOrden(entrada));

