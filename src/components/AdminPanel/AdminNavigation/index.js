import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
export default function AdminNavigation() {
  return (
    <div className={styles.admin_navigation}>
      <Link
        to="#"
        className={classNames(
          styles.admin_navigation_link,
          styles.admin_navigation_home
        )}
      >
        Admin panel
      </Link>
      <Link to="#" className={styles.admin_navigation_link}>
        Users
      </Link>
      <Link to="#" className={styles.admin_navigation_link}>
        Posts
      </Link>
    </div>
  );
}
