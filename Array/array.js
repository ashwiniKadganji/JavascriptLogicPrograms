// const arrayFruits = ["Banana", "Orange", "Apple", "Mango", “Water Melon”];

console.log('const arrayFruits = ["Banana", "Orange", "Apple", "Mango", “Water Melon”];');
const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

// For a given array fruits perform below operations as:
// 1. Log the first and last element on console
console.log(`-----------------------------------------------------------------------`);
console.log(`1. Log the first and last element on console`);
console.log(`First element is: ${arrayFruits[0]}`);
console.log(`Last element is : ${arrayFruits[arrayFruits.length-1]}`);

// 2. Add element → “Papaya” before the element ‘Banana’ and then log array on console
console.log(`-----------------------------------------------------------------------`);
console.log(` 2. Add element → “Papaya” before the element ‘Banana’ and then log array on console`);
const array = arrayFruits.unshift('Papaya');
console.log(`Add papaya before banana : ${arrayFruits}`);
// 3. Remove ‘Mango’ from the array
console.log(`-----------------------------------------------------------------------`);
console.log(`3. Remove ‘Mango’ from the array`);
const remFruit = arrayFruits.splice(4,1);
console.log(`Remove Mango from the array : ${arrayFruits}`);
// 4. Add element or insert an element ‘Pineapple’ at the last position
console.log(`-----------------------------------------------------------------------`);
console.log(`4. Add element or insert an element ‘Pineapple’ at the last position`);
arrayFruits.push('Pineapple');
console.log(arrayFruits);
// 5. Insert an element - ‘Dragon Fruit’ before “Water Melon”
console.log(`-----------------------------------------------------------------------`);
console.log(` 5. Insert an element - ‘Dragon Fruit’ before “Water Melon”`);
arrayFruits.splice(4,0,'Dragon Fruit');
console.log(arrayFruits);
// 6. Replace an element ‘Orange’ with ‘Kiwi’
console.log(`-----------------------------------------------------------------------`);
console.log(`6. Replace an element ‘Orange’ with ‘Kiwi’`);
arrayFruits.splice(2, 1,'Kiwi');
console.log(arrayFruits);
// 7. Log the elements starting from index 1 to 4
console.log(`-----------------------------------------------------------------------`);
console.log(` 7. Log the elements starting from index 1 to 4`);
//['Papaya', 'Banana', 'Kiwi', 'Apple', 'Dragon Fruit', 'Water Melon', 'Pineapple']
const subarray = arrayFruits.slice(1,5);
console.log(subarray);
// 8. Only select last 3 element and log on console: Use the length property
console.log(`-----------------------------------------------------------------------`);
console.log(`8. Only select last 3 element and log on console: Use the length property`);
//['Papaya', 'Banana', 'Kiwi', 'Apple', 'Dragon Fruit', 'Water Melon', 'Pineapple']
const last3 = arrayFruits.slice(4,(arrayFruits.length));
const array1 = arrayFruits.splice(4);
console.log(last3);
console.log(array1);

// Q..WAP to find the even positioned value ?
console.log(`-----------------------------------------------------------------------`);
console.log(`Q..WAP to find the even positioned value ?`);

function evenPositionedValue(numbers) {
    
    let evenpisotioned = [];
  for (let index = 1; index < numbers.length; index += 2) {
         evenpisotioned.push(numbers[index]);
  }
  return evenpisotioned;
}
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(evenPositionedValue(numbers));