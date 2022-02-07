import { Sortable } from "./Sorter";

export class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx] > this.data[rightIdx];
  }

  swap(leftIdx: number, rightIdx: number): void {
    [this.data[leftIdx], this.data[rightIdx]] = [
      this.data[rightIdx],
      this.data[leftIdx],
    ];
  }
}
