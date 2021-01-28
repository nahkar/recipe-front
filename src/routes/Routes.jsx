import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';

import Main from './../components/Main/index';
import Login from '../components/Login';
import Registration from "../components/Registration/index";
import AdminPanel from "../components/AdminPanel";
import NotFound from '../components/NotFound';
import ForgotPass from './../components/ForgotPass';

import Users from './../components/AdminPanel/components/Users/index';
import RecipeList from './../components/AdminPanel/components/RecipeList/RecipeList';
import CategoryList from './../components/AdminPanel/components/CategoryList/CategoryList';
import Dashboard from './../components/AdminPanel/components/Dashboard/Dashboard';


import routes from '../constants/routes';

const Routes = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path={routes.dashboard} component={AdminPanel} />
                <PublicRoute path={routes.registration} component={ Registration }/>
                <PublicRoute exact path={routes.login} component={Login} />
                <PublicRoute path={routes.forgotPass} component={ForgotPass} />

                <Route exact path="/" component={ Main }/>
                
                <Route exact path={routes.users} component={ Users }/>
                <Route path={routes.categories} component={ CategoryList }/>
                <Route path={routes.recipes} component={ RecipeList }/>
                <Route path={routes.notFound} component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
