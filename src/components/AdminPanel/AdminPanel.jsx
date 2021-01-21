import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { userLogOut } from '../../store/user/actions';

import AdminPage from "./styled"
import AdminNavigation from "./AdminNavigation";
import Users from "./Users";
import Edit from "./Users/Edit"

export default function AdminPanel({history}) {
  
  const dispatch = useDispatch();

  const logout = (refreshToken) => dispatch(userLogOut({ refreshToken, history }));

    const logOutHandler = () => {
        logout(localStorage.getItem('refresh_token'));
    }

  const [show, setShow] = useState(false);

  return (
    <AdminPage.Wrapper>
      <AdminNavigation />
      <Users setShow={setShow}/>
      {show === true && <Edit setShow={setShow} />}
      <button onClick={logOutHandler}>LogOut</button>
    </AdminPage.Wrapper>
  );
}
