"use strict";

{
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("p").textContent =
      document.querySelector("input").value;
  });
}
