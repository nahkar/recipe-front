import React from "react";
import { useRouteMatch } from 'react-router-dom';
import AdminNav from "./styled"
import routes from "../../constants/routes"
const AdminNavigation = () => {
  const { url } = useRouteMatch();
  return (

      <AdminNav.Wrapper>
        <AdminNav.HomeLink
          to="/admin">
          Admin
        </AdminNav.HomeLink>
        <AdminNav.BasicLink to={`${url}${routes.users}`}>
          Users
        </AdminNav.BasicLink>
        <AdminNav.BasicLink to={`${url}${routes.categories}`} >
          Recipes
        </AdminNav.BasicLink>
        <AdminNav.BasicLink to={`${url}${routes.recipes}`}>
          Categories
        </AdminNav.BasicLink>
      </AdminNav.Wrapper>
  );
}

export default AdminNavigation;