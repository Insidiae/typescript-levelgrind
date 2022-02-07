"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
        this._characters = data.split("");
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    }
    swap(leftIdx, rightIdx) {
        [this._characters[leftIdx], this._characters[rightIdx]] = [
            this._characters[rightIdx],
            this._characters[leftIdx],
        ];
        this.data = this._characters.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
