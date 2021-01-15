import React from "react";
import styles from "./style.module.scss";
export default function index() {
  return (
    <div className={styles.post}>
      <img src="http://via.placeholder.com/280x209" alt="" />
      <div className={styles.post_information}>
        <h2 className={styles.post_name}>Cake</h2>
        <p className={styles.post_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          repellat ratione suscipit reprehenderit voluptate eius quaerat
          perspiciatis iste error nisi!
        </p>
      </div>
      <div className={styles.post_author_wrapper}>
        <img
          className={styles.post_author_img}
          src="http://via.placeholder.com/35x35"
          alt=""
        />
        <div className={styles.post_author_description}>
          <span className={styles.post_author_name}>Nikita</span>
          <span className={styles.post_author_date}>15 january 2021</span>
        </div>
      </div>
    </div>
  );
}
