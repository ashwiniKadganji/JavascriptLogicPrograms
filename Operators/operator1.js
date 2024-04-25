// >>Assignment 01: File-05_operatorA.js Don’t forget to log result on console using string template only
// ===========================================================================
// 1. Write a normal function in such a way that it should accept one string value as argument.
// 1.1. Function name → squareOfWordLength
// 1.2. Find the length of word and return it’s length square.
// 1.3. Invoke or call this function for values one by one
// 1.3.1. “JavaScript”
// 1.3.2. “Google Chrome”
// 1.3.3. “Developer Smart”
console.log(`1. Write a normal function in such a way that it should accept one string value as argument.
// 1.1. Function name → squareOfWordLength
// 1.2. Find the length of word and return it’s length square.
// 1.3. Invoke or call this function for values one by one
// 1.3.1. “JavaScript”
// 1.3.2. “Google Chrome”
// 1.3.3. “Developer Smart”`);

function squareOfWordLength(word){
     let len = word.length;
     return len * len;
}
console.log('javascript',squareOfWordLength('javascript'));
console.log('Google Chrome',squareOfWordLength('Google Chrome'));
console.log('Developer Smart',squareOfWordLength('Developer Smart'));

console.log('----------------------------------------------------------------');
// 2. Given a string “I am Angular Developer” write a FE with no arg and no return value
// 2.1. Find the string length and divide by total number words available in that string. Log the
// result on console
// 2.2. Find the string length and multiple by the total words available in string

console.log(`// 2. Given a string “I am Angular Developer” write a FE with no arg and no return value
// 2.1. Find the string length and divide by total number words available in that string. Log the
// result on console
// 2.2. Find the string length and multiple by the total words available in string`);

var strName = function(){
 
    var str = 'I am Angular Developer';
    let strlen = str.length;
    console.log('string length is = ',strlen);
    var word = str.split(' ');
    var lenWord = word.length;
    console.log('total word length',lenWord);

    let divWord = strlen / lenWord ;
    console.log('the string length and divided by the total words',divWord);

    let mulWord = strlen * lenWord;
    console.log('the string length and multiple by the total words = ',mulWord);
}
strName();