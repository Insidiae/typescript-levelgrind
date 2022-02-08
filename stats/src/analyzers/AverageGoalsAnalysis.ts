import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";

export class AverageGoalsAnalysis implements Analyzer {
  run(matches: MatchData[]): string {
    let totalGoals = 0;
    let teamMatches = matches.filter(
      (match) => match[1] === this.team || match[2] === this.team
    );

    for (let match of teamMatches) {
      totalGoals += match[1] === this.team ? match[3] : match[4];
    }

    return `Team ${this.team} scored an average of ${
      totalGoals / teamMatches.length
    } goals!`;
  }

  constructor(public team: string) {}
}
