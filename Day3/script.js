document.addEventListener("DOMContentLoaded", () => {
  const newTaskInput = document.getElementById("new-task");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task.text;
      if (task.completed) {
        li.classList.add("completed");
      }
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => deleteTask(index);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  }

  addTaskButton.addEventListener("click", () => {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
      tasks.push({ text: taskText, completed: false });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      newTaskInput.value = "";
      renderTasks();
    }
  });

  function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }

  taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const index = Array.from(taskList.children).indexOf(e.target);
      tasks[index].completed = !tasks[index].completed;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    }
  });

  renderTasks();
});
