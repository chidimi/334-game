import DbScoreRepository from "./DbScoreRepository";
import FileScoreRepository from "./FileScoreRepository";
import ScoreRepository from "./ScoreRepository";
import Score from "./types/Score";


export default class ScoreService {
  private scoreRepository : ScoreRepository
  readonly repositoryMap = {
    'file' : new FileScoreRepository(),
    'db' :  new DbScoreRepository()
  }

  constructor(scoreRepository :string) {
    let repository : ScoreRepository | null | undefined;
    for (const [key, value] of Object.entries(this.repositoryMap)) {
      if (key === scoreRepository) repository = value
    }
    if (repository == null) throw new Error('repository not found')
    this.scoreRepository = repository
  }

  public calculateScore(playerName: string, startTime: number, endTime: number, targetTime: number) : Score {
    const resultTime :number = (endTime - startTime) / 1000
    const diff = resultTime - targetTime
    return {
      playerName: playerName,
      targetTime: targetTime,
      resultTime: resultTime,
      diff: diff
    }
  }

  public saveScore(score: Score) :void {
     this.scoreRepository.save(score)
  }
}
