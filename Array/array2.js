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
// -----------------------------------------------------------------------
// ● From the given array find the 3rd last element
console.log('----------------------------------------------------------------------');
console.log('From the given array find the 3rd last element');
// -----------------------------------------------------------------------
// ● How to insert element at the beginning of the array
console.log('----------------------------------------------------------------------');
console.log('How to insert element at the beginning of the array');
// -----------------------------------------------------------------------
// ● How to replace middle element from the array
console.log('----------------------------------------------------------------------');
console.log('How to replace middle element from the array');
// -----------------------------------------------------------------------
// ● How to add element 2 at the end of the array
console.log('----------------------------------------------------------------------');
console.log('How to add element 2 at the end of the array');
// -----------------------------------------------------------------------
// ● How to replace last element with element 9
console.log('----------------------------------------------------------------------');
console.log('How to replace last element with element 9');
// -----------------------------------------------------------------------
// ● WAP to find element 5 from the given array
console.log('----------------------------------------------------------------------');
console.log('WAP to find element 5 from the given array');
// -----------------------------------------------------------------------
// ● How to remove last element from the array
console.log('----------------------------------------------------------------------');
console.log('How to remove last element from the array');
// -----------------------------------------------------------------------
// ● Clone the array ? How we can perform the deep clone ?
console.log('----------------------------------------------------------------------');
console.log('Clone the array ? How we can perform the deep clone ?');
