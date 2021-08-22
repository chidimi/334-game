import ScoreRepository from "./ScoreRepository";
import Score from "./types/ScoreType";
import fs from 'fs/promises'

export default class FileScoreRepository implements ScoreRepository {
  readonly file_path = '334_score_file.json'

  async save(score :Score): Promise<void> {
    if (!this.isFileExists(this.file_path)) {
      fs.mkdir(this.file_path)
    }
    const jsonData = await (await fs.readFile(this.file_path)).toString()
    if (jsonData === '') {
      const json = {
        results: [
          score
        ]
      }
      fs.appendFile(this.file_path, JSON.stringify(json))
    } else {
      const currentData = JSON.parse(jsonData)
      currentData.results.push(score)
      fs.writeFile(this.file_path, JSON.stringify(currentData))
    }
  }

  async readScoreByName(playerName : string): Promise<Score[]> {
    const jsonData = await (await fs.readFile(this.file_path)).toString()
    if (jsonData === '') {
      console.error('no data found!')
    }
    const currentData = JSON.parse(jsonData)
    const playerScore = currentData.results.filter((score : Score) => {
      return score.playerName === playerName
    })
    return playerScore
  }

  private async isFileExists(filepath : string) : Promise<boolean> {
    try {
      return !!(await fs.lstat(filepath))
    } catch (e) {
      return false
    }
  }
}
