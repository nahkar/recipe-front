import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../store/user/actions";
import UsersTable from "./styled";
import moment from "moment";
import Loader from "../../Loader"

export default function Users(props) {
  const { isLoading, users } = useSelector(state => ({
    users: state.user.users,
    isLoading: state.user.isLoading,
}))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers())
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
          <UsersTable.ColumnName>Created At</UsersTable.ColumnName>
          <UsersTable.ColumnName></UsersTable.ColumnName>
        </UsersTable.Header>

       
          {users.map((user, index) => {
            return( <UsersTable.List key={user.id}>
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
              <UsersTable.Content>{moment(user.createdAt).format("DD/MM/YYYY") }</UsersTable.Content>
                
            </UsersTable.List>)
          })}
        </UsersTable.Body>
      </UsersTable.Table>
      </UsersTable.Wrapper>
    </>
    
  );
}