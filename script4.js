document.addEventListener("DOMContentLoaded", function() {
  // Array to store tasks
  let tasks = [];

  // Get elements
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  window.addTask = function() {
      const taskText = taskInput.value.trim();

      if (taskText !== "") {
          const taskItem = document.createElement("li");
          taskItem.innerHTML = `
              <span>${taskText}</span>
              <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
          `;

          tasks.push(taskText);
          taskList.appendChild(taskItem);
          taskInput.value = "";
      }
  };

  // Function to delete a task
  window.deleteTask = function(button) {
      const taskItem = button.parentElement;
      const taskText = taskItem.querySelector("span").innerText;

      const index = tasks.indexOf(taskText);
      if (index !== -1) {
          tasks.splice(index, 1);
      }

      taskItem.remove();
  };
});
