import React from "react";
import AdminNavigation from "./components/AdminNavigation";
import AdminHeader from "./components/AdminHeader";
import AdminPage from "./styled";
import Content from "./components/content"
const AdminPanel = () => { 
  return (
    <>
      <AdminHeader/>
      <AdminPage.Wrapper>
        <AdminNavigation />
        <AdminPage.UserWrapper>
         <Content/>
        </AdminPage.UserWrapper> 
      </AdminPage.Wrapper>
    </>
   
  );
}

export default AdminPanel;
