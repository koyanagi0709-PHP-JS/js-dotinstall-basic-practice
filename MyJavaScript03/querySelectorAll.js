"use strict";

{
  document.querySelector("button").addEventListener("click", () => {
    // document.querySelector("li").textContent = "Changed!"; //最初の要素のみ
    // document.querySelectorAll("li")[0].textContent = "Changed!";
    // document.querySelectorAll("li")[1].textContent = "Changed!";
    // document.querySelectorAll("li")[2].textContent = "Changed!";

    document.querySelectorAll("li").forEach((li) => {
      li.textContent = "Changed!";
    });
  });
}
