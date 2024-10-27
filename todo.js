const label = document.querySelector("label");
const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector(".colorMix1");
const div2 = document.querySelector(".colorMix2");
const reset = document.querySelector(".rese");
const ul = document.querySelector("ul");
ul.style.listStyleType = "none";
const p = document.querySelector("p");
const date = new Date();
p.textContent += date.toLocaleDateString();
const clearButton = document.createElement('button');
  const clearButtonContent = document.createTextNode("Reset");
  clearButton.append(clearButtonContent)
  clearButton.classList.add('reset')
  function resetButton(){
      if(ul.childElementCount > 0){
     return reset.append(clearButton)
      }
  }
 

const addTodo = (event) => {
  let todo = String(input.value);
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteTodo = document.createElement("button");
  deleteTodo.classList.add("delete");
  const editTodo = document.createElement("button");
  editTodo.classList.add("edit");
  const deleteTodoContent = document.createTextNode("Delete");
  const editTodoContent = document.createTextNode("Edit");
  const todoText = document.createTextNode(todo);

  const checkboxInpute = document.createElement("input");
  checkboxInpute.type = "checkbox";
  span.append(todoText);
  editTodo.append(editTodoContent);
  deleteTodo.append(deleteTodoContent);

  li.append(checkboxInpute, span, editTodo, deleteTodo);
  event.preventDefault();
  event.stopPropagation();
  if (todo.trim() === "") {
    alert("Invalid Input");
    input.focus();
  } else {
    ul.appendChild(li);
    input.value = "";
    input.focus();
  }

  deleteTodo.addEventListener("click", () => {
    let reply = confirm(
      `Are you sure you want to overide the ${span.textContent} task? `
    );
    if (reply == false) {
      return;
    } else {
      li.remove();
      input.focus();
      alert(`You have deleted the ${span.textContent} successfully`);
    }
  });
  editTodo.addEventListener("click", () => {
    if (input.value.length > 0) {
      alert("Eraze the input text");
      return;
    }
    label.textContent = "Please, kindly re-edit your task: ";
    input.value = span.textContent;
    input.focus();
    li.remove();
  });

  checkboxInpute.onchange = function () {
    if ((checkboxInpute.checked = true)) {
      editTodo.remove();

      li.style.color = "green";
      li.style.textDecoration = "line-through";
      alert("You have completed the task and it will be deleted in 4s");
      setInterval(() => {
        li.remove();
      }, 4000);
    }
  };
  resetButton()
 
};
// Clock
window.addEventListener("DOMContentLoaded", () => {
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");

  const hour = new Date().getHours() % 12;
  const minute = new Date().getMinutes();

  hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
});

 clearButton.addEventListener('click', () => {
      let answer = confirm(
          `Are you sure you want to reset the To-do task? `
        );
        if (answer == false) {
          return;
        } else {
          alert(`You have reset the To-do task successfully`)
          ul.innerHTML = '';
          input.focus()
          clearButton.remove()
        }
  })
button.addEventListener("click", addTodo);
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

// color combination
const randomColor = () => {
  const hexNumbering = "0123456789ABCDEF";
  let colorHash = "#";
  for (let i = 0; i < 6; i++) {
    colorHash += hexNumbering[Math.floor(Math.random() * 16)];
  }
  return colorHash;
};
setInterval(() => {
  div.style.backgroundColor = randomColor();
  div2.style.backgroundColor = randomColor();
}, 1000);
