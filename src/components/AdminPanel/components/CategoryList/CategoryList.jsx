import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCategories } from '../../../../store/category/actions';
import Loader from '../../../Loader';

import CategoryListStyled from './styled';

const CategoryList = () => {

    const { isLoading, category } = useSelector(state => ({
        category: state.category.category,
        isLoading: state.category.isLoading,
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    return (
        <>
        {isLoading && <Loader />}
        <UsersTable.Wrapper>
      
            <UsersTable.Table >
                <UsersTable.Body>
                    <UsersTable.Header>
                        <UsersTable.ColumnName>Number</UsersTable.ColumnName>
                        <UsersTable.ColumnName>Email</UsersTable.ColumnName>
                        <UsersTable.ColumnName>Role</UsersTable.ColumnName>
                        <UsersTable.ColumnName>Created At</UsersTable.ColumnName>
                        <UsersTable.ColumnName></UsersTable.ColumnName>
                    </UsersTable.Header>

                    {users.map((user, index) => {
                    return (
                        <UsersTable.List key={user.id}>
                            <UsersTable.Content>{ index+1}</UsersTable.Content>
                                <UsersTable.ContentName>
                                    <UsersTable.UserImg
                                    src="https://via.placeholder.com/40"
                                    height="40px"
                                    alt="#"
                                    />
                                    <UsersTable.UserName>{ user.email}</UsersTable.UserName>
                                </UsersTable.ContentName>
                                <UsersTable.Content>{ user.role}</UsersTable.Content>
                                <UsersTable.Content></UsersTable.Content>
                                <UsersTable.Content>
                                <UsersTable.DeleteBtn>Deleate</UsersTable.DeleteBtn>
                                <UsersTable.EditBtn onClick={() =>setShow(true)}>Edit</UsersTable.EditBtn>
                            </UsersTable.Content>
                        </UsersTable.List>)
                    })}
        </UsersTable.Body>
      </UsersTable.Table>
      </UsersTable.Wrapper>
        </>
    )
}

export default CategoryList;
