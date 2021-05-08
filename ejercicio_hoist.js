// GIVEN
// var example;
// console.log(example);
//  example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
// console.log(example);

//EJERCICIOS 

// ** 1 **

// console.log(hello);   // undefined                                
// var hello = 'world';   

// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello);   // undefined                                
// hello = 'world';  

// ** 2 **

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// AFTER HOISTING BY THE INTERPRETER

// var needle = 'magnet';         // se reemplaza el valor
// test();                       // llamada a la funcion
// function test(){              // se ejecuta la funcion
//         needle = 'magnet';     // var neddle sube y reemplaza el valor
//         console.log(needle);   // muestra el valor de var neddle
// }

// **  output = magnet  **

// ** 3 **

// var brendan = 'super cool';
// function print(){           // no esta inicializada la funcion
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// AFTER HOISTING BY THE INTERPRETER

// output = super cool 

// ** 4 **

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// AFTER HOISTING BY THE INTERPRETER

// var food = 'chicken';
// console.log(food);     // ejecuta la var food Muestra 'chicken'
// eat();                 // se llama a la funcion
// function eat(){        // se ejecuta la función
//     food = 'half-chicken'; // no es una variable por lo cual permanece el primer valor de la variable food
//     console.log(food); // Muestra en pantalla el valor de food
//     var food = 'gone'; // Sube var food arriba pero sin valor y como ya var food tiene un valor lo conserva
// }

// Output = Chicken
//          half-chiken


// 5

// mean();
// console.log(food);
// var mean = function() {  // Funcion no es una variable imprime error
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// AFTER HOISTING BY THE INTERPRETER
// var food;           // Sube var food
// mean();             //Llamado a la funcion 
// console.log(food);  // se ejecuta a la 2da vuelta e imprime 'fish
// function mean() {   // se ejecuta funcion
//     food = "chicken"; 
//     console.log(food); // Imprime el valor de food 'chicken'
//     food = "fish";
//     console.log(food); // Imprime el valor de food 'fish'
// }
// console.log(food);  // imprime el valor de food 'fish'

// OUTPUT = 'chicken', 'fish', 'fish', 'fish'

// // 6

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// AFTER HOISTING BY THE INTERPRETER
// var genre;
// console.log(genre); // Se ejecuta al incio y retorna undefined 
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre); // Imprime 'Rock'
//     genre = "r&b"; // Sube arriba
//     console.log(genre); // imprime el valor de genre 'r&b'
// }
// console.log(genre); 

// // output = undefined, 'rock', 'r%b', 'disco'



// // 7

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// AFTER HOISTING BY THE INTERPRETER
// var dojo;
// dojo = "san jose";
// console.log(dojo); // imprime 'san jose'
// learn();            // llama a la funcion
// function learn() {  // se ejecuta la funcion
//     dojo = "seattle"; 
//     console.log(dojo); // imprime 'seattle'
//     dojo = "burbank"; // var dojo sube al arriba
//     console.log(dojo); // imprime 'burbank'
// }
// console.log(dojo); //imprime 'burbank'

// output = 'san jose,'seattle','burbank','burbank'


// // 8

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// AFTER HOISTING BY THE INTERPRETER

// console.log(makeDojo("Chicago", 65)); 
// console.log(makeDojo("Berkeley", 0)); // 'closed for now'
// function makeDojo(name, students){
//     var dojo = {};        // Cambiamos CONST POR VAR
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// output = { name: 'Chicago', students: 65, hiring: true }
// closed for now