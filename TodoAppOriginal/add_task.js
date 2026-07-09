"use strict";

{
  const app = window.todoApp;

  const addTask = () => {
    const taskText = app.elements.taskInput.value.trim();
    if (!taskText) return;

    const task = {
      id: Date.now().toString(),
      text: taskText,
      priority: app.elements.taskSelect.value,
      createdAt: Date.now(),
      completed: false,
    };

    app.tasks.unshift(task);
    app.saveTasks();
    app.renderTasks();

    app.elements.taskInput.value = "";
    app.elements.taskInput.focus();
  };

  app.elements.taskButton.addEventListener("click", addTask);
  app.elements.taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addTask();
  });
}
