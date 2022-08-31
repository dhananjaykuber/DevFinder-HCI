import React from 'react';
import styles from '../../src/styles/pages/Users.module.css';
import User from '../components/User';

const users = () => {
  const users = [
    {
      image: '/images/profile1.png',
      name: 'Viktor Fedorov',
      bio: "I'm a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript",
      branch: 'Computer Science & Technology',
      skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'MaterialUI'],
    },
    {
      image: '/images/profile2.png',
      name: 'Akira Tanaka',
      bio: 'Experience in Cross-Platform Mobile Development using React Native + Type Script based mobile app. ',
      branch: 'Computer Science & Technology',
      skills: ['JavaScript', 'Android', 'Flutter', 'SwiftUI', 'React Native'],
    },
  ];
  return (
    <div className={styles.users}>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};

export default users;
