import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (
        (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.team && match[5] === MatchResult.AwayWin)
      ) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games!`;
  }

  constructor(public team: string) {}
}
