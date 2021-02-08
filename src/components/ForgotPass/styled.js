import styled from 'styled-components';
import img from '../../assets/img/forgot_bg.jpg';

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
  /* font-size: calc(10px + 3vmin); */
  font-family: 'Courier New', Courier, monospace;
`;

const Form = styled.form`
  width: 500px;
  box-sizing: border-box;
  text-align: left;
  background-color: rgba(255, 139, 104, 0.699);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: none;
  outline: none;
`;

const Title = styled.p`
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
  font-size: calc(10px + 2vmin);
  text-align: center;
  color: rgb(0, 70, 131);
  font-weight: bold;
`;

const Label = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  font-size: calc(3px + 2vmin);
  margin-bottom: 10px;
  text-align: center;
  color: #000;
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
  margin-bottom: 20px;
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

const LinkBlock = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled.span`
  display: inline-block;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 10px;
  &:hover {
    background-color: #fff;
    color: #911;
    /* text-decoration: underline; */
    transition: 0.5s;
    border-radius: 5px;
  }
`;

// const StyledLink = styled(Link)`
//   font-size: 20px;
// `;

const LoginStyled = {
  MainBg,
  Form,
  Input,
  Title,
  Label,
  BtnSubmit,
  Error,
  StyledLink,
  LinkBlock,
};

export default LoginStyled;
