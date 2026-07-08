"use strict";

{
  document.querySelector("input").addEventListener("input", () => {
    const pElement = document.querySelector("p");
    const inputElement = document.querySelector("input");
    // pElement.textContent = inputElement.value;
    pElement.textContent = inputElement.value.length;
  });
}

// input イベントは input,textarea,select
// change イベントは、checkbox,radio
