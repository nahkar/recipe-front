import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

import homeImg from './img/home.png';

const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    };

    h2, p {
        margin: 0;
        padding: 0;
    };
`;

const DashboardWrapper = styled.div`
  background-color: rgb(221, 221, 221);
  min-height: 100vh;
  width: 100%;
  padding: 20px;
`;

const DashboardHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const DashboardTitle = styled.h2`
  font-size: 24px;
  margin-right: 10px;
`;

const DashboardTitleText = styled.p`
  font-size: 16px;
  margin-top: 6px;
  opacity: 0.7;
`;

const HeaderLink = styled(Link)`
  display: inline-block;
  position: relative;
  margin-left: auto;
  background-image: url(${homeImg});
  width: 5%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const DashboardStyled = {
  GlobalStyle,
  DashboardWrapper,
  DashboardHeader,
  DashboardTitle,
  DashboardTitleText,
  HeaderLink,
};

export default DashboardStyled;
