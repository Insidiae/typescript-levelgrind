//* Refactor 1: Using Generics
// import { MatchReader } from "./v1-inheritance/MatchReader";
// import { MatchResult } from "./MatchResult";

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
import { MatchReader } from "./v2-composition/MatchReader";
// import { CSVFileReader } from "./v2-composition/CSVFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { AverageGoalsAnalysis } from "./analyzers/AverageGoalsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";
import { HTMLReport } from "./reportTargets/HTMLReport";

// const csvFileReader = new CSVFileReader("data/football.csv");
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCSV("data/football.csv");
matchReader.load();

const team = "Man United";

const winsAnalyzer = new WinsAnalysis(team);
const averageGoalsAnalyzer = new AverageGoalsAnalysis(team);
const consoleReport = new ConsoleReport();

const winsSummary = new Summary(winsAnalyzer, consoleReport);
const goalsSummary = new Summary(averageGoalsAnalyzer, consoleReport);

winsSummary.buildAndPrintReport(matchReader.matches);
goalsSummary.buildAndPrintReport(matchReader.matches);

const goalsHTMLSummary = new Summary(
  averageGoalsAnalyzer,
  new HTMLReport("report-goals.html")
);

goalsHTMLSummary.buildAndPrintReport(matchReader.matches);

// Or you can make a shortcut for commonly used summaries:
const winsToHTMLSummary = Summary.WinsToHTMLSummary(team);
winsToHTMLSummary.buildAndPrintReport(matchReader.matches);
