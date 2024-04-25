// -----------------------------------------------------------------------
// const array = [1, 6, 5, 3, 11, 23, 4 ]
// ***************************************
console.log(` const array = [1, 6, 5, 3, 11, 23, 4 ]`);
const array = [1, 6, 5, 3, 11, 23, 4 ];
// -----------------------------------------------------------------------
// ● Traverse the array using forEach loop
console.log('----------------------------------------------------------------------');
console.log('Traverse the array using forEach loop');

//using forEach loop 
console.log('using forEach loop ');
array.forEach(function(item) {
    console.log(item);
});

// using for loop:
console.log('using for loop:');

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

// using for of loop:
console.log('using for of loop:');
for (const items of array) {
    console.log(items);
}

// using while loop:
console.log('using while loop:');

var index = 0;
while (index < array.length) {
    console.log(array[index]);
    index++;
}

//using map ():
console.log('using map method');
let arrays = array.map(function(item){
    console.log(item)
})
// -----------------------------------------------------------------------
// ● WAP to print the odd indexed elements from the given array
console.log('----------------------------------------------------------------------');
console.log('WAP to print the odd indexed elements from the given array');
// array = [1, 6, 5, 3, 11, 23, 4 ]
//          0  1  2  3   4   5  6  =[6,3,23]
//using for loop
console.log('using for loop and if condition');

for (let index = 0; index < array.length; index++) {
    if (index % 2 !== 0) {
        console.log(array[index]);    
    }  
}
//or
console.log('using for loop ');
for (let index = 1; index < array.length; index+=2) {
    const element = array[index];
    console.log(element);
}

//using forEach loop
console.log('using foreach loop ');
array.forEach((item, index) => {
    if (index % 2 !== 0) {
        console.log(item);
    }
});

// using for..of loop and if condition
console.log('using for..of loop and if condition');

  var index = 0;
for (const item of array) {
    if (index % 2 !== 0) {
        console.log(item);
    }
    index++
}

//Using Array.prototype.filter() method:
console.log('Using Array.prototype.filter() method:');

const oddIndexedElement = array.filter(function(item,index) {
     return index % 2 !== 0
})
console.log(oddIndexedElement);
// -----------------------------------------------------------------------
// ● WAP to print the array in reverse order
console.log('----------------------------------------------------------------------');
console.log('WAP to print the array in reverse order');
// array = [1, 6, 5, 3, 11, 23, 4 ]
//using for loop:
console.log('using for loop');
for (let index = array.length-1; index >= 0; index--) {
    const element = array[index];
    console.log(element);
}
// using for of loop
console.log('using for of loop');
let array1 = [];
for (const item of array.reverse()) {
      array1.push(item);
}
console.log(array1);

// Using Array.prototype.reverse() method:
console.log('Using Array.prototype.reverse() method:');
// array =  [4, 23, 11, 3, 5, 6, 1]
let reverseArray = array.slice().reverse();
console.log(reverseArray);

// -----------------------------------------------------------------------
// ● From the given array find the last element using length property
console.log('----------------------------------------------------------------------');
console.log('From the given array find the last element using length property');
// array = [4, 23, 11, 3, 5, 6, 1]

const lastElement = array.length - 1;
console.log(array[lastElement]); 
// -----------------------------------------------------------------------
// ● From the given array find the 3rd last element
console.log('----------------------------------------------------------------------');
console.log('From the given array find the 3rd last element');
// array = [4, 23, 11, 3, 5, 6, 1]

const thirdLastEle = array.length-3;
console.log(array[thirdLastEle]);

// -----------------------------------------------------------------------
// ● How to insert element at the beginning of the array
console.log('----------------------------------------------------------------------');
console.log('How to insert element at the beginning of the array');

//using unshift method:
console.log('using unshift method');
const insertele = array.unshift(17);
console.log(array);

// using spread operator:
console.log(' using spread operator:');
const addElem = [28, ...array];
console.log(addElem);

// -----------------------------------------------------------------------
// ● How to replace middle element from the array
console.log('----------------------------------------------------------------------');
console.log('How to replace middle element from the array');
// array =[17, 4, 23, 11, 3, 5, 6, 1];

function middleValueReplace(array,newValue){
    let len = array.length;
// Calculate the index of the middle element
   let middleIndex = Math.floor(len/2)

//    //using splice method:
//    let newArray = array.splice(middleIndex,1, newValue);
//or
// using spread Create a new array with the middle element replaced by the new value

  let newArray = [...array.slice(0,middleIndex),newValue,...array.slice(middleIndex+1)];

   return newArray;
}
console.log(`new array after replacing middle value `,middleValueReplace([6,7,8,9,0,1,11,12,13,14],143));

// -----------------------------------------------------------------------
// ● How to add element 2 at the end of the array
console.log('----------------------------------------------------------------------');
console.log('How to add element 2 at the end of the array');

let newArray = array.push(2);
console.log('add 2 at the end of the array :',array);
// -----------------------------------------------------------------------
// ● How to replace last element with element 9
console.log('----------------------------------------------------------------------');
console.log('How to replace last element with element 9');

let replaceNum = array.splice(array.length-1,1,9);
console.log(array);
// -----------------------------------------------------------------------
// ● WAP to find element 5 from the given array
console.log('----------------------------------------------------------------------');
console.log('WAP to find element 5 from the given array');

// using indexOf method:

function findEle(array,num){
    return array.indexOf(num);
}
console.log(` The position is: `,findEle([12,2,3,5,4,6,7],5));

//using for loop

function findElement(array,num){
    for (let i = 0; i < array.length; i++) {
       if (  array[i] === num) {
        return i;
       }
    }
    return -1
}
console.log(findElement([1,2,3,4,5],6));
console.log(findElement([1,2,3,4,5],5));

//using findIndex method:

function findNum(array,num){
    return array.findIndex(item => item === num);
}
console.log(findNum([17,28,7,2,99,4],5));
console.log(findNum([17,28,7,2,99,4],28));


// -----------------------------------------------------------------------
// ● How to remove last element from the array
console.log('----------------------------------------------------------------------');
console.log('How to remove last element from the array');

console.log(array);
array.pop();
console.log(array);
// -----------------------------------------------------------------------
// ● Clone the array ? How we can perform the deep clone ?
console.log('----------------------------------------------------------------------');
console.log('Clone the array ? How we can perform the deep clone ?');

// using spread operator
let newarray = [...array];
console.log(newarray); 

// using slice method
function deepClone(arr) {
    return arr.slice(0);
  }
  
  // Example usage:
  let originalArray = [1, [2, 3], { a: 4 }];
  let clonedArray = deepClone(originalArray);
  console.log("Original array:", originalArray);
  console.log("Cloned array:", clonedArray);

  // Using JSON.parse() and JSON.stringify()

  function deepClone(arr) {
    return JSON.parse(JSON.stringify(arr));
  }
  
  // Example usage:
  let originalArray1 = [1, [2, 3], { a: 4 }];
  let clonedArray1 = deepClone(originalArray1);
  console.log("Original array:", originalArray1);
  console.log("Cloned array:", clonedArray1);