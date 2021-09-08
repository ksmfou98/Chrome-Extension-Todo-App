import React from 'react';
import styled from 'styled-components';
import { TodoType } from '../Popup';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  todos: TodoType[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <TodoListBlock>
      <ul>
        {todos.map((todo, index) => (
          <TodoListItem key={index} todo={todo} />
        ))}
      </ul>
    </TodoListBlock>
  );
};

const TodoListBlock = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

export default TodoList;
