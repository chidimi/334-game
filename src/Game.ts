import Cli from "./Cli";
import ScorePrinter from "./ScorePrinter";
import ScoreRepository from "./ScoreRepository";
import ScoreService from "./ScoreService";
import Score from "./types/ScoreType";

export default class Game {
  private static cli = new Cli()
  private static targetTime = 3.340
  private static scorePrinter = new ScorePrinter()
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
      this.scorePrinter.printScore(score)
      scoreService.saveScore(score)
    } catch(error) {
      console.log(error)
    }
  }
}
