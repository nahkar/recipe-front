import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #06163a;
`;
const Time = styled.span`
  color: #ffffff;
`;
const LogoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Email = styled.span`
  color: #ffffff;
  align-self: flex-end;
  padding-right: 5px;
`;

const LogoutBtn = styled.button`
  color: #000000;
  display: flex;
  flex-direction: row;
  background-color: #f8f9fa;
  transition: background-color 0.3s;
  border: none;
  outline: none;
  border-radius: 5px;
  :hover {
    background-color: #d7d7d7;
  }
  :active {
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
const LogOutBtnName = styled.span`
  align-self: center;
`;
const LogOutImg = styled.img``;
const AdminHeader = {
  Wrapper,
  Time,
  LogoutWrapper,
  Email,
  LogoutBtn,
  LogOutImg,
  LogOutBtnName,
};

export default AdminHeader;
