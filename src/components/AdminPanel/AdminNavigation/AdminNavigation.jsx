import React from "react";
import AdminNav from "./styled"
export default function AdminNavigation() {
  return (
    <AdminNav.Wrapper>
      <AdminNav.HomeLink
        to="#">
        Admin
      </AdminNav.HomeLink>
      <AdminNav.BasicLink to="#">
        Users
      </AdminNav.BasicLink>
      <AdminNav.BasicLink to="#" >
        Regipes
      </AdminNav.BasicLink>
      <AdminNav.BasicLink to="#" >
        Categories
      </AdminNav.BasicLink>
    </AdminNav.Wrapper>
  );
}
