import styled from "styled-components";
import img from "../../assets/img/login_bg.jpg";

const WrapperForRegistration = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Form = styled.form`
  width: 380px;
  box-sizing: border-box;
  text-align: left;
`;

const Title = styled.p`
  display: inline-block;
  width: 100%;
  margin-bottom: 40px;
  border-bottom: 1px solid grey;
  font-size: calc(18px + 2vmin);
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
`;

const WrapperForButton = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const Heading = styled.p`
  margin: 0;
  padding: 10px 0 0 0;
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid grey;
  font-family: "Courier New", Courier, monospace;
  color: white;
  font-size: calc(5px + 3vmin);
  margin-bottom: 10px;
`;

const Error = styled.div`
  margin: 0;
  padding: 0 0 0 0;
  color: red;
  font-size: 14px;
  margin-bottom: 5px;
  background-color: rgb(19, 29, 33);
  padding: 3px;
  opacity: 0.8;
  white-space: nowrap;
`;

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 380px;
  padding: 7px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: none;
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

export default {
  WrapperForRegistration,
  WrapperForButton,
  Heading,
  Error,
  Input,
  BtnSubmit,
  Form,
  Title,
};
