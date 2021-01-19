import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
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
const Content = styled.td``;
const ContentName = styled.td`
  display: flex;
`;

const UserName = styled.p`
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
`;

const Body = styled.tbody``;
export default {
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
  Body,
};
