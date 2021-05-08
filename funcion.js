// function test() {
//     console.log(a);
//     console.log(foo());

//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }

// test();

// (function () {
//     console.log(foo);
//     var foo = 2;
//     var baz = 3;
//     bar = 4;
// })();

// console.log(foo);
// console.log(bar);
// console.log(baz);

// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); 

// Loop del 1 al 5 => Di cuál es el error

// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// Loop del 1 al 5
// function loopToFive() {
//     for (let i = 0; i <= 5; i++) {
//         console.log(i);
//     }
// }
// loopToFive()

// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//   function actuallyPrintingNames() {
//     for (let index = 0; index < names.length; index++) {
//       const name = names[index];
  
//       console.log(name + ' Se encontro en el index :' + index);
//     }
//   }
//   actuallyPrintingNames();
// }
// printNames(beatles);

var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);