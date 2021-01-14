import React from "react";
import styles from "./style.module.scss";
import img from "./img/processed.jpeg";
export default function Header() {
  return (
    <div className={styles.wrapper_header}>
      <div className={styles.header}>
        <img src={img} alt="#" width="195px" />
        <div className={styles.registration_and_login_btn}>
          <button className={styles.registration}>registration</button>
          <button className={styles.enter}>enter</button>
        </div>
      </div>
      <hr />
      <div className={styles.header_navigation}>
        <a className={styles.navigation_link} href="">
          recipes
        </a>
        <a className={styles.navigation_link} href="">
          tv shows
        </a>
        <a className={styles.navigation_link} href="">
          new year
        </a>
        <a className={styles.navigation_link} href="">
          cooking school
        </a>
        <a className={styles.navigation_link} href="">
          shop
        </a>
        <a className={styles.navigation_link} href="">
          articles
        </a>
        <a className={styles.navigation_link} href="">
          contests
        </a>
        <a className={styles.navigation_link} href="">
          club
        </a>
        <a className={styles.navigation_link} href="">
          more
        </a>
      </div>
    </div>
  );
}
