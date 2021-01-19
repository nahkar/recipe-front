import React from "react";
import AdminPage from "./styled"
import AdminNavigation from "./AdminNavigation";
import Users from "./Users";
export default function AdminPanel() {
  return (
    <AdminPage.Wrapper>
      <AdminNavigation />
      <Users />
    </AdminPage.Wrapper>
  );
}
