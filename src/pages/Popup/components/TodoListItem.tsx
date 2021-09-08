import React from 'react';
import styled from 'styled-components';
import { TodoType } from '../Popup';

interface TodoListItemProps {
  todo: TodoType;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
  return (
    <TodoListItemBlock>
      <div className="content">{todo.text}</div>
      <div className="remote-btn">X</div>
    </TodoListItemBlock>
  );
};

const TodoListItemBlock = styled.li`
  display: flex;
  align-items: center;
`;

export default TodoListItem;
