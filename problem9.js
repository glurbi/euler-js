var N = 1000;

function isSumN(a, b, c) {
    return a + b + c == N;
}

function isTriplet(a, b, c) {
    return a*a + b*b == c*c;
}

for (var i = 0; i < N-2; i++) {
    for (var j = i + 1; j < N-1; j++) {
        for (var k = j + 1; k < N; k++) {
            if (isSumN(i,j,k) && isTriplet(i,j,k)) {
                console.log("" + i + " " + j + " " + k);
                console.log(i * j * k);
            }
        }
    }
}
