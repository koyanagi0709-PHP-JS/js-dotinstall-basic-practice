"use strict";

{
  const moreScores = {
    shiro: 77,
    goro: 88,
  };
  const scores = {
    taro: 80,
    jiro: 70,
    saburo: 90,
    ...moreScores,
  };
  // const { taro, jiro, saburo } = scores;
  const { taro, ...others } = scores;

  console.log(taro);
  // console.log(jiro);
  // console.log(saburo);
  console.log(others);
}
