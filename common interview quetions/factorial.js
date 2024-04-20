// 3! = 1 * 2 * 3 = 6

 let factorialIterative = function(number){
    if (number == 0 || number == 1) {
        return 1;
    }
    if(number < 0) {
        return `invalid input that is negative number: ${number}`;
    }
    let result = 1;
    for (let index = 1; index <= number ; index++) {
        result = result * index;
    }
    return result;
}
console.log(`the factorial of 4 is: ${factorialIterative(4)} `);
console.log(`the factorial of null is: ${factorialIterative(null)} `);
console.log(`the factorial of undefined is: ${factorialIterative(undefined)} `);
console.log(`the factorial of 8 is: ${factorialIterative(8)} `);
console.log(`the factorial of 0 is: ${factorialIterative(0)} `);
console.log(`the factorial of -3 is: ${factorialIterative(-3)} `);
