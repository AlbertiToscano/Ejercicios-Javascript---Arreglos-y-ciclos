/* Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array .
 */

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.splice(people.indexOf("Dani"), 1);

people.splice(people.indexOf("Juan"), 1);

const moverPersona = (nombre) => {
    people.splice(people.indexOf(nombre), 1);
    people.unshift(nombre);
    return people;
}
moverPersona("Luis");


people.push("Alberti");

for (let i = 0; i < array.length; i++) {
    console.log(people[i]);
    if (people[i] == "Maria") {
        break;
    }
}

console.log(people.indexOf("Maria"));

console.log(people);