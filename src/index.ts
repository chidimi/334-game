import FileScoreRepository from "./FileScoreRepository"
import Game from "./Game"
import Score from "./types/Score"

const main = async () => {
  const game :Game = new Game(new FileScoreRepository())
  const score :Score = await game.play()
  game.saveScore(score)
}

main()
