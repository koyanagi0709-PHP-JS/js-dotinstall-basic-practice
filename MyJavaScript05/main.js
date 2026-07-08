"use strict";

{
  // true false
  //let mode = 'dev';
  //let mode = 'normal';
  //let isDevMode = true;
  //let isDevMode = false;

  let isDevMode = true;
  const pElement = document.querySelector("p");
  const buttonElement = document.querySelector("button");

  buttonElement.addEventListener("click", () => {
    if (isDevMode === true) {
      pElement.textContent = "Dev Mode is Off.";
      // isDevMode = false;
      // isDevMode = !isDevMode;
    } else {
      pElement.textContent = "Dev Mode is On.";
      // isDevMode = true;
      // isDevMode = !isDevMode;
    }
    isDevMode = !isDevMode;
  });
}
