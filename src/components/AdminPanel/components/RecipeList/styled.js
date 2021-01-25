import styled from 'styled-components';

const RecipeWrapper = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  width: 100%;
  padding: 20px;
  background-color: rgb(226, 231, 236);
  display: flex;
  flex-direction: column;
`;

const RecipeTopInfo = styled.div`
  display: flex;
  background-color: rgb(85, 85, 85);
  color: #fff;
  padding: 15px;
  font-size: 18px;
  margin-bottom: 20px;
`;

const RecipeTopNumber = styled.div`
  flex-basis: 100px;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  text-align: center;
`;

const RecipeTopName = styled.div`
  flex-basis: 70%;
  border-right: 1px solid #fff;
  text-align: center;
  text-transform: uppercase;
`;

const RecipeTopAction = styled(RecipeTopName)`
  flex-basis: 20%;
`;

const RecipeList = styled.div`
  background-color: rgb(255, 250, 202);
  display: flex;
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
`;

const RecipeDataNumber = styled(RecipeTopNumber)`
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const RecipeDataName = styled(RecipeTopName)`
  border-right: 1px solid #000;
`;

const RecipeListStyled = {
  RecipeWrapper,
  RecipeTopInfo,
  RecipeTopNumber,
  RecipeTopName,
  RecipeTopAction,
  RecipeList,
  RecipeDataNumber,
  RecipeDataName,
};

export default RecipeListStyled;
