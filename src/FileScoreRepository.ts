import { appendFile } from "fs";
import ScoreRepository from "./ScoreRepository";
import Score from "./types/Score";
import fs from 'fs/promises'

export default class FileScoreRepository implements ScoreRepository {
  readonly file_path = '334_score_file.txt'

  async save(score :Score): Promise<void> {
    try {
      const result = `player name : ${score.playerName}, result time : ${score.resultTime}, diff to 3.34: ${score.diff}\n`
      await fs.appendFile(this.file_path, result)
      console.log(`your result saved to ${this.file_path}`)
    } catch(error) {
      throw new Error('failed to save')
    }
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
