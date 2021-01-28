import React from "react";

import routes from '../../../../constants/routes';

import AdminNav from "./styled";

const AdminNavigation = () => {
  return (
  <>
      <AdminNav.Wrapper>
        <AdminNav.BasicLink to={routes.dashboard}>
          Dashboard
        </AdminNav.BasicLink>
        <AdminNav.BasicLink to={routes.users}>
          Users
        </AdminNav.BasicLink>
        <AdminNav.BasicLink to={routes.recipes} >
          Recipes
        </AdminNav.BasicLink>
        <AdminNav.BasicLink to={ routes.categories}>
          Categories
        </AdminNav.BasicLink>
      </AdminNav.Wrapper>
  </>
  );
}

export default AdminNavigation;