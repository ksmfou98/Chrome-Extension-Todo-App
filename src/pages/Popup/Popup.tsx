import React from 'react';
import styled from 'styled-components';
import TodoInsert from './components/TodoInsert';

const Popup = () => {
  return (
    <PopupBlock>
      <div className="title">오늘 할일</div>
      <TodoInsert />
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
