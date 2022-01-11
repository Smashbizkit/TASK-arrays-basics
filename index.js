let emptyArray = [];
let hobbies = ["reading","coding","gaming","football","diving","crypto","dancing"];
let numbers = [0, 1, 2, 3, 4, 5];
console.log (numbers[1]);
console.log(hobbies[hobbies.length-1]);
hobbies.push ("fake");
console.log(hobbies[hobbies.length-1]);
console.log (hobbies.length);
console.log (`I now have ${hobbies.length} hobbies`);
hobbies.pop();
hobbies.pop();
console.log (hobbies.length);
hobbies = [];
console.log (hobbies);

