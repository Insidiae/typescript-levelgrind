import { Sortable } from "./Sorter";

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    const characters = this.data.split("");
    [characters[leftIdx], characters[rightIdx]] = [
      characters[rightIdx],
      characters[leftIdx],
    ];
    this.data = characters.join("");
  }
}
