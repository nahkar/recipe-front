import React, { useEffect } from 'react';

import moment from 'moment';

import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './../../../../../../store/user/actions';
import Loader from '../../../../../Loader';

import UserStyled from './styled';

const UserList = () => {

    const { isLoading, users } = useSelector(state => ({
        users: state.user.users,
        isLoading: state.user.isLoading,
    }));

    const dispatch = useDispatch();

    
    useEffect(() => {
        const getUsersData = () => dispatch(getUsers());
        getUsersData();
    }, [dispatch])

    return (
        <>
            {isLoading && <Loader />}
            <UserStyled.Wrapper>
            <UserStyled.Table >
                <UserStyled.Body>
                    <UserStyled.Header>
                        <UserStyled.ColumnName>Number</UserStyled.ColumnName>
                        <UserStyled.ColumnName>Email</UserStyled.ColumnName>
                        <UserStyled.ColumnName>Role</UserStyled.ColumnName>
                        <UserStyled.ColumnName>Created At</UserStyled.ColumnName>
                        <UserStyled.ColumnName></UserStyled.ColumnName>
                    </UserStyled.Header>

                    {users.map((user, index) => {
                    return (
                        <UserStyled.List key={ user.id }>
                            <UserStyled.ContentNumber>{ index+1 }</UserStyled.ContentNumber>
                            <UserStyled.ContentName>
                                <UserStyled.UserImg/>
                                <UserStyled.UserName>{ user.email }</UserStyled.UserName>
                            </UserStyled.ContentName>
                        
                            <UserStyled.Content>{ user.role }</UserStyled.Content>
                            <UserStyled.Content>{ moment(user.createdAt).format('DD/MM/YYYY') }</UserStyled.Content>
                            <UserStyled.Content>
                                <UserStyled.DeleteBtn>Deleate</UserStyled.DeleteBtn>
                                <UserStyled.EditBtn>Edit</UserStyled.EditBtn>
                            </UserStyled.Content>
                        </UserStyled.List>)
                    })}
        </UserStyled.Body>
      </UserStyled.Table>
      </UserStyled.Wrapper>
        </>
    )
}

export default UserList;