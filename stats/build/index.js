"use strict";
//* Refactor 1: Using Generics
// import { MatchReader } from "./v1-inheritance/MatchReader";
// import { MatchResult } from "./MatchResult";
Object.defineProperty(exports, "__esModule", { value: true });
// const reader = new MatchReader("data/football.csv");
// reader.read();
// console.log(reader.data[0]);
// let manUnitedWins = 0;
// for (let match of reader.data) {
//   if (
//     (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
//     (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
//   ) {
//     manUnitedWins++;
//   }
// }
// console.log(`Man United won ${manUnitedWins} games!`);
//* Refactor 2: Using Interfaces
const MatchReader_1 = require("./v2-composition/MatchReader");
const CSVFileReader_1 = require("./v2-composition/CSVFileReader");
const MatchResult_1 = require("./MatchResult");
const csvFileReader = new CSVFileReader_1.CSVFileReader("data/football.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
console.log(matchReader.matches[0]);
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if ((match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) ||
        (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games!`);
