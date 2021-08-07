import Score from "./types/Score";

export default interface ScoreRepository {
  create(score :Score) :void;
  read() :Score;
  update(score :Score) :void;
  delete(score :Score) :void;
}
