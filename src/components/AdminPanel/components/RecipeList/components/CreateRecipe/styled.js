import styled from 'styled-components';

import dish from '../../img/serving-dish.png';

const CreateWrapper = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 100%;
    color: #000;
    background-color: #ccc;
    padding: 20px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    border: 1px solid grey;
    min-height: 70px;
    background-color: #fff;
    box-shadow: 0 -5px 10px rgba(119, 119, 119, 0.829);
    padding: 7px;
    display: flex;
    justify-content: center;
    font-size: 26px;
    position: relative;
    margin-bottom: 20px;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background-image: url(${dish});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50% 100%;
    }
`;

const MainPage = styled.div`
    min-height: 70px;
    display: flex;
    justify-content: space-between;
`;

const CategoryBlock = styled.div`
    background-color: #fff;
    flex-basis: 30%;
    min-height: 70px;
    padding: 10px;
    box-shadow: 0 -5px 10px rgba(119, 119, 119, 0.829);
`;

const CategoryTitle = styled.span`
    border-bottom: 1px solid grey;
    display: inline-block;
    margin-bottom: 15px;
`;

const RecipeBlock = styled.div`
    background-color: #fff;
    flex-basis: 65%;
    min-height: 70px;
    padding: 10px;
    box-shadow: 0 -5px 10px rgba(119, 119, 119, 0.829);
`;

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  text-align: left;
`;

const RecipeInput = styled.input`
    width: 100%;
    min-height: 30px;
    border: 1px solid red;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    margin-bottom: 15px;
    &:focus {
        box-shadow: 0 0 0 1px red;
    }
`;

const RecipeDescription = styled.textarea`
    width: 100%;
    resize: none;
    margin-bottom: 15px;
    &:focus {
        outline: 1px solid green;
    }
`;

const ChooseFile = styled.input`
    width: 100%;
    margin-bottom: 15px;
`;

const Label = styled.label`
  display: inline-block;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 10px;

`;

const Button = styled.input`
  font-weight: bold;
  color: #fff;
  background-color: rgb(255, 0, 0);
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  width: 100%;
  outline: none;
`;

const ListItem = styled.li`
    list-style: none;
    align-items: center;
`;

const Checkbox = styled.input`
    margin-right: 15px;
    width: 17px;
    height: 17px;
`;

const CreateStyled = {
    CreateWrapper,
    Header,
    MainPage,
    CategoryBlock,
    RecipeBlock,
    CategoryTitle,
    RecipeInput,
    Form,
    RecipeDescription,
    Label,
    ChooseFile,
    Button,
    ListItem,
    Checkbox,
}

export default CreateStyled;