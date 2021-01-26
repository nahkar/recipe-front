import React from "react";
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Users from '../Users';
import CategoryList from '../CategoryList';
import RecipeList from '../RecipeList';
import Dashboard from '../Dashboard';

import routes from '../../constants/routes';

import AdminNav from "./styled";

const AdminNavigation = () => {

  let { path, url } = useRouteMatch();
  
  return (
  <>
      <AdminNav.Wrapper>
        <AdminNav.HomeLink
          to={routes.admin}>
          Admin
        </AdminNav.HomeLink>
        <AdminNav.BasicLink to={`${url}${routes.users}`}>
          Users
        </AdminNav.BasicLink>
        <AdminNav.BasicLink to={`${url}${routes.recipes}}`} >
          Recipes
        </AdminNav.BasicLink>
        <AdminNav.BasicLink to={`${url}${routes.categories}`}>
          Categories
        </AdminNav.BasicLink>
        <AdminNav.BasicLink to={`${url}${routes.dashboard}`}>
          Dashboard
        </AdminNav.BasicLink>
      </AdminNav.Wrapper>

      <Switch>
        <Route path={`${path}${routes.dashboard}`}>
          <Dashboard />
        </Route>
        <Route path={`${path}${routes.users}`}>
          <Users />
        </Route>
        <Route path={`${path}${routes.categories}`}>
          <CategoryList/>
        </Route>
        <Route path={`${path}${routes.recipes}}`}>
          <RecipeList />
        </Route>
      </Switch>
  </>
  );
}

export default AdminNavigation;