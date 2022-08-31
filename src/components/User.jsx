import React from 'react';
import styles from '../../src/styles/components/User.module.css';

const User = ({ user }) => {
  return (
    <div className={styles.user}>
      <img src={user.image} alt={`profile_${user.name}`} />
      <div className={styles.information}>
        <div className={styles.profileHeader}>
          <h3>{user.name}</h3>
        </div>
        <h4>{user.branch}</h4>
        <p>{user.bio}</p>
        <div className={styles.skills}>
          {user.skills.map((skill) => (
            <span>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
