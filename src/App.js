import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  // state to react to user input and state for todo's
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); //array of objects
  // below state used to filter between complete and uncomplete status
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // if you want to use state in other components, pass it down from the parent component - one way data flow
  // let's use useEffect to run a function everytime a piece of state changes

  // USE EFFECT
  useEffect(() => {
    // console.log("hey"); //running a function as first argument
    filterHandler();
  }, [todos, status]); //empty array makes the function run only once when component is first rendered. If you want to run function many times, add an argument

  // Functions
  const filterHandler = () => {
    switch (
      status //status is from completed/ uncompleted filter
    ) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Russell's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
