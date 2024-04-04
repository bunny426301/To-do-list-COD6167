function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = taskInput.value;
      li.innerHTML += '<span class="delete"> &#10006;</span>';
      taskList.appendChild(li);
      taskInput.value = "";
  
      // Add event listener to newly created delete button
      li.querySelector(".delete").addEventListener("click", function() {
        li.remove();
      });
    } else {
      alert("Please enter a task.");
    }
  }
  