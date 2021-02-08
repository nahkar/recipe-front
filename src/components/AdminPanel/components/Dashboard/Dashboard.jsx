import React from 'react';

import DashboardInfo from './components/DashboardInfo';
import DashboardHistory from './components/DashboardHistory';
// import UserList from './components/UserList/UserList';

import DashboardStyled from './styled';
import Users from "../Users"
const Dashboard = () => {
    return (
        <DashboardStyled.DashboardWrapper>
            <DashboardStyled.DashboardHeader>
                <DashboardStyled.DashboardTitle>Dashboard</DashboardStyled.DashboardTitle>
                <DashboardStyled.DashboardTitleText>Welcome to dashboard menu</DashboardStyled.DashboardTitleText>
                <DashboardStyled.HeaderLink to='/'></DashboardStyled.HeaderLink>
            </DashboardStyled.DashboardHeader>

            <DashboardInfo />
            <DashboardHistory /> 
            {/* <UserList/> */}
            <Users/>
            <DashboardStyled.GlobalStyle/>
        </DashboardStyled.DashboardWrapper>
    )
}

export default Dashboard;
