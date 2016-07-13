function triangle(n) {
    return n * (n+1) / 2;
}

function divisors(m) {
    return 0;
}

var n = 1;
var tr = 0;
var c = 0;
while (true) {
    tr = triangle(n);
    c = divisors(tr);
    console.log(c);
    if (c.length > 5) break;
    n++;
}

console.log(tr);
