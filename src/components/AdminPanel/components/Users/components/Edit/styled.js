import styled from "styled-components";

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.7);
  position: fixed;
`;
const ModalWrapper = styled.div`
  background-color: #ffffff;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ChangeName = styled.span`
  display: inline-block;
  padding: 10px;
  font-size: 20px;
`;
const ChangeRole = styled.select`
  width: 200px;
  margin-right: 10px;
`;
const Role = styled.option``;
const CloseBtn = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  padding: 5px 15px;
  margin: 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  :active {
    box-shadow: inset 0 0 3px #000000;
  }
`;
const ChangeBtn = styled.button`
  background-color: #24d133;
  color: #ffffff;
  border: none;
  padding: 5px 15px;
  margin: 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  :active {
    box-shadow: inset 0 0 3px #000000;
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Edit = {
  Overlay,
  ModalWrapper,
  ChangeName,
  ChangeRole,
  Role,
  CloseBtn,
  ChangeBtn,
  BtnWrapper,
};

export default Edit;
