"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AverageGoalsAnalysis = void 0;
class AverageGoalsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let totalGoals = 0;
        let teamMatches = matches.filter((match) => match[1] === this.team || match[2] === this.team);
        for (let match of teamMatches) {
            totalGoals += match[1] === this.team ? match[3] : match[4];
        }
        return `Team ${this.team} scored an average of ${totalGoals / teamMatches.length} goals!`;
    }
}
exports.AverageGoalsAnalysis = AverageGoalsAnalysis;
