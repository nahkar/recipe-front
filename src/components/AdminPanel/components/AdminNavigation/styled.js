import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #06163a;
  min-width: 140px;
  min-height: 100vh;
  padding-right: 5px;
`;
const BasicLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 23px;
  padding: 5px 0px 5px 20px;
`;

const HomeLink = styled(Link)`
  font-size: 35px;
  text-decoration: none;
  color: #ffffff;
  padding: 5px 0 5px 20px;
`;

const AdminNav = {
  Wrapper,
  BasicLink,
  HomeLink,
};
export default AdminNav;
