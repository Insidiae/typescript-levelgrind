import fs from "fs";

const matches = fs
  .readFileSync("data/football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => row.split(","));

console.log(matches);
