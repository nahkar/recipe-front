import React from 'react';
import classNames from 'classnames';
import img from '../../assets/img/processed';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

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
        <Link
          to="/recipes"
          className={classNames(
            styles.navigation_link,
            styles.navigation_link_recipes
          )}
        >
          recipes
        </Link>
        <Link to="/tv_show" className={classNames(styles.navigation_link)}>
          tv show
        </Link>
        <Link to="/new_year" className={classNames(styles.navigation_link)}>
          new year
        </Link>
        <Link
          to="/cooking_school"
          className={classNames(styles.navigation_link)}
        >
          cooking school
        </Link>
        <Link to="/shop" className={classNames(styles.navigation_link)}>
          shop
        </Link>
        <Link to="/articles" className={classNames(styles.navigation_link)}>
          articles
        </Link>
        <Link to="/contests" className={classNames(styles.navigation_link)}>
          contests
        </Link>
        <Link to="/club" className={classNames(styles.navigation_link)}>
          club
        </Link>
        <Link to="/more" className={classNames(styles.navigation_link)}>
          more
        </Link>
      </div>
    </div>
  );
}
