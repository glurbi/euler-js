function isPalindrome(n) {
    var s = n.toString();
    var l = s.length;
    for (var i = 0; i < l/2; i++) {
        if (s.charAt(i) != s.charAt(l-1-i)) {
            return false;
        }
    }
    return true;
}

var highest_i = 0;
var highest_j = 0;
var highest_n = 0;
for (var i = 1; i < 1000; i++) {
    for (var j = 1; j < 1000; j++) {
        var n = i * j;
        if (isPalindrome(n) && n > highest_n) {
            var highest_i = i;
            var highest_j = j;
            var highest_n = n;
        }
    }
}

console.log(highest_i + " " + highest_j  + " " + highest_n);
