import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from '../components/NotFound';
import ForgotPass from './../components/ForgotPass';

import PublicRoute from './../components/PublicRoute';
import PrivateRoute from './../components/PrivateRoute/Component';

import Main from './../components/Main/Component';
import Registration from './../components/Registration';
import Login from './../components/Login/index';
import Users from './../components/AdminPanel/components/Users';
import CategoryList from './../components/AdminPanel/components/CategoryList/CategoryList';
import RecipeList from './../components/AdminPanel/components/RecipeList/RecipeList';
import Dashboard from './../components/AdminPanel/components/Dashboard/Dashboard';
import AdminPanel from './../components/AdminPanel';
import EditCreateCategory from "../components/AdminPanel/components/EditCreateCategory"
import routes from '../constants/routes';

const Routes = () => {

    return (
        <BrowserRouter>
            
            <Switch>
                <Route exact path={routes.webHome} component={ Main } />

                <PublicRoute path={routes.registration} component={ Registration }/>
                <PublicRoute exact path={routes.login} component={ Login } />
                
                <PrivateRoute exact path={routes.main} component={ AdminPanel } />

                <PrivateRoute exact path={routes.dashboard} component={ () => (
                    <AdminPanel>
                        <Dashboard/>
                    </AdminPanel>
                )} />
                
                <PrivateRoute exact path={routes.users} component={ () => (
                    <AdminPanel>
                        <Users/>
                    </AdminPanel>
                )} />
                
                <PrivateRoute exact path={routes.categories} component={({history}) => (
                    <AdminPanel>
                        <CategoryList history={ history}/>
                    </AdminPanel>
                )} />

                   <PrivateRoute path={routes.categoriesCreate} component={({history}) => (
                    <AdminPanel>
                        <EditCreateCategory history={ history}/>
                    </AdminPanel>
                )} />
                
                <PrivateRoute path={routes.categoriesEdit} component={(props) => (
                    <AdminPanel>
                        <EditCreateCategory {...props}/>
                    </AdminPanel>
                )}/>
                
                <PrivateRoute path={routes.recipes} component={() => (
                    <AdminPanel>
                        <RecipeList/>
                    </AdminPanel>
                )} />

                <PublicRoute path={routes.forgotPass} component={ForgotPass} />
                <Route path={routes.notFound} component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
