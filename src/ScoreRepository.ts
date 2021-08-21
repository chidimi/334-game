import Score from "./types/ScoreType";

export default interface ScoreRepository {
  save(score :Score) :void;
  readScoreByName(playerName :string) :Promise<Score[]>;
}
