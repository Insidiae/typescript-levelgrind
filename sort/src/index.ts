import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

const numCollection = new NumbersCollection([10, 3, -5, 0]);
const numSorter = new Sorter(numCollection);
numSorter.sort();
console.log(numSorter.collection);

const strCollection = new CharactersCollection("XaayB");
const strSorter = new Sorter(strCollection);
strSorter.sort();
console.log(strSorter.collection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
