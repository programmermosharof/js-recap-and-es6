const max = Math.max(1, 2, 3, 4, 5);
console.log(max);
const arr = [1, 2, 3, 4, 5, 78.9, 0];
const maxFromArr = Math.max(...arr);
console.log(maxFromArr);
console.log(...arr);


const arr1 = [1, 2, 3];
// function sum(a, b, c) {
//     return a + b + c;
// }
// console.log(sum(...arr1));

const arr2 = [4, 5, 6];
const combinedArr = [ 11,...arr2, 50, 60];
// combinedArr.push(1, 2, 3);
console.log(arr2);
console.log(combinedArr);



const obj1 = { name: 'Alice', age: 30 };
const obj2 = { city: 'New York', country: 'USA' };

const combinedObj = { ...obj1, ...obj2, profession: 'Developer', salary: 100000 };
console.log(combinedObj);