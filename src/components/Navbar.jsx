import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Layout.module.css';

const Navbar = () => {
  return (
    <nav
      className={styles.navbar}
      style={{ background: window.location.pathname !== '/' && '#fdfdfd' }}
    >
      <a href="/">DevFinder</a>

      <div>
        <a href="/signup">
          <button className={styles.signup}>Signup</button>
        </a>
        <a href="/login">
          <button className={styles.login}>Login</button>
        </a>

        {/* <button className={styles.logout}>
          Logout <i className="fa-solid fa-right-from-bracket"></i>
        </button>
        <img
          src="/images/profile_image.JPG"
          alt="profile_image"
          className={styles.profileImage}
        /> */}
      </div>
    </nav>
  );
};

export default Navbar;
