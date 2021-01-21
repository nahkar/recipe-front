import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../store/user/actions';

function Main({history}) {

    const dispatch = useDispatch();

    const logout = (refreshToken) => dispatch(userLogOut({ refreshToken, history }));

    const logOutHandler = () => {
        logout(localStorage.getItem('refresh_token'));
    }

    return (
        <div>
            Main
             <button onClick={logOutHandler}>Logout</button>
        </div>
    )
}

export default Main;
