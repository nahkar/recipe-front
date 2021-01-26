import React, { useEffect } from 'react';

import moment from 'moment';

import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './../../../../../../store/user/actions';
import Loader from '../../../../../Loader';

import UserListStyled from './styled';

const UserList = () => {

    const { isLoading, users } = useSelector(state => ({
        users: state.user.users,
        isLoading: state.user.isLoading,
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <>
            {isLoading && <Loader />}
            <UserListStyled.UserWrapper>
                <UserListStyled.UserTopInfo>
                    <UserListStyled.UserTopNumber>
                        №
                    </UserListStyled.UserTopNumber>
                    <UserListStyled.UserTopName>
                        Email
                    </UserListStyled.UserTopName>
                    <UserListStyled.UserTopName>
                        Role
                    </UserListStyled.UserTopName>
                    <UserListStyled.UserTopName>
                        Created At
                    </UserListStyled.UserTopName>
                    <UserListStyled.UserTopAction>
                        Action
                    </UserListStyled.UserTopAction>
                </UserListStyled.UserTopInfo>

                 {users.map((user, index) => {
                    return (
                        <UserListStyled.UserList key={user.id}>
                            <UserListStyled.UserDataNumber>
                                {index + 1}
                            </UserListStyled.UserDataNumber>
                            <UserListStyled.UserDataName>
                                {user.email}
                            </UserListStyled.UserDataName>
                            <UserListStyled.UserDataName>
                                {user.role}
                            </UserListStyled.UserDataName>
                            <UserListStyled.UserDataName>
                                {moment(user.createdAt).format('DD/MM/YYYY')}
                            </UserListStyled.UserDataName>
                            <UserListStyled.UserDataName>
                                <UserListStyled.UserButtons color='rgb(255, 61, 61);'>
                                    Remove
                                </UserListStyled.UserButtons>
                                <UserListStyled.UserButtons color='rgb(28, 146, 24);'>
                                    Edit
                                </UserListStyled.UserButtons>
                            </UserListStyled.UserDataName>
                            
                        </UserListStyled.UserList>
                        )
                    })
                }
            </UserListStyled.UserWrapper>
        </>
    )
}

export default UserList;