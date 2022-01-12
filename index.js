//1. Fork and clone [this repo](https://github.com/JoinCODED/TASK-arrays-basics/)
//2. Create `index.js` file. Everytime you check, you should use the command `node index.js` to see the result
//3. Create an empty array `emptyArray`
//4. Create an array `hobbies`, add 6 hobbies to it
//5. Create an array `numbers`, add your favorite 5 numbers
//6. Print out the second number from the array `numbers`
//7. Print out the last hobby from the array `hobbies`
//8. Add a fake hobby to the end of the array `hobbies` 
//9. Print the last hobby 
//10. Print the length of array `hobbies`
//11. Remove the last 2 hobbies from array `hobbies`
//12. Print length of `hobbies`
//13. Print every element in hobbies in a single line
//14. Empty the array `hobbies`


let emptyArray = [];
let hobbies = ["reading","coding","gaming","football","diving","crypto"];
let numbers = [0, 1, 2, 3, 4, 5];
console.log (numbers[1]);
console.log(hobbies[hobbies.length-1]);
hobbies.push ("dancing");
console.log(hobbies[hobbies.length-1]);
console.log (hobbies.length);
console.log (`I now have ${hobbies.length} hobbies`);
hobbies.pop();
hobbies.pop();
console.log (hobbies.length);
hobbies = [];
console.log (hobbies);

