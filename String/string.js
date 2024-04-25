// String basic assignments using String Template, File → 03_stringBasicAssig01.js
// ================================================================

// Please have the function with name → stringBasics( ), No arguments and no return is required
// 1. ‘My dream company is “your dream company name” ’ log on console
// 2. Create 3 variables for My Hobbies are: , “Your hobby1”, “Your hobby2”, “Your hobby3”
// 2.1. Log all hobbies on console on same line
// 2.2. Sum the total number of characters that is available in hobby1, hobby2 and
// hobby3 and log on console

console.log(`
// Please have the function with name → stringBasics( ), No arguments and no return is required
// 1. ‘My dream company is “your dream company name” ’ log on console
// 2. Create 3 variables for My Hobbies are: , “Your hobby1”, “Your hobby2”, “Your hobby3”
// 2.1. Log all hobbies on console on same line
// 2.2. Sum the total number of characters that is available in hobby1, hobby2 and
// hobby3 and log on console
`);

function stringBasics(){
    console.log('my dream company It Banglore company');
    
    var hobby1 = 'reading';
    var hobby2 = 'Singing';
    var hobby3 = 'traveling';
    console.log(`my hobbies are: ${hobby1}, ${hobby2} and ${hobby3}`);

    var len1 = hobby1.length;
    var len2 = hobby2.length;
    var len3 = hobby3.length;
    console.log(`length of ${hobby1} = ${len1}, ${hobby2} = ${len2} and ${hobby3} = ${len3}`);
    var sum = len1 + len2 + len3;
    console.log(`sum of all hobbies length = ${sum}`);
}
stringBasics();