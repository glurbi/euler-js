"use strict"

let n2s = {
    0 : "",
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine",
    10 : "ten",
    11 : "eleven",
    12 : "twelve",
    13 : "thirteen",
    14 : "fourteen",
    15 : "fifteen",
    16 : "sixteen",
    17 : "seventeen",
    18 : "eighteen",
    19 : "nineteen",
    20 : "twenty",
    30 : "thirty",
    40 : "forty",
    50 : "fifty",
    60 : "sixty",
    70 : "seventy",
    80 : "eighty",
    90 : "ninety",
    100 : "hundred",
    1000 : "thousand"
}

class Problem17 {

    static solve() {
        let sum = 0;
        for (let i = 1; i <= 1000; i++) {
            let s = "";
            let n = i;
            if (Math.floor(n / 1000) > 0) {
                s += n2s[Math.floor(n / 1000)] + "thousand"; 
                n = n % 1000;
            }
            if (Math.floor(n / 100) > 0) {
                s += n2s[Math.floor(n / 100)] + "hundred"; 
                n = n % 100;
                if (n > 0)
                    s += "and";
            }
            if (n >= 20) {
                s += n2s[Math.floor(n / 10) * 10];
                s += n2s[n % 10];  
            } else { 
                s += n2s[n];
            }
            console.log(s);
            sum += s.length;
        }
        console.log(sum);
    }
}

Problem17.solve(); 