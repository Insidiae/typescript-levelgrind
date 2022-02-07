"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        //* Bubble Sort
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                //? This only works if collection is number[]
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        [this.collection[j], this.collection[j + 1]] = [
                            this.collection[j + 1],
                            this.collection[j],
                        ];
                    }
                }
                //? This only works if collection is string
                if (typeof this.collection === "string") {
                    // You get the idea... Yeah there has to be a better way than this!
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
