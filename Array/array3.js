// -----------------------------------------------------------------------
// const array = [ 1, 6, 5, 3, 11, 23, 4 ]
// ****************************************
console.log('const array = [ 1, 6, 5, 3, 11, 23, 4 ]');
const array = [ 1, 6, 5, 3, 11, 23, 4 ];
// -----------------------------------------------------------------------
console.log('-----------------------------------------------------------------------');
// ● How to merge two arrays:
console.log(' How to merge two arrays:');
   const array1 = [1,2,3,4,5];
   const array2 = [6,7,8,9,0];

   console.log('using spread operator:');
   let array3 = [...array1,...array2];
   console.log(`merged two arrays new array : ${array3}`);

   console.log('using concat method');
   let array4 = array1.concat(array2);
   console.log(`merged two arrays new array : ${array4}`);

   console.log('using push method');
    array1.push(...array2);
   console.log(`merged two arrays new array : ${array1}`);

   console.log('-----------------------------------------------------------------------');
// -----------------------------------------------------------------------
// ● WAP to reverse the array ?
// const array = [ 1, 6, 5, 3, 11, 23, 4 ];
console.log('WAP to reverse the array ?');

console.log('using for loop :');
function revArray(array){
    let revArray = [];
    for (let i = array.length-1; i >= 0 ; i--) {
        revArray.push(array[i]);         
    }  
    return revArray;
}
console.log('reverse array: ',revArray([ 1, 6, 5, 3, 11, 23, 4 ])); 

console.log('using reverse method:');
array.reverse();
console.log(array);

console.log('-----------------------------------------------------------------------');
// -----------------------------------------------------------------------
// ● WAP to remove the duplicates elements
console.log('WAP to remove the duplicates elements');

console.log('using filter method');
let arrays = [11,1,1,1,2,,3,4,5,,6,6,6,7,8,9,0,3,3,2];
let uniqueArray = arrays.filter((value, index,self) =>{
      return self.indexOf(value) === index;
});
console.log(uniqueArray);

//or
console.log('using for loop');

function duplicateRem(array){
  let uniqueArray = [];
   for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
    }
   }
   return uniqueArray;
}
console.log('original array',duplicateRem([1,2,2,2,44,4,44,2,2,2,6,7,8,6,7,6,5,9,8,4,8]));

console.log('using set method:');

let arrayss =[2,44,4,44,2,2,2,6,7,8,6,7,6,5,9,8,4,8];
const uniqueArray1 = Array.from(new Set(arrayss));
console.log(uniqueArray1); 

console.log('-----------------------------------------------------------------------');
// -----------------------------------------------------------------------
// ● WAP to get the sum of all array elements.
console.log('-----------------------------------------------------------------------');
// -----------------------------------------------------------------------
// ● WAP to get multiplication of all array elements
console.log('-----------------------------------------------------------------------');
// -----------------------------------------------------------------------
// ● WAP to sort the given array in ascending order
console.log('-----------------------------------------------------------------------');
// -----------------------------------------------------------------------
// ● WAP to sort the given array in descending order
console.log('-----------------------------------------------------------------------');
// -----------------------------------------------------------------------
// ● Find the second largest element from the array
console.log('-----------------------------------------------------------------------');
// -----------------------------------------------------------------------
// ● Find the second smallest element
console.log('-----------------------------------------------------------------------');
// -----------------------------------------------------------------------
// ● There are two arrays with individual values, write a JavaScript program to compute the sum of each
// individual index value from the given arrays.
// Sample array : array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13];
// Expected Output : [4, 5, 8, 10, 12, 13]
