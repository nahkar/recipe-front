import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './../constants/routes';

import Users from '../Users/';
import CategoryList from './../CategoryList/CategoryList';
import RecipeList from './../RecipeList';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={routes.users} component={ Users}/>
                <Route path={routes.categories} component={ CategoryList }/>
                <Route path={routes.recipes} component={ RecipeList }/>
            </Switch>
        </Router>
    )
}

export default Routes;