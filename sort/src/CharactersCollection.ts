import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  private _characters: string[];

  constructor(public data: string) {
    super();
    this._characters = data.split("");
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    [this._characters[leftIdx], this._characters[rightIdx]] = [
      this._characters[rightIdx],
      this._characters[leftIdx],
    ];
    this.data = this._characters.join("");
  }
}
