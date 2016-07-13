var sum = 0;
var n = 0;
var n1 = 1;
var n2 = 1;
while (n < 4000000) {
    n = n1 + n2;
    n2 = n1;
    n1 = n;
    if (n % 2 == 0) {
        sum += n;
    }
}
console.log(sum);
