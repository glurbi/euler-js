function triangle(n) {
    return n * (n+1) / 2;
}

function divisors(n) {
    var c = 0;
    for (var i=0; i<=n; i++) {
        if (n % i == 0) c++;
    }
    return c;
}

var n = 1;
var tr = 0;
var c = 0;
while (true) {
    tr = triangle(n);
    c = divisors(tr);
    //console.log(c);
    if (c > 500) break;
    n++;
}

console.log(tr);
