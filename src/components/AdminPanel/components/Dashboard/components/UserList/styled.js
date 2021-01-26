import styled from 'styled-components';

const UserWrapper = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  width: 100%;
  padding: 20px;
  background-color: rgb(226, 231, 236);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const UserTopInfo = styled.div`
  display: flex;
  background-color: rgb(85, 85, 85);
  color: #fff;
  padding: 15px;
  font-size: 18px;
  margin-bottom: 20px;
`;

const UserTopNumber = styled.div`
  flex-basis: 70px;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  text-align: center;
`;

const UserTopName = styled.div`
  flex-basis: 24%;
  border-right: 1px solid #fff;
  text-align: center;
  text-transform: uppercase;
  &:last-child {
    border-right: none;
  }
`;

const UserTopAction = styled(UserTopName)`
  flex-basis: 20%;
`;

const UserList = styled.div`
  background-color: rgb(255, 250, 202);
  display: flex;
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
`;

const UserDataNumber = styled(UserTopNumber)`
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const UserDataName = styled(UserTopName)`
  border-right: 1px solid #000;
  &:last-child {
    border-right: none;
  }
`;

const UserButtons = styled.button`
  border: none;
  outline: none;
  background-color: ${(props) => props.color}
  padding: 10px 30px;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  margin-right: 10px;
`;

const UserListStyled = {
  UserWrapper,
  UserTopInfo,
  UserTopNumber,
  UserTopName,
  UserTopAction,
  UserList,
  UserDataNumber,
  UserDataName,
  UserButtons,
};

export default UserListStyled;
