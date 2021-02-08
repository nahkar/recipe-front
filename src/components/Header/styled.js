import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 50px 0 50px;
`;
const LogoAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img``;
const BtnWrapper = styled.div``;

const BtnRegistration = styled.button`
  background-color: #ffffff;
  padding: 10px 15px 10px 15px;
  border-radius: 20px;
  outline: none;
  border: 1px solid rgba(128, 128, 128, 0.657);
  transition: border-color 0.3s;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: "Open Sans", arial, sans-serif;
  color: #4c4c4c;
  margin: 0 5px;
  text-transform: uppercase;

  &:hover {
    border: 1px solid rgb(0, 0, 0);
  }
`;
const BtnLogin = styled.button`
  background-color: #008000;
  padding: 10px 15px 10px 15px;
  border-radius: 20px;
  outline: none;
  border: 1px solid rgba(128, 128, 128, 0.657);
  transition: border-color 0.3s;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: "Open Sans", arial, sans-serif;
  color: #ffffff;
  margin: 0 5px;
  text-transform: uppercase;

  &:hover {
    border: 1px solid rgb(0, 0, 0);
  }
`;

const Hr = styled.hr`
  border: 0.1px solid rgba(128, 128, 128, 0.602);
`;
const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const BasicLink = styled(Link)`
  text-decoration: none;
  color: #4d4d4d;
  text-transform: uppercase;
`;
const RecipesLink = styled(Link)`
  text-decoration: none;
  color: rgb(255, 57, 30);
  text-transform: uppercase;
`;

const Header = {
  Wrapper,
  LogoAndBtn,
  Logo,
  BtnWrapper,
  BtnLogin,
  BtnRegistration,
  Hr,
  Navigation,
  RecipesLink,
  BasicLink,
};
export default Header;
