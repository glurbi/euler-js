"use strict"

let input = `
75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`

class Problem18 {

    asNumbers(input) {
        let result = [];
        let lines = input.split('\n');
        for (let line of lines) {
            if (line == "")
                continue;
            let slice = [];
            let numbers = line.split(' ');
            for (let number of numbers) {
                slice.push(Number.parseInt(number));
            }
            result.push(slice);
        }
        return result;
    }

    solve(line, column, path, sum) {
        let val = this.lines[line][column];
        path = path.slice(0);
        path.push(val);
        sum += val;
        if (line == this.lines.length-1) {
            if (sum > this.bestSum) {
                this.bestSum = sum;
                this.bestPath = path;
                console.log(this.bestPath + " => " + this.bestSum);
            }
            return;
        }
        this.solve(line+1, column, path, sum);
        this.solve(line+1, column+1, path, sum);
    }

    run() {
        this.bestPath = null;
        this.bestSum = 0;
        this.lines = this.asNumbers(input);
        console.log(this.lines);
        this.solve(0, 0, [], 0);
    }

}

let p18 = new Problem18();
p18.run(); 