import React from "react";
import AdminNav from "./styled"

const AdminNavigation = () => {

  return (
  
      <AdminNav.Wrapper>
        <AdminNav.HomeLink
          to="/">
          Admin
        </AdminNav.HomeLink>
        <AdminNav.BasicLink to="/users">
          Users
        </AdminNav.BasicLink>
        <AdminNav.BasicLink to="/recipes" >
          Recipes
        </AdminNav.BasicLink>
        <AdminNav.BasicLink to="/categories">
          Categories
        </AdminNav.BasicLink>
      </AdminNav.Wrapper>

      
  );
}

export default AdminNavigation;