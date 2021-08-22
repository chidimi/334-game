import Cli from "./Cli";
import ScorePrinter from "./ScorePrinter";
import ScoreService from "./ScoreService";

export default class Game {
  public purpose : string

  private cli = new Cli()
  private targetTime = 3.340
  private scorePrinter = new ScorePrinter()
  private playerName : string
  private scoreService

  private constructor(purpose : string, playerName : string ,repository : string) {
    this.purpose = purpose
    this.playerName = playerName
    this.scoreService = new ScoreService(repository)
  }

  public static async init() :Promise<Game> {
    const cli = new Cli()
    const purpose = await cli.askPurpose()
    const playerName = await cli.askPlayerName()
    const repository = await cli.askRepository()
    return new Game(purpose, playerName, repository)
  }

  public async play() : Promise<void> {
    await this.cli.start()
    const startTime = Date.now()
    await this.cli.end()
    const endTime = Date.now()

    const score = this.scoreService.calculateScore(this.playerName, startTime, endTime, this.targetTime)
    this.scorePrinter.printScore(score)
    this.scoreService.saveScore(score)
  }

  public async viewScore() : Promise<void> {
    try {
      const scores = await this.scoreService.showScore(this.playerName)
      scores.forEach(score => {
        this.scorePrinter.printScore(score)
      })
    } catch(err) {
      console.error(err.message)
    }
  }
}

