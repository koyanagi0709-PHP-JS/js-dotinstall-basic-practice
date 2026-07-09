"use strict";

{
  const app = window.todoApp;

  app.elements.taskBody.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("button.task-button");
    if (!deleteButton) return;

    const article = deleteButton.closest("article");
    if (!article) return;

    article.classList.add("slide-out");

    article.addEventListener("animationend", () => {
      app.tasks = app.tasks.filter((task) => task.id !== article.dataset.id);
      app.saveTasks();
      app.renderTasks();
    }, { once: true });
  });

  app.elements.deleteDoneButton.addEventListener("click", () => {
    const checkedTasks = app.elements.taskBody.querySelectorAll(
      "input.task-check:checked",
    );

    checkedTasks.forEach((checkbox) => {
      const article = checkbox.closest("article");
      if (!article) return;

      article.classList.add("fade-shrink");

      article.addEventListener("animationend", () => {
        app.tasks = app.tasks.filter((task) => task.id !== article.dataset.id);
        if (app.elements.taskBody.contains(article)) {
          article.remove();
        }
        app.saveTasks();
        app.renderTasks();
      }, { once: true });
    });
  });
}
