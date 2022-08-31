import React, { useState } from 'react';
import styles from '../styles/pages/Forms.module.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div id={styles.formContainer}>
      <div className={styles.heroSection}>
        <h3>Login to your account.</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          modi! Dolorem sequi quia fuga nulla.
        </p>
        <img src="/images/create_profile.svg" alt="create_profile" />
      </div>

      <div className={styles.profileForm}>
        <div className={styles.form}>
          <div className={styles.field}>
            <p>Email *</p>
            <input type="text" placeholder="Email" />
          </div>

          <div className={styles.field}>
            <p>Password *</p>
            <div className={styles.password}>
              <input
                type={showPassword ? `text` : `password`}
                placeholder="Password"
              />
              {showPassword ? (
                <i
                  className="fa-solid fa-eye-slash"
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-eye"
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              )}
            </div>
          </div>
          <button>Login</button>
        </div>
        <div className={styles.bottom}>
          <span>
            Dont't have an account! <a href="/signup">Click here</a>
          </span>
          <br />
          <span style={{ marginTop: '-15px' }}>
            Forgot password! <a href="/forgot">Click here</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
