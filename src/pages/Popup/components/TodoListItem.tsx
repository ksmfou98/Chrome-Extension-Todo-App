import React from 'react';
import styled, { css } from 'styled-components';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { TodoType } from '../Popup';

interface TodoListItemProps {
  todo: TodoType;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoListItem = ({ todo, onRemove, onToggle }: TodoListItemProps) => {
  const { done, id, text } = todo;
  console.log(done);

  return (
    <TodoListItemBlock done={done}>
      <div className="checkbox" onClick={() => onToggle(id)}>
        {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <button className="remove-btn" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </button>
    </TodoListItemBlock>
  );
};

const TodoListItemBlock = styled.li<{ done: boolean }>`
  padding: 1rem;
  display: flex;
  align-items: center; //세로 중앙 정렬
  &:nth-child(even) {
    background: #f8f9fa;
  }

  .checkbox {
    cursor: pointer;
    flex: 1; // 차지할 수 있는 영역 모두 차지
    display: flex;
    align-items: center; // 세로 중앙 정렬
    svg {
      // 아이콘
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
      flex: 1;
    }

    // 체크되었을 때 보여줄 스타일
    ${({ done }) =>
      done &&
      css`
        svg {
          color: #22b8cf;
        }
        .text {
          color: #adb5bd;
          text-decoration: line-through;
        }
      `}
  }

  .remove-btn {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    background-color: #fff;
    border: none;
    &:hover {
      color: #ff8787;
    }
  }
`;

export default TodoListItem;
