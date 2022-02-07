"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx] > this.data[rightIdx];
    }
    swap(leftIdx, rightIdx) {
        [this.data[leftIdx], this.data[rightIdx]] = [
            this.data[rightIdx],
            this.data[leftIdx],
        ];
    }
}
exports.NumbersCollection = NumbersCollection;
