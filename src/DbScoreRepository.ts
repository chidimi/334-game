import ScoreRepository from "./ScoreRepository";
import Score from "./types/ScoreType";

export default class DbScoreRepository implements ScoreRepository {
  save(score: Score): void {
    throw new Error("Method not implemented.");
  }
  read(): Promise<Score[]> {
    throw new Error("Method not implemented.");
  }
}
