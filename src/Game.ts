import Cli from "./Cli";
import ScoreRepository from "./ScoreRepository";
import Score from "./types/Score";

export default class Game {
  private scoreRepository :ScoreRepository
  private cli = new Cli()
  private targetTime = 3.34

  constructor(scoreRepository :ScoreRepository) {
    this.scoreRepository = scoreRepository
  }

  public async play() :Promise<Score> {
    const playerName = await this.cli.init()
    await this.cli.start()
    const startTime = Date.now()
    await this.cli.end()
    const endTime = Date.now()
    return this.getScore(playerName, startTime, endTime, this.targetTime)
  }

  public saveScore(score :Score) :void {
    this.scoreRepository.create(score)
  }

  private getScore(playerName: string, startTime: number, endTime: number, targetTime: number) :Score {
    const resultTime :number = (endTime - startTime)
    return {
      playerName: playerName,
      targetTime: targetTime,
      resultTime: resultTime
    }
  }
}
