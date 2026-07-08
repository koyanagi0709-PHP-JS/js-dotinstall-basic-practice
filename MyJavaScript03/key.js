"use strict";

{
  document.addEventListener("keydown", (e) => {
    document.querySelector("p").textContent = e.key;
  });
}
