/* 
Exercise #1 ( sugerencia join() )
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.

 */


let arr = ["This", "is", "a", "sentence."];
function printOutString(array) {
   let oracion = "";
   for (let index = 0; index < array.length; index++) {
      if (index != array.length - 1) {
         oracion += array[index] + " ";;
      }
      else {
         oracion += array[index];
      }
   }
   console.log(oracion);
}

console.log(arr.join(" "));
printOutString(arr);

/* Complete the function to print out the string: This is a sentence. */
 