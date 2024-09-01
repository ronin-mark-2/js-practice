// Data structures

// 1. Objects - Key-value pairs
const car = {
    brand: 'Toyota',
    model: 'Supra',
    color: 'Black'
}


// 2. Arrays
const grades = [96, 87, 78, 69];
let gradeSum = 0;
for(i = 0; i < grades.length; i++) {
    gradeSum += grades[i];
}
console.log(gradeSum / grades.length); // Output: 82.5


// Map - It is like an array
//     - Key-value pair --> Hash function --> Hash table
//     - In objects we can use only strings as keys but in Maps we can uses anythings as keys
//     - Maps are iterable


// Set
const house1 = 'red';
const house2 = 'blue';
const house3 = 'red';

const houses = new Set()

houses.add(house1).add(house2).add(house3);

console.log(houses);    // Set(2) {'red', 'blue'}

