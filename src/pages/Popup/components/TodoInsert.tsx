import React, { useState } from 'react';
import styled from 'styled-components';

interface TodoInsertProps {
  onInsert: (text: string) => void;
}

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [text, setText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <TodoInsertBlock>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={() => {
          onInsert(text);
          setText('');
        }}
      >
        +
      </button>
    </TodoInsertBlock>
  );
};

const TodoInsertBlock = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  input {
    flex: 1;
    outline: none;
    border: none;
    background-color: #495057;
    color: #fff;
    padding: 0.5rem;
    &::placeholder {
      color: #fff;
    }
  }
  button {
    padding: 10px 20px;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default TodoInsert;
