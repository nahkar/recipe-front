import React from "react";
import AdminNavigation from "./components/AdminNavigation";
import AdminHeader from "./components/AdminHeader";
import AdminPage from "./styled";

import {  Switch, Route, useRouteMatch } from 'react-router-dom';
import Users from './components/Users';
import CategoryList from "./components/CategoryList";
import RecipeList from './components/RecipeList';
import routes from './constants/routes';
const AdminPanel = () => { 
  let { path } = useRouteMatch();
  return (
    <>
      <AdminHeader/>
      <AdminPage.Wrapper>
        <AdminNavigation />
        <AdminPage.UserWrapper>
        <Switch>
          <Route path={`${path}${routes.users}`}>
            <Users />
          </Route>
          <Route path={`${path}${routes.categories}`}>
            <CategoryList/>
          </Route>
          <Route exact path={`${path}${routes.recipes}`}>
            <RecipeList />
          </Route>
          </Switch>
        </AdminPage.UserWrapper> 
      </AdminPage.Wrapper>
    </>
   
  );
}

export default AdminPanel;
