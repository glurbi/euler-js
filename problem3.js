function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

var N = 600851475143;
var q = N;
while (q > 1) {
    var i = 2;
    while (q % i != 0) {
        i++;
    }
    if (isPrime(i)) {
        q /= i;
        console.log(i);
    } else {
        i++
    }
}
