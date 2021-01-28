import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 18px;
  background-color: #ccc;
`;

const Table = styled.table`
  border-spacing: 0px;
  padding: 10px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -5px 10px rgba(119, 119, 119, 0.829);
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
  padding-left: 30px;
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

const CategoryStyled = {
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
};

export default CategoryStyled;

// const CategoryWrapper = styled.div`
//   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
//   width: 100%;
//   padding: 20px;
//   background-color: rgb(226, 231, 236);
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

// const CategoryTopInfo = styled.div`
//   display: flex;
//   background-color: rgb(85, 85, 85);
//   color: #fff;
//   padding: 15px;
//   font-size: 18px;
//   margin-bottom: 20px;
// `;

// const CategoryTopNumber = styled.div`
//   flex-basis: 100px;
//   border-left: 1px solid #fff;
//   border-right: 1px solid #fff;
//   text-align: center;
// `;

// const CategoryTopName = styled.div`
//   flex-basis: 70%;
//   border-right: 1px solid #fff;
//   text-align: center;
//   text-transform: uppercase;
// `;

// const CategoryTopAction = styled(CategoryTopName)`
//   flex-basis: 20%;
// `;

// const CategoryList = styled.div`
//   background-color: rgb(255, 250, 202);
//   display: flex;
//   padding: 15px;
//   font-size: 18px;
//   margin-bottom: 10px;
// `;

// const CategoryDataNumber = styled(CategoryTopNumber)`
//   border-left: 1px solid #000;
//   border-right: 1px solid #000;
// `;

// const CategoryDataName = styled(CategoryTopName)`
//   border-right: 1px solid #000;
// `;

// const CategoryListStyled = {
//   CategoryWrapper,
//   CategoryTopInfo,
//   CategoryTopNumber,
//   CategoryTopName,
//   CategoryTopAction,
//   CategoryList,
//   CategoryDataNumber,
//   CategoryDataName,
// };
