import { expect } from "chai";
import FileScoreRepository from "../FileScoreRepository";
import Game from "../Game";

describe('simplest test:', () => {
  it('1 + 1 should be 2', () => {
    const game :Game = new Game(new FileScoreRepository())
    expect(1 + 1).to.equal(2);
  });
});
