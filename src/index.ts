import Game from "./Game"

const main = async () => {
  const game = await Game.init()
  if (game.purpose === 'play') {
    game.play()
  } else {
    game.viewScore()
  }
}

main()
