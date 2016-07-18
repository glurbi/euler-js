"use strict"

function next(n) {
    if (n % 2 == 0) {
        return n / 2;
    } else {
        return 3 * n + 1;
    }
}

function length(n) {
    let c = 1;
    while (n != 1) {
        n = next(n);
        //console.log(n);
        c++;
    }
    return c;
}

let longest = 0;
let start = 0;
for (let i = 1; i < 1000000; i++) {
    let l = length(i);
    if (l > longest) {
        longest = l;
        start = i;
    }
}

console.log(start  + " => " + longest);
