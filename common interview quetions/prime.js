// WAP to check the given number is prime or not

function isPrime(num){
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            // console.log('the given number is not prime.');
            return false;
        }
    }
    // console.log('the given number is not prime.');
    return true;
}
console.log(`4 is prime number : ${isPrime(4)}`);
console.log(`5 is prime number : ${isPrime(5)}`);
console.log(`6 is prime number : ${isPrime(6)}`);
console.log(`7 is prime number : ${isPrime(7)}`);
console.log(`8 is prime number : ${isPrime(8)}`);