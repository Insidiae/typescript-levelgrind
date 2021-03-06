"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numCollection.sort();
console.log(numCollection.data);
const strCollection = new CharactersCollection_1.CharactersCollection("XaayB");
strCollection.sort();
console.log(strCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
