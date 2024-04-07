import React, { useState, useEffect } from "react";
import "./App.css";

const Todolist = () => {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTodos = (newTodoContent) => {
    if (newTodoContent.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        content: newTodoContent,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodos(inputValue);
      setInputValue(""); // 입력값 초기화
    }
  };

  const completeTodos = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: true } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodos = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div class="page-container">
      <h1>UMC Study Plan</h1>
      <hr />

      {/* Todos 추가하는 input */}
      <input
        type="text"
        placeholder="UMC 스터디 계획을 작성해보세요!"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyPress={handleKeyPress}
      />

      {/* 해야 할 일 리스트 */}
      <div class="list-container">
        <div class="list-wrapper">
          <h2>해야 할 일</h2>
          {todos.map(
            (data) =>
              !data.isDone && (
                <div key={data.id} class="list">
                  <div>{data.content}</div>
                  <div>
                    <button onClick={() => completeTodos(data.id)}>완료</button>
                  </div>
                </div>
              )
          )}
        </div>
        {/* 해낸 일 리스트 */}
        <div class="list-wrapper">
          <h2>해낸 일</h2>
          {todos.map(
            (data) =>
              data.isDone && (
                <div key={data.id} class="list">
                  <div>{data.content}</div>
                  <div>
                    <button onClick={() => deleteTodos(data.id)}>삭제</button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
