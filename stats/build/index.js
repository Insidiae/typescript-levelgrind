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
// import { MatchReader } from "./v2-composition/MatchReader";
// import { CSVFileReader } from "./v2-composition/CSVFileReader";
// import { MatchResult } from "./MatchResult";
// const csvFileReader = new CSVFileReader("data/football.csv");
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// console.log(matchReader.matches[0]);
// let manUnitedWins = 0;
// for (let match of matchReader.matches) {
//   if (
//     (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
//     (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
//   ) {
//     manUnitedWins++;
//   }
// }
// console.log(`Man United won ${manUnitedWins} games!`);
//* Refactor 3: More Composition!
const MatchReader_1 = require("./v2-composition/MatchReader");
// import { CSVFileReader } from "./v2-composition/CSVFileReader";
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const AverageGoalsAnalysis_1 = require("./analyzers/AverageGoalsAnalysis");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const Summary_1 = require("./Summary");
const HTMLReport_1 = require("./reportTargets/HTMLReport");
// const csvFileReader = new CSVFileReader("data/football.csv");
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader_1.MatchReader.fromCSV("data/football.csv");
matchReader.load();
const team = "Man United";
const winsAnalyzer = new WinsAnalysis_1.WinsAnalysis(team);
const averageGoalsAnalyzer = new AverageGoalsAnalysis_1.AverageGoalsAnalysis(team);
const consoleReport = new ConsoleReport_1.ConsoleReport();
const winsSummary = new Summary_1.Summary(winsAnalyzer, consoleReport);
const goalsSummary = new Summary_1.Summary(averageGoalsAnalyzer, consoleReport);
winsSummary.buildAndPrintReport(matchReader.matches);
goalsSummary.buildAndPrintReport(matchReader.matches);
const goalsHTMLSummary = new Summary_1.Summary(averageGoalsAnalyzer, new HTMLReport_1.HTMLReport("report-goals.html"));
goalsHTMLSummary.buildAndPrintReport(matchReader.matches);
// Or you can make a shortcut for commonly used summaries:
const winsToHTMLSummary = Summary_1.Summary.WinsToHTMLSummary(team);
winsToHTMLSummary.buildAndPrintReport(matchReader.matches);
