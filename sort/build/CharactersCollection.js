"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    }
    swap(leftIdx, rightIdx) {
        const characters = this.data.split("");
        [characters[leftIdx], characters[rightIdx]] = [
            characters[rightIdx],
            characters[leftIdx],
        ];
        this.data = characters.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
