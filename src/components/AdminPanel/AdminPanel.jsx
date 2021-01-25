import React from "react";


import AdminPage  from "./styled";
import AdminNavigation from "./components/AdminNavigation";
import Users from "./components/Users";
import AdminHeader from "./components/AdminHeader"
export default function AdminPanel() {
  
 

  

  return (
    <AdminPage.Wrapper>
      <AdminNavigation />
      <AdminPage.UserWrapper>
      <AdminHeader/>
      <Users/>
      </AdminPage.UserWrapper>
    </AdminPage.Wrapper>
  );
}
