//* Refactor 1: Using Generics
import fs from "fs";

export abstract class CSVFileReader<DataType> {
  data: DataType[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): DataType;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
