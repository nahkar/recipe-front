import React from "react";
import styles from "./style.module.scss";
import AdminNavigation from "./AdminNavigation";
import Users from "./Users";
export default function AdminPanel() {
  return (
    <div className={styles.wrapper}>
      <AdminNavigation />
      <Users />
    </div>
  );
}
