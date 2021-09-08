import React, { useState } from 'react';
import styled from 'styled-components';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

export interface TodoType {
  id: number;
  text: string;
  done: boolean;
}

const Popup = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onInsert = (text: string) => {
    const todo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = (id: number) => {
    console.log(id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const onRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <PopupBlock>
      <div className="title">오늘 할일</div>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </PopupBlock>
  );
};

const PopupBlock = styled.div`
  .title {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: #22b8cf;
    color: #fff;
    font-weight: 600;
  }
`;

export default Popup;
