import styled from "styled-components";

const CategoryWrapper = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  width: 100%;
  padding: 20px;
  background-color: rgb(226, 231, 236);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const CategoryTopInfo = styled.div`
  display: flex;
  background-color: rgb(85, 85, 85);
  color: #fff;
  padding: 15px;
  font-size: 18px;
  margin-bottom: 20px;
`;

const CategoryTopNumber = styled.div`
  flex-basis: 100px;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  text-align: center;
`;

const CategoryTopName = styled.div`
  flex-basis: 70%;
  border-right: 1px solid #fff;
  text-align: center;
  text-transform: uppercase;
`;

const CategoryTopAction = styled(CategoryTopName)`
  flex-basis: 20%;
`;

const CategoryList = styled.div`
  background-color: rgb(255, 250, 202);
  display: flex;
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
`;

const CategoryDataNumber = styled(CategoryTopNumber)`
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const CategoryDataName = styled(CategoryTopName)`
  border-right: 1px solid #000;
`;

const CategoryListStyled = {
  CategoryWrapper,
  CategoryTopInfo,
  CategoryTopNumber,
  CategoryTopName,
  CategoryTopAction,
  CategoryList,
  CategoryDataNumber,
  CategoryDataName,
};

export default CategoryListStyled;
