import React from 'react'
import {  Route } from 'react-router-dom';
import Users from '../Users';
import CategoryList from '../CategoryList';
import RecipeList from '../RecipeList';
import routes from '../../constants/routes';
export default function Content() {
    return (
        <div>
            <Route path={routes.users}>
            <Users />
          </Route>
          <Route path={routes.categories}>
            <CategoryList/>
          </Route>
          <Route exact path={routes.recipes}>
            <RecipeList />
          </Route>
        </div>
    )
}
