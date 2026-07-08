"use strict";

{
  const names = ["Taro", "Jiro", "Saburo"];

  // Taro|Jiro|Saburo
  console.log(names.join("|"));
  console.log(names.join()); // カンマ区切り
  console.log(names.join(""));

  const names2 = "Taro | Jiro | Saburo";
  console.log(names2.split("|"));
}
