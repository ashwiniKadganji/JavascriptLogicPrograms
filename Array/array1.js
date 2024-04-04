// const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];`);
const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];

// 1. Find the total elements available or length and log on console
console.log(`1. Find the total elements available or length and log on console`);
const totalLen = arrayNumbers.length;
console.log(totalLen);
console.log(`-------------------------------------------------------------------------`);

// 2. Log the first element and last element in arrayNumbers and log on console
console.log(`2. Log the first element and last element in arrayNumbers and log on console`);
const firstEle = arrayNumbers[0];
const lastElm = arrayNumbers[arrayNumbers.length-1];
console.log(`First element: ${firstEle} and Last Element : ${lastElm}`);

console.log(`-------------------------------------------------------------------------`);
// 3. Log the thirst last element using length property and log on console
console.log(` 3. Log the thirst last element using length property and log on console`);
const tirdLastElm = arrayNumbers[arrayNumbers.length-3];
console.log(tirdLastElm);

console.log(`-------------------------------------------------------------------------`);
// 4. Find the all even numbers using for in loop and log on console
console.log(`4. Find the all even numbers using for in loop and log on console`);
function allEvenNumbers (num){
     for (const index in num) {
        if (num[index] % 2 === 0) {
            console.log(num[index]);
        }
     }
}
console.log(allEvenNumbers(arrayNumbers));

console.log(`-------------------------------------------------------------------------`);
// 5. Find the odd numbers for in loop and log on console
console.log('5. Find the odd numbers for in loop and log on console');
function allOddNum (num){
    for (const index in num) {
        if (num[index] % 2 !== 0) {
            console.log(num[index]);
        }
    }
}
console.log(allOddNum(arrayNumbers));

console.log(`-------------------------------------------------------------------------`);
// 6. Find all the even positioned elements from arrayNumbers, sum it and log on console
console.log(`6. Find all the even positioned elements from arrayNumbers, sum it and log on console`);
// const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
//                        0   1    2   3   4   5   6  7   8   9  10  = 20+40+23+29+60+11 = 183

// Using for loop:
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 === 0) {
        const evenNum = arrayNumbers[index];
        sum = sum + evenNum;
    }
}
console.log(sum);

console.log(`-------------------------------------------------------------------------`);
// 7. Find all the odd positioned elements from arrayNumbers, sum it and log on console
console.log(`7. Find all the odd positioned elements from arrayNumbers, sum it and log on console`);
// const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
//                        0   1    2   3   4   5   6  7   8   9  10  = 31+25+11+9+2 = 78
let total = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 !== 0) {
        const oddNum = arrayNumbers[index];  
        total = total + oddNum;
         
    }  
}
console.log(total); 

console.log(`-------------------------------------------------------------------------`);
// 8. Find the sum of all elements from arrayNumbers, log on console
console.log(`8. Find the sum of all elements from arrayNumbers, log on console`);

// const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
//                      20+31+40+25+23+11+29+9+60+2+11 = 261

let sum2 = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum2 = sum2 + element; 
}
console.log(sum2);


//using forEach method:

let sum3 = 0;

arrayNumbers.forEach((element) =>{
    sum3 = sum3 + element;
})
console.log('using forEach method',sum3);

// using reduce method:

const sum4 = arrayNumbers.reduce((acc,curr) => acc + curr );
console.log('using reduce method',sum4);

console.log(`-------------------------------------------------------------------------`);
// 9. Find the numbers which are multiple of 5
console.log(` 9. Find the numbers which are multiple of 5`);
// const arrayNumbers = [ 20, 40, 25, 60];

//using for loop:
var num = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 5 == 0 ) {
        console.log(element);
    }   
}

//using forEach loop:
let multof5 = [];
arrayNumbers.forEach(number =>{
    if (number % 5 === 0) {
        multof5.push(number);
    }
})
console.log('using forEach method',multof5);

//using filter method:

const multiple = arrayNumbers.filter((number) => number % 5 == 0);
 console.log('using filter',multiple);

console.log(`-------------------------------------------------------------------------`);
// 10. Is number 115 available in arrayNumbers ?
console.log(`10. Is number 115 available in arrayNumbers ?`);

//using include method:
   const check = arrayNumbers.includes(115);
   if (check) {
    console.log('Yes, number 115 is available in arrayNumbers');
   }else{
    console.log('No, number 115 is not available in arrayNumbers');
   }

//using indexOf method:

const index = arrayNumbers.indexOf(115);
if (index !== -1) {
    console.log('Yes, number 115 is available in arrayNumbers',index);
   }else{
    console.log('No, number 115 is not available in arrayNumbers');
   }

   //using find method:

const number = arrayNumbers.find(num => num === 115);
if (number !== undefined) {
    console.log('Yes, number 115 is available in arrayNumbers');
   }else{
    console.log('No, number 115 is not available in arrayNumbers');
   }

console.log(`-------------------------------------------------------------------------`);
// 11. Is number 23 available in arrayNumbers ?
console.log(`11. Is number 23 available in arrayNumbers ?`);

//using includes method
const isAvailable = arrayNumbers.includes(23);

if (isAvailable) {
    console.log('Yes, number 23 is available in arrayNumbers');
}else{
    console.log('No, number 23 is not available in arrayNumbers');
}

// using indexOf method:

var num = arrayNumbers.indexOf(23);
if (num !== -1) {
    console.log('Yes, number 23 is available in arrayNumbers');
}else{
    console.log('No, number 23 is not available in arrayNumbers');
}

//using find method:

const find = arrayNumbers.find(number => number === 23);
if (find !== undefined) {
    console.log('Yes, number 23 is available in arrayNumbers');
}else{
    console.log('No, number 23 is not available in arrayNumbers');
}

console.log(`-------------------------------------------------------------------------`);
// 12. Insert numbers → 55, 66 before index 3 and log array on console
console.log(`12. Insert numbers → 55, 66 before index 3 and log array on console`);

// using splice method:
 arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);


//using slice and concat method:
const arrayNumbers1 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
var part1 = arrayNumbers1.slice(0,3); // [20,31,40]
var part2 = arrayNumbers1.slice(3); // [25,23,11,29,9,60,2,11]

const array = part1.concat([55,66]);
const updateArray = array.concat(part2);
console.log(updateArray);


//using spread and slice method

const newArray = [...arrayNumbers1.slice(0,3),55,66,...arrayNumbers1.slice(3)];
console.log(newArray);


console.log(`-------------------------------------------------------------------------`);
// 13. Delete 3 elements starting from index 4 and log arrayNumbers on console
console.log(`13. Delete 3 elements starting from index 4 and log arrayNumbers on console`);

//const arrayNumbers = [20, 31, 40, 55, 66, 25, 23, 11, 29, 9, 60, 2, 11];
//using splice method:
const updatedArray = arrayNumbers.splice(4,3);
console.log('deleted items',updatedArray);
console.log(arrayNumbers);

//using slice and concat method:
const arrayNumbers2 = [20, 31, 40, 55, 66, 25, 23, 11, 29, 9, 60, 2, 11];
var part1 = arrayNumbers2.slice(0,4);
console.log('part1',part1);
var part2 = arrayNumbers2.slice(7);
console.log('part2',part2);

const updatedData = part1.concat(part2);
console.log(updatedData);

//using spread and slice method:
const arrayNumbers3 = [20, 31, 40, 55, 66, 25, 23, 11, 29, 9, 60, 2, 11];
const array1 = [...arrayNumbers3.slice(0,4),...arrayNumbers3.slice(7)];
console.log(array1);