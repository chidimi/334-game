import ScoreRepository from "./ScoreRepository";
import Score from "./types/ScoreType";

export default class DbScoreRepository implements ScoreRepository {
  save(score: Score): void {
    throw new Error("Method not implemented.");
  }
  readScoreByName(playerName : string): Promise<Score[]> {
    throw new Error("Method not implemented.");
  }
}
