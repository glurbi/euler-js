function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

var i = 0;
var n = 1;
while (i < 10001) {
    n++;
    if (isPrime(n)) {
        i++
    }
}

console.log(n);
