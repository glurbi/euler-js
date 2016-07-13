function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

var N = 2000000;
var sum = 0;

for (var n = 2; n < N; n++) {
    if (isPrime(n)) {
        sum += n;
    }
}

console.log(sum);
