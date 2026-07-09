"use strict";

{
  const taskBody = document.querySelector("#task-body");

  taskBody.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("button.task-button"); // クリックされた一番近い button.task-buttonを探す
    if (!deleteButton) return;

    const taskArticle = deleteButton.closest("article"); // 一番近いarticle要素を返す
    if (taskArticle) {
      taskArticle.classList.add("slide-out");

      taskArticle.addEventListener("animationend", () => {
        taskArticle.remove();
      });
    }
  });
}
