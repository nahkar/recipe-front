import React from 'react';

import { Switch, Route } from 'react-router-dom';

import routes from '../constants/routes';

import PrivateRoute from './../components/PrivateRoute/Component';

import Users from './../components/AdminPanel/components/Users';
import CategoryList from './../components/AdminPanel/components/CategoryList/CategoryList';
import RecipeList from './../components/AdminPanel/components/RecipeList/RecipeList';
import Dashboard from './../components/AdminPanel/components/Dashboard/Dashboard';
import AdminPanel from './../components/AdminPanel';

const RoutesAdmin = () => {
    return (
        <Switch>
            <PrivateRoute exact path={routes.main} component={AdminPanel} />
            <Route exact path={routes.dashboard} component={ () => (
                <AdminPanel>
                    <Dashboard/>
                </AdminPanel>
            )}/>
            <Route exact path={routes.users} component={ () => (
                <AdminPanel>
                    <Users/>
                </AdminPanel>
            )}/>
            <Route path={routes.categories} component={() => (
                <AdminPanel>
                    <CategoryList/>
                </AdminPanel>
            )}/>
            <Route path={routes.recipes} component={() => (
                <AdminPanel>
                    <RecipeList/>
                </AdminPanel>
            )}/>
        </Switch>
    )
}

export default RoutesAdmin;


