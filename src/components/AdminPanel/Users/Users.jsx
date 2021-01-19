import React from "react";
import UsersTable from "./styled"
export default function Users() {
  return (
    <UsersTable.Wrapper>
      <UsersTable.Table>
        <UsersTable.Body>
        <UsersTable.Header>
          <UsersTable.ColumnName>Number</UsersTable.ColumnName>
          <UsersTable.ColumnName>Name</UsersTable.ColumnName>
          <UsersTable.ColumnName>Gender</UsersTable.ColumnName>
          <UsersTable.ColumnName>Date</UsersTable.ColumnName>
          <UsersTable.ColumnName>Status</UsersTable.ColumnName>
          <UsersTable.ColumnName></UsersTable.ColumnName>
        </UsersTable.Header>

        <UsersTable.List>
          <UsersTable.Content>1</UsersTable.Content>
          <UsersTable.ContentName>
            <UsersTable.UserImg
              src="https://via.placeholder.com/40"
              height="40px"
              alt="#"
            />
            <UsersTable.UserName>Nikita Voskoboinikov</UsersTable.UserName>
          </UsersTable.ContentName>
          <UsersTable.Content>Man</UsersTable.Content>
          <UsersTable.Content>25.05.1995</UsersTable.Content>
          <UsersTable.Content>Active user</UsersTable.Content>
          <UsersTable.Content>
            <UsersTable.DeleteBtn>Deleate</UsersTable.DeleteBtn>
          </UsersTable.Content>
        </UsersTable.List>
        </UsersTable.Body>
      </UsersTable.Table>
    </UsersTable.Wrapper>
  );
}