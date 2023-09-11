// TypeScript's Non-Null Assertion Operator
// by using "!" at the end we tell TS we know that value exists 100%, so it's not null

// Type Assertions
// You can assert a value's type by using the "as" keyword,
// followed by the specific type you want to assert.

interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo {
  const todoJSON = localStorage.getItem("todos");
  if (todoJSON === null) return [];
  return JSON.parse(todoJSON);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  saveTodos();
  input.value = "";
}

function createTodo(todo: Todo) {
  const newTodoText = input.value;
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });

  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
}

form.addEventListener("submit", handleSubmit);

// Another way of asserting DOM type syntax, doesn't work with JSX (React), avoid
// (<HTMLInputElement>input).value

// btn.addEventListener("click", () => {
//     input.value
// })
