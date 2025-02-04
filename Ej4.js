/* Exercise #4 (sugerencia filter() e includes())
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console. */

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

for (let i = 0; i < student1Courses.length; i++) {
    if(student1Courses.indexOf(student2Courses[i]) != -1){
        console.log(student1Courses[i]);
    }
    
}
