import React from "react";
import styles from "./style.module.scss";
export default function Users() {
  return (
    <div className={styles.user_wrapper}>
      <table className={styles.user_table}>
        <tr className={styles.user_navigation}>
          <th className={styles.user_navigation_link}>Number</th>
          <th className={styles.user_navigation_link}>Name</th>
          <th className={styles.user_navigation_link}>Date</th>
          <th className={styles.user_navigation_link}>Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td className={styles.user_name}>
            <img
              src="https://via.placeholder.com/40"
              height="40px"
              alt="#"
              className={styles.user_img}
            />
            <p>Nikita Voskoboinikov</p>
          </td>
          <td>25.05.1995</td>
          <td>Active user</td>
        </tr>
      </table>
    </div>
  );
}
