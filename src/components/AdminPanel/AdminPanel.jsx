import React, { useState } from "react";


import AdminPage from "./styled";
import AdminNavigation from "./components/AdminNavigation";
import Users from "./components/Users";
import Edit from "./components/Users/components/Edit";
import AdminHeader from "./components/AdminHeader"
export default function AdminPanel() {
  
 

  const [show, setShow] = useState(false);

  return (
    <AdminPage.Wrapper>
      <AdminNavigation />
      <AdminPage.UserWrapper>
      <AdminHeader/>
      <Users setShow={setShow}/>
      {show === true && <Edit setShow={setShow} />}
      </AdminPage.UserWrapper>
      
    </AdminPage.Wrapper>
  );
}
