import styled from 'styled-components';
import img from '../../assets/img/login_bg.jpg';
import { Link } from 'react-router-dom';

const MainBg = styled.div`
  background-color: rgba(233, 167, 106, 0.685);
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Courier New', Courier, monospace;
`;

const Form = styled.form`
  width: 380px;
  box-sizing: border-box;
  text-align: left;
`;

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 7px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: none;
  outline: none;
`;

const Title = styled.p`
  display: inline-block;
  width: 100%;
  margin-bottom: 40px;
  border-bottom: 1px solid grey;
  font-size: calc(40px + 3vmin);
`;

const Label = styled.label`
  display: inline-block;
  font-size: calc(5px + 3vmin);
  margin-bottom: 10px;
`;

const BtnSubmit = styled.input`
  font-size: calc(2px + 2vmin);
  font-weight: bold;
  color: #fff;
  background-color: rgb(32, 197, 68);
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
`;

const Error = styled.p`
  color: rgb(250, 0, 0);
  font-size: 14px;
  padding: 0;
  margin-bottom: 5px;
  background-color: rgba(240, 247, 154, 0.767);
  padding: 3px;
  opacity: 0.8;
  white-space: nowrap;
  font-weight: bold;
`;

const LinkReg = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkForgot = styled(LinkReg)`
  border: 1px solid grey;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: red;
    transition: 2s;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default {
  MainBg,
  Form,
  Input,
  Title,
  Label,
  BtnSubmit,
  Error,
  LinkReg,
  LinkForgot,
  StyledLink,
};
