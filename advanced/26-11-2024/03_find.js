// prime number = 2,3,5,7,11,13,17,19,23 etc

function isPrime(val) { // assume val = 4
    var start = 2;
    while (start <= Math.sqrt(val)) {
        if (val % start < 1) {  // = 0 < 1 
            return false;
        }
        start++
    }
    return val > 1;
}
console.log([7, 8, 9, 10, 13].find(isPrime));
console.log([7, 8, 9, 10, 13].findIndex(isPrime));
