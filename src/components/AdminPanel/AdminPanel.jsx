import React from "react";
import { useDispatch } from 'react-redux';

import { userLogOut } from '../../store/user/actions';
import AdminNavigation from "./components/AdminNavigation";

import AdminPage from "./styled";

export default function AdminPanel({history}) {
  
  const dispatch = useDispatch();

  const logout = (refreshToken) => dispatch(userLogOut({ refreshToken, history }));

    const logOutHandler = () => {
        logout(localStorage.getItem('refresh_token'));
    }

  return (
    <AdminPage.Wrapper>
      <AdminNavigation />
      {/* <button onClick={logOutHandler}>LogOut</button> */}
    </AdminPage.Wrapper>
  );
}
