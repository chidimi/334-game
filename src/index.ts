import FileScoreRepository from "./FileScoreRepository"
import Game from "./Game"

const game :Game = new Game(new FileScoreRepository())
game.play()
