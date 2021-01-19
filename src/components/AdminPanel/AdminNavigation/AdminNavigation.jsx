import React from "react";
import AdminNav from "./styled"
export default function AdminNavigation() {
  return (
    <AdminNav.Wrapper>
      <AdminNav.HomeLink
        to="#">
        Admin panel
      </AdminNav.HomeLink>
      <AdminNav.BasicLink to="#">
        Users
      </AdminNav.BasicLink>
      <AdminNav.BasicLink to="#" >
        Posts
      </AdminNav.BasicLink>
    </AdminNav.Wrapper>
  );
}
