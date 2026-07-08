"use strict";

{
  document.addEventListener("mousemove", (e) => {
    document.querySelector("p").textContent = `X: ${e.clientX} Y: ${e.clientY}`;
  });
}
