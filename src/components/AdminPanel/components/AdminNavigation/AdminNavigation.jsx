import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Users from '../Users';
import CategoryList from '../CategoryList';
import RecipeList from '../RecipeList';

import routes from '../../constants/routes';

import AdminNav from "./styled"

const AdminNavigation = () => {

  return (
    <Router>
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

      <Switch>
          <Route path={routes.users}>
            <Users />
          </Route>
          <Route path={routes.categories}>
            <CategoryList/>
          </Route>
          <Route exact path={routes.recipes}>
            <RecipeList />
          </Route>
      </Switch>
    </Router>
  );
}

export default AdminNavigation;
