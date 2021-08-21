import Score from "./types/ScoreType"

export default class ScorePrinter {
  public printScore(score: Score) :void {
    const output = `player name : ${score.playerName}, result time : ${score.resultTime}, diff to 3.34: ${score.diff}`
    console.log(output)
  }
}
