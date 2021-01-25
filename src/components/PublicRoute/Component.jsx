import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '../../constants/routes';

const PublicRoute = ({ ...rest }) => {
    
    const { isLoggedIn } = useSelector(state => ({isLoggedIn: state.user.isLoggedIn }));
    console.log('Logged Route',isLoggedIn);
    
    return isLoggedIn ? <Redirect to={routes.admin} /> : <Route {...rest}/>
}

export default PublicRoute;
