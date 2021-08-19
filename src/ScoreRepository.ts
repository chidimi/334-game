import Score from "./types/Score";

export default interface ScoreRepository {
  save(score :Score) :void;
  read() :Promise<Score[]>;
}
