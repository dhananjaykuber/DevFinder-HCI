import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/components/Layout.module.css';

const Layout = ({ children, title }) => {
  useEffect(() => {
    const faulRequest = async () => {
      await axios
        .get('https://modernconnect.herokuapp.com/modernconnect/api/v1/')
        .then((res) => console.log(res.data.message));
    };
    faulRequest();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
