// ● Given the string ‘TCS the Indian IT Giant Company’
console.log(`Str = TCS the Indian IT Giant Company`);

let str = 'TCS the Indian IT Giant Company';
// -----------------------------------------------------------------------
// ● WAP to reverse the string

function reverseStr(str){
     var str1 = str.split(' ').reverse().join(" ");
     console.log('Reverse string is: ',str1);
}
reverseStr('TCS the Indian IT Giant Company');


//or revere string with all words in reverse

function reversestr1(str){
    return str.split('').reverse().join("");
}
var originalString = 'TCS the Indian IT Giant Company';
var reverseString = reversestr1(originalString);
console.log(`reverse string and words reverse = ${reverseString}`); 

//or 

function reversedString(string){
    var newString = "";
    for (let index = string.length-1; index >= 0; index--) {
        newString += string[index];
    }
    return newString; 
}
let originalStr ='I am Angular Developer';
let newString = reversedString(originalStr);
console.log(`Reversed string is = ${newString}`);

// or only reverse words not a string

function reverseWordStr(str){
    //split the string into words
    let words = str.split(' ');

    // reverse each word
    for (let index = 0; index < words.length; index++) {
        words[index] = words[index].split('').reverse().join('');
    }

    //join the words back into a string
    return words.join(' ');
}
console.log(reverseWordStr('Hello my Name is Khan'));

// -----------------------------------------------------------------------
// ● WAP to count the vowels ?
console.log('WAP to count the vowels ?');

function countVowels(sentence){

    let count = 0;

    for (let index = 0; index < sentence.length; index++) {
        if (sentence[index] == 'a' || sentence[index] == 'A' || sentence[index] == 'e' || sentence[index] == 'E'|| sentence[index] == 'i' || sentence[index] == 'I' || sentence[index] == 'o' || sentence[index] == 'O' ) {
            
            count++;
        }
    }
    return count;
}
console.log('Total vowels are: ',countVowels('Kar har maidan fateh'));

// -----------------------------------------------------------------------
// ● WAP to count the vowels and don’t consider duplicate vowels ?

function countUniqueVowel(str){
    // Convert the string to lowercase to simplify counting
     str = str.toLowerCase();

      let count = 0;
        
        //define an object to store the unique vowels
        let vowels ={};
        
        // Iterate through each character in the string
        for (let i = 0; i< str.length; i++) {
          if (/[aeiou]/.test(str[i])) {
            // If it's a vowel and not already counted, increase the count and mark it as counted
            if (!vowels[str[i]]) {
                count++;
                vowels[str[i]] = true;
            }
          }   
        }
        return count;   
}
console.log('unique vowels : ',countUniqueVowel('Hello Good morning Jaanlog'));

//or

function uniqueVowels(str){
    // Convert the string to lowercase to simplify counting
  str = str.toLowerCase();

  let count = 0;

  // Define an array to store unique vowels
  let uniqueVowels = [];

for (const char of str) {
    if ('aeiou'.includes(char)) {
       if (!uniqueVowels.includes(char)) {
         count++;
         uniqueVowels.push(char);
       }
    }
 }
return count;
}
console.log('total unique vowels: ',uniqueVowels('Hello i am Amazing and Unique!!!'));

// -----------------------------------------------------------------------
// ● WAP to get the even indexed vowels ?
function evenIndexedVowels(str){
    // convet all character in lowercase
    str = str.toLowerCase();

    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ) {
                count++;
            }
        }
    }
    return count;
}
console.log('even indexed vowel: ',evenIndexedVowels('I am Indian'));

// -----------------------------------------------------------------------
// ● WAP to count the total number of words ?

function countTotalWords(str){
    let words = str.split(' ');
    let TotalWords = words.length;
    console.log(`Total words are : ${TotalWords}`);
}
countTotalWords('Hello Good morning everyone , have a nice day....')
// -----------------------------------------------------------------------
