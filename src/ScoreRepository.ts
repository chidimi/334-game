import Score from "./types/Score";

export default interface ScoreRepository {
  save(score :Score) :void;
  read() :Score;
  update(score :Score) :void;
  delete(score :Score) :void;
}
