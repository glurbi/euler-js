var primes = [2];

function isPrime(n) {
    if (n == 1)
        return false;
    if (n == 2)
        return true;        
    if (n % 2 == 0)
        return false;
    var root = Math.sqrt(n);
    for (var i=3; i <= root; i+=2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function fillPrimes(n) {
    for (var i=3; i<=n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
}

function triangle(n) {
    return n * (n+1) / 2;
}

function primeFactors(n, pf) {
    if (n == 1)
        return;
    if (isPrime(n))
        return;
    for (var i=0; i<primes.length; i++) {
        var p = primes[i];
        if (n % p == 0) {
            pf.push(p);
            if (isPrime(n / p))
                pf.push(n / p);
            else
                primeFactors(n / p, pf);
            break;
        }
    }
}

function divisors(n) {
    var c = 0;
    for (var i=0; i<=n; i++) {
        if (n % i == 0) c++;
    }
    return c;
}

fillPrimes(10000);
var n = 1;
var tr = 0;
var c = 0;
while (true) {
    tr = triangle(n);
    //c = divisors(tr);
    //console.log(c);
    var pf = [];
    primeFactors(tr, pf)
    console.log(tr + " = " + pf);
    if (n > 30) break;
    n++;
}

console.log(tr);
