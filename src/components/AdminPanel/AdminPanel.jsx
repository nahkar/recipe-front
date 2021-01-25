import React from "react";
import { useDispatch } from 'react-redux';

import AdminNavigation from "./components/AdminNavigation";
import AdminHeader from "./components/AdminHeader";

import { userLogOut } from '../../store/user/actions';

import AdminPage from "./styled";

const AdminPanel = () => { 

    // const logOutHandler = () => {
    //     logout(localStorage.getItem('refresh_token'));
    // }

  return (
    <>
      <AdminHeader/>
      <AdminPage.Wrapper>
        <AdminNavigation />
        {/* <button onClick={logOutHandler}>LogOut</button> */}
        {/* <AdminPage.UserWrapper>
          <AdminHeader/>
        </AdminPage.UserWrapper> */}
        {/* <AdminHeader/> */}
      </AdminPage.Wrapper>
    </>
   
  );
}

export default AdminPanel;
