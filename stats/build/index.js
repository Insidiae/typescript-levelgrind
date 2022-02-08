"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CSVFileReader_1.CSVFileReader("data/football.csv");
reader.read();
console.log(reader.data[0]);
let manUnitedWins = 0;
for (let match of reader.data) {
    if ((match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) ||
        (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games!`);
