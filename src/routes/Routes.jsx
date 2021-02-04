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
import CreateRecipe from './../components/AdminPanel/components/RecipeList/components/CreateRecipe';

import routes from '../constants/routes';
const Routes = () => {
    
    return (
        <BrowserRouter>
            
            <Switch>
                <PrivateRoute exact path={ routes.webHome } component={ Main } />

                <PublicRoute path={ routes.registration } component={ Registration }/>

                <PublicRoute exact path={ routes.login } component={ Login } />
                
                <PrivateRoute exact path={ routes.main } component={ AdminPanel } />

                <PrivateRoute path={ routes.dashboard } component={ () => (
                    <AdminPanel>
                        <Dashboard/>
                    </AdminPanel>
                )} />
                
                <PrivateRoute path={ routes.users } component={ () => (
                    <AdminPanel>
                        <Users/>
                    </AdminPanel>
                )} />
                
                <PrivateRoute path={ routes.categories } component={() => (
                    <AdminPanel>
                        <CategoryList/>
                    </AdminPanel>
                )} />
                
                <PrivateRoute exact path={ routes.recipes } component={({history}) => (
                    <AdminPanel>
                        <RecipeList history={history}/>
                    </AdminPanel>
                )} />

                <PrivateRoute path={ routes.recipeCreate } component={(props) => (
                    <AdminPanel>
                        <CreateRecipe {...props}/>
                    </AdminPanel>
                )} />

                <PublicRoute path={routes.forgotPass} component={ForgotPass} />
                <Route path={routes.notFound} component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
