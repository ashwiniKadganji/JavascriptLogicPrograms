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
//                        0    1    2   3   4   5   6  7   8   9  10  = 20+40+23+29+60+11 = 183
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 0) {
        const evenNum = arrayNumbers[index];
        sum = sum + evenNum;
    }
}
console.log(sum);

console.log(`-------------------------------------------------------------------------`);
// 7. Find all the odd positioned elements from arrayNumbers, sum it and log on console
console.log(`7. Find all the odd positioned elements from arrayNumbers, sum it and log on console`);
console.log(`-------------------------------------------------------------------------`);
// 8. Find the sum of all elements from arrayNumbers, log on console
console.log(`8. Find the sum of all elements from arrayNumbers, log on console`);
console.log(`-------------------------------------------------------------------------`);
// 9. Find the numbers which are multiple of 5
console.log(` 9. Find the numbers which are multiple of 5`);
console.log(`-------------------------------------------------------------------------`);
// 10. Is number 115 available in arrayNumbers ?
console.log(`10. Is number 115 available in arrayNumbers ?`);
console.log(`-------------------------------------------------------------------------`);
// 11. Is number 23 available in arrayNumbers ?
console.log(`11. Is number 23 available in arrayNumbers ?`);
console.log(`-------------------------------------------------------------------------`);
// 12. Insert numbers → 55, 66 before index 3 and log array on console
console.log(`12. Insert numbers → 55, 66 before index 3 and log array on console`);
console.log(`-------------------------------------------------------------------------`);
// 13. Delete 3 elements starting from index 4 and log arrayNumbers on console
console.log(`13. Delete 3 elements starting from index 4 and log arrayNumbers on console`);
