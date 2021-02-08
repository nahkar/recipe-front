import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../store/user/actions';

import Loader from '../Loader';

function Main({history}) {

    const { isLoading } = useSelector(state => ({
        isLoading: state.user.isLoading,
    }))

    const dispatch = useDispatch();

    const logout = (refreshToken) => dispatch(userLogOut({ refreshToken, history }));

    const logOutHandler = () => {
        logout(localStorage.getItem('refresh_token'));
    }

    return (
        <div>
            {isLoading && <Loader/>}
            Main
             <button onClick={logOutHandler}>Logout</button>
        </div>
    )
}

export default Main;
