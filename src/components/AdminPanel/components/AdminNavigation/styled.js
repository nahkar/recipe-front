import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #06163a;
  width: 15%;
  height: 100vh;
`;
const BasicLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 23px;
  padding: 5px 0 5px 20px;
`;

const HomeLink = styled(Link)`
  font-size: 35px;
  text-decoration: none;
  color: #ffffff;
  padding: 5px 0 5px 20px;
`;

export default {
  Wrapper,
  BasicLink,
  HomeLink,
};
