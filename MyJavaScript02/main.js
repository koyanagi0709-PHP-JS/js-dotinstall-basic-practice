"use strict";

{
  const scores = [70, 90, 80, 85];
  let sum = 0;
  scores.forEach((score, index) => {
    // console.log(score);
    sum += score;
    console.log(`${index}: ${score}`);
  });

  console.log(`Sum: ${sum}`);
  console.log(`Average: ${sum / scores.length}`);
}
