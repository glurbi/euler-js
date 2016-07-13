var n = 0;
var found = false;
while (!found) {
    n++;
    found = true;
    for (var i = 1; i <= 20; i++) {
        if (n % i != 0) {
            found = false;
            break;
        }
    }
}

console.log(n);
