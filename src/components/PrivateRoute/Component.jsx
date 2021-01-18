import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../constants/routes';

const PrivateRoute = ({ ...rest }) => {
    // const token = localStorage.getItem('token');
    // console.log('TOKEN', token);

    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    return isLoggedIn ? <Route {...rest} /> : <Redirect to={ routes.login }/>
}

export default PrivateRoute;