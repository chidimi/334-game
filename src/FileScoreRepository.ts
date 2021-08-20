import { appendFile } from "fs";
import ScoreRepository from "./ScoreRepository";
import Score from "./types/ScoreType";
import fs from 'fs/promises'

export default class FileScoreRepository implements ScoreRepository {
  readonly file_path = '334_score_file.json'

  async save(score :Score): Promise<void> {
    try {
      const newScoreJson = JSON.stringify(score)
      const jsonData = await (await fs.readFile(this.file_path)).toString()
      if (jsonData === '') {
        const json = {
          results: [
            newScoreJson
          ]
        }
        fs.writeFile(this.file_path, JSON.stringify(json))
      } else {
        const currentData = JSON.parse(jsonData)
        currentData.results.push(newScoreJson)
        fs.writeFile(this.file_path, JSON.stringify(currentData))
      }
    } catch(error) {
      throw new Error('failed to save')
    }
  }

  async read(): Promise<Score[]> {
    try {
      const jsonData = await (await fs.readFile(this.file_path)).toString()
      if (jsonData === '') {
        throw new Error('no data found!')
      }
      const currentData = JSON.parse(jsonData)
      return currentData.results
    } catch(error) {
      throw new Error('failed to load file')
    }
  }
}
