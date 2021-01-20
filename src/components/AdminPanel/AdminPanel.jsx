import React, {useState} from "react";
import AdminPage from "./styled"
import AdminNavigation from "./AdminNavigation";
import Users from "./Users";
import Edit from "./Users/Edit"
export default function AdminPanel() {
  const [show, setShow] = useState(false);
  return (
    <AdminPage.Wrapper>
      <AdminNavigation />
      <Users setShow={setShow}/>
      {show === true && <Edit setShow={setShow}/>}
    </AdminPage.Wrapper>
  );
}
