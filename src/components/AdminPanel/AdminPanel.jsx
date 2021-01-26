import React from "react";

import AdminNavigation from "./components/AdminNavigation";
import AdminHeader from "./components/AdminHeader";

import AdminPage from "./styled";

const AdminPanel = () => { 

  return (
    <>
      <AdminHeader/>
      <AdminPage.Wrapper>
        <AdminNavigation />        
      </AdminPage.Wrapper>
    </>
   
  );
}

export default AdminPanel;
