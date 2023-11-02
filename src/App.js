import logo from "./logo.svg";
import "./App.css";

const todos = [
  { title: "Do what thou wilt", id: 1, done: false },
  { title: "Know thyself through thy way", id: 2, done: false },
  { title: "Rejoice", id: 3, done: true },
];

export default function ToDoList() {
  const listItems = todos.map((todo) => (
    <li
      key={todo.id}
      style={{
        color: todo.done ? "magenta" : "darkgreen",
      }}
    >
      {todo.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
