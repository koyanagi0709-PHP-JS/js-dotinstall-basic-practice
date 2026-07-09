"use strict";

{
  const app = window.todoApp;

  app.elements.taskBody.addEventListener("change", (event) => {
    if (!event.target.matches("input.task-check")) return;

    const article = event.target.closest("article");
    if (!article) return;

    const task = app.tasks.find((item) => item.id === article.dataset.id);
    if (!task) return;

    task.completed = event.target.checked;
    app.saveTasks();
    app.renderTasks();
  });
}
