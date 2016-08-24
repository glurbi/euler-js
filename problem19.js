"use strict"

class Problem19 {

    isLeapYear(year) {
        return ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0)));
    }

    inc() {
        let newMonth =
            (this.month == 2 && this.day == 28 && !this.isLeapYear(this.year))
            || (this.month == 2 && this.day == 29 && this.isLeapYear(this.year))
            || ([4, 6, 9, 11].indexOf(this.month) != -1 && this.day == 30)
            || ([1, 3, 5, 7, 8, 10, 12].indexOf(this.month) != -1 && this.day == 31);

        if (newMonth) {
            this.year = this.year + Math.floor(this.month / 12);
            this.month = this.month % 12 + 1;
            this.day = 1;
        } else {
            this.day++;
        }
        this.weekDay = (this.weekDay + 1) % 7;
    }

    solve() {
        this.day = 1;
        this.month = 1;
        this.year = 1900;
        this.weekDay = 1;
        this.sundaysCount = 0;
        while (true) {
            if (this.day == 31 && this.month == 12 && this.year == 2000) break;
            this.inc();
            if (this.weekDay == 0 && this.day == 1 && this.year >= 1901) {
                this.sundaysCount++;
            }
        }
        console.log(this.sundaysCount);
    }

}

let p19 = new Problem19();
p19.solve();