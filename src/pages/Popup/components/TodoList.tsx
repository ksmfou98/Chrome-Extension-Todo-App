import React from 'react';
import styled from 'styled-components';
import { TodoType } from '../Popup';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  todos: TodoType[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {
  return (
    <TodoListBlock>
      <ul>
        {todos.map((todo, index) => (
          <TodoListItem
            key={index}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </TodoListBlock>
  );
};

const TodoListBlock = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
  ul {
    padding: 0;
  }
`;

export default TodoList;
