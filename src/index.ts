import FileScoreRepository from "./FileScoreRepository"
import Game from "./Game"
import Score from "./types/ScoreType"

const main = async () => {
  try {
    const game = await Game.init()
    if (game.purpose === 'play') {
      game.play()
    } else {
      game.viewScore()
    }
  } catch(err) {
    console.log(err)
  }
}

main()
