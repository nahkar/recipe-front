import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 18px;
  background-color: #fff;
  box-shadow: 0 -5px 10px rgba(119, 119, 119, 0.829);
`;

const Table = styled.table`
  border-spacing: 0px;
  padding: 10px;
  width: 100%;
`;

const Header = styled.tr`
  background-color: #cccccc;
`;

const List = styled.tr``;

const ColumnName = styled.th`
  padding: 10px;
  text-align: left;
`;

const Content = styled.td`
  text-align: left;
  padding-right: 10px;
  padding-left: 10px;
`;

const ContentNumber = styled(Content)`
  padding-left: 30px;
`;

const ContentName = styled.td`
  text-align: left;
  /* padding-left: 17px; */
`;

const UserName = styled.span`
  padding-left: 10px;
`;

const UserImg = styled.img`
  border-radius: 100%;
  align-self: center;
`;

const DeleteBtn = styled.button`
  float: right;
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

const EditBtn = styled.button`
  float: right;
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

const Body = styled.tbody``;

const UserStyled = {
  Wrapper,
  Table,
  ColumnName,
  Header,
  List,
  Content,
  ContentName,
  UserName,
  UserImg,
  DeleteBtn,
  EditBtn,
  Body,
  ContentNumber,
};

export default UserStyled;
