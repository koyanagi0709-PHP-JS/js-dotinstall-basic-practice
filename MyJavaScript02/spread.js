"use strict";

{
  const moreScores = [77, 88];
  const scores = [70, 90, 80, 85, ...moreScores];
  const [first, ...others] = scores;

  console.log(first);
  console.log(others);
}
