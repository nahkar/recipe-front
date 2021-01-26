import styled from 'styled-components';

const HistoryWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 12px;
  box-shadow: 0 -5px 10px rgba(119, 119, 119, 0.829);
`;

const HistoryTitle = styled.p`
  font-size: 22px;
  margin-bottom: 15px;
`;

const HistoryBlock = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: start;
`;

const BlockDayPicker = styled.div`
  margin-right: 15px;
`;

const BlockStatus = styled.div`
  border: 1px solid grey;
  margin-right: 15px;
  vertical-align: middle;
  padding: 10px 30px;
  background-color: rgb(252, 59, 59);
  color: #fff;
  font-size: 18px;
`;

const BlockButton = styled.button`
  padding: 10px 30px;
  background-color: rgb(65, 252, 59);
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 1.5s;
  }
`;

const HistoryStyled = {
  HistoryWrapper,
  HistoryTitle,
  HistoryBlock,
  BlockDayPicker,
  BlockStatus,
  BlockButton,
};

export default HistoryStyled;
