import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  font-size: 18px;
  background-color: #ccc;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Table = styled.table`
  align-self: center;
  width: 100%;
  border-spacing: 0px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 -5px 10px rgba(119, 119, 119, 0.829);
`;

const Header = styled.tr`
  background-color: #cccccc;
  border-spacing: 0 20px;
`;

const List = styled.tr``;

const ColumnName = styled.th`
  padding: 10px;
  padding-left: 30px;
  text-align: left;
  width: 25%;
  &:first-child {
    width: 5%;
  }
  &:last-child {
    text-align: center;
  }
`;

const Content = styled.td`
  text-align: left;
  padding-left: 30px;
  &:last-child {
    text-align: center;
  }
`;

const ContentName = styled.td`
  text-align: left;
  padding-left: 17px;
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

const RecipeStyled = {
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
  ButtonWrapper,
};

export default RecipeStyled;

