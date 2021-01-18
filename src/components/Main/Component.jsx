import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../store/user/actions';

function Main() {

    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(userLogOut());
    }

    return (
        <div>
            Main
             <button onClick={logOutHandler}>Logout</button>
        </div>
    )
}

export default Main;
