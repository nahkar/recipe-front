import React from "react";
import AdminNavigation from "./components/AdminNavigation";
import AdminHeader from "./components/AdminHeader";
import AdminPage from "./styled";

const AdminPanel = ({ children }) => {
  return (
    <>
      <AdminHeader />
      <AdminPage.Wrapper>
        <AdminNavigation />
        {children}
      </AdminPage.Wrapper>
    </>
  );
};

export default AdminPanel;
