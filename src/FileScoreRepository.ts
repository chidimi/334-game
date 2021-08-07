import ScoreRepository from "./ScoreRepository";
import Score from "./types/Score";

export default class FileScoreRepository implements ScoreRepository {
  create(score :Score): void {
    throw new Error("Method not implemented.");
  }
  read(): Score {
    throw new Error("Method not implemented.");
  }
  update(score: Score): void {
    throw new Error("Method not implemented.");
  }
  delete(score: Score): void {
    throw new Error("Method not implemented.");
  }
}
