"use strict"

class Problem16 {

    static add(n1, n2) {
        let result = "";
        let carry = 0;
        for (let i = n1.length-1; i>=0; i--) {
            let d1 = n1.charCodeAt(i) - "0".charCodeAt(0);
            let d2 = n2.charCodeAt(i) - "0".charCodeAt(0);
            let r = (d1 + d2 + carry) % 10;
            carry = Math.floor((d1 + d2 + carry) / 10);
            result += String.fromCharCode(r + "0".charCodeAt(0));
        }
        if (carry > 0)
            result += String.fromCharCode(carry + "0".charCodeAt(0));
        return result.split('').reverse().join('');
    }

    static twoPower(n) {
        let x = "1";
        for (let i = 0; i < n; i++) {
            x = this.add(x, x);
        }
        return x;
    }

    static solve() {
        let sum = 0;
        let power = 1000;
        let x = this.twoPower(power);
        for (let i = 0; i < x.length; i++) {
            sum += x.charCodeAt(i) - "0".charCodeAt(0);
        }
        console.log(power + " => " + x + " => " + sum);
    }
}

Problem16.solve(); 