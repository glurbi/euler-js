var n = 100;

var sumsquare = 0;
var squaresum = 0;
for (var i = 1; i <= n; i++) {
    sumsquare += i*i;
    squaresum += i;
}
squaresum *= squaresum;

var diff = squaresum - sumsquare;
console.log(diff);
