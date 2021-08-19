import Cli from "./Cli";
import ScoreRepository from "./ScoreRepository";
import ScoreService from "./ScoreService";
import Score from "./types/Score";

export default class Game {
  private static cli = new Cli()
  private static targetTime = 3.340
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static async play() :Promise<void> {
    try {
      const playerName = await this.cli.askPlayerName()
      const repository = await this.cli.askRepository()
      const scoreService = new ScoreService(repository)

      await this.cli.start()
      const startTime = Date.now()
      await this.cli.end()
      const endTime = Date.now()

      const score = scoreService.calculateScore(playerName, startTime, endTime, this.targetTime)
      this.printScore(score)
      scoreService.saveScore(score)
    } catch(error) {
      console.log(error)
    }
  }


  private static printScore(score: Score) {
    const output = `player name : ${score.playerName}, result time : ${score.resultTime}, diff to 3.34: ${score.diff}`
    console.log(output)
  }
}
