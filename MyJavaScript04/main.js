"use strict";

{
  // 2023 6 10
  // new Date() - new Date(2023, 5, 10);
  // const diff = new Date().getTime() - new Date(2023, 5, 10).getTime();
  const diff = Date.now() - new Date(2023, 5, 10).getTime();
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  console.log(days);
}
