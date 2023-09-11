"use strict";
// TypeScript's Non-Null Assertion Operator
// by using "!" at the end we tell TS we know that value exists 100%, so it's not null
// Type Assertions
// You can assert a value's type by using the "as" keyword,
// followed by the specific type you want to assert.
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    const newTodoText = input.value;
    const newLI = document.createElement("LI");
    newLI.append(newTodoText);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
// Another way of asserting DOM type syntax, doesn't work with JSX (React), avoid
// (<HTMLInputElement>input).value
// btn.addEventListener("click", () => {
//     input.value
// })
