import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numCollection = new NumbersCollection([10, 3, -5, 0]);
numCollection.sort();
console.log(numCollection.data);

const strCollection = new CharactersCollection("XaayB");
strCollection.sort();
console.log(strCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
