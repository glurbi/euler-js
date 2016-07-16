"use strict"

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

function primeFactorPowers(n, pfp) {
    if (n == 1)
        return [];
    if (isPrime(n))
        return [];
    for (var i=0; i<primes.length; i++) {
        var p = primes[i];
        let power = 0;
        while (n % p == 0) {
            power++;
            n = n / p;
        }
        if (power > 0)
            pfp.push(power);
        if (n == 1)
            break;
    }
}

function divisorsFromPrimeFactorsPowers(pfp) {
    let c = 1;
    for (let i=0; i<pfp.length;i++) {
        c *= pfp[i]+1;
    }
    return c;
}

fillPrimes(10000);
var n = 1;
var tr = 0;
while (true) {
    tr = triangle(n);
    var pf = [];
    primeFactors(tr, pf);
    var pfp = [];
    primeFactorPowers(tr, pfp);
    let divisors = divisorsFromPrimeFactorsPowers(pfp);
    console.log(tr + " = [" + pf + "] [" + pfp + "] " + divisors);

    if (divisors > 500)
        break;

    n++;
}

console.log(tr);
