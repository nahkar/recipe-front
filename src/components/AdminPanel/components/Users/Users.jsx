import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { getUsers } from '../../../../store/user/actions';
import Loader from './../../../Loader';

import UsersTable from "./styled";

const Users = (props) => {

  const { users, isLoading } = useSelector(state => ({
    users: state.user.users,
    isLoading: state.user.isLoading,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [])

  return (
    <>
      {isLoading && <Loader/>}
      <UsersTable.Wrapper>
      <UsersTable.Table>
        <UsersTable.Body>
        <UsersTable.Header>
          <UsersTable.ColumnName>Number</UsersTable.ColumnName>
          <UsersTable.ColumnName>Email</UsersTable.ColumnName>
          <UsersTable.ColumnName>Role</UsersTable.ColumnName>
          <UsersTable.ColumnName>Date</UsersTable.ColumnName>
          <UsersTable.ColumnName></UsersTable.ColumnName>
        </UsersTable.Header>

          {users.map((user, index) => {
            return (<UsersTable.List key={user.id}>
              <UsersTable.Content>{ index + 1 }</UsersTable.Content>
          <UsersTable.ContentName>
            <UsersTable.UserImg
              src="https://via.placeholder.com/40"
              height="40px"
              alt="#"
            />
                <UsersTable.UserName>{ user.email }</UsersTable.UserName>
          </UsersTable.ContentName>
              <UsersTable.Content>{ user.role}</UsersTable.Content>
              <UsersTable.Content>{ moment(user.createdAt).format("DD/MM/YYYY") }</UsersTable.Content>
            <UsersTable.Content>
            <UsersTable.DeleteBtn>Delete</UsersTable.DeleteBtn>
              <UsersTable.EditBtn onClick={() =>props.setShow(true)}>Edit</UsersTable.EditBtn>
          </UsersTable.Content>
          </UsersTable.List>)
          })}

        </UsersTable.Body>
      </UsersTable.Table>
      </UsersTable.Wrapper>
    </>
  );
}

export default Users;