import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../../store/user/actions";
import moment from "moment";
import Loader from "../../../Loader";

import UsersTable from "./styled";
import Edit from "./components/Edit";

import api from "../../../../utils/api";

export default function Users() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState();
  const { isLoading, users } = useSelector(state => ({
    users: state.user.users,
    isLoading: state.user.isLoading,
}))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const deleteId = async (id) => {
   await api.user.deleteUser(id);
    dispatch(getUsers());
  }
  const editUser = (user) => {
    setShow(true);
    setUser(user)
  }
  console.log(user);
  return (
    <>
       {show === true && <Edit user={user} setShow={setShow} />}
      {isLoading && <Loader/>}
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
              <UsersTable.Content>
            <UsersTable.DeleteBtn onClick={() => deleteId(user.id)}>Deleate</UsersTable.DeleteBtn>
              <UsersTable.EditBtn onClick={() => editUser(user)}>Edit</UsersTable.EditBtn>
          </UsersTable.Content>
            </UsersTable.List>)
          })}
        </UsersTable.Body>
      </UsersTable.Table>
      </UsersTable.Wrapper>
    </>
    
  );
}