import React, { useState } from 'react';
import styles from './LoginForm.module.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sign in with:', { email, password, rememberMe });
    // In a real application, you'd handle the login logic here
  };

  return (
    <div className={styles.loginForm}>
      <h2>Welcome back</h2>
      <p className={styles.subtitle}>Please enter your details</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.rememberForgotPassword}>
          <label className={styles.rememberMe}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Remember for 30 days
          </label>
          <button type="button" className={styles.forgotPassword}>
            Forgot password
          </button>
        </div>
        <button type="submit" className={styles.signInButton}>
          Sign in
        </button>
        <button type="button" className={styles.googleSignInButton}>
          <img
            src="/images/google-logo.png" // Assuming you'll place the Google logo in your public/images folder
            alt="Sign in with Google"
            className={styles.googleIcon}
          />
          Sign in with Google
        </button>
        <p className={styles.signUpText}>
          Don't have an account?{' '}
          <button type="button" className={styles.signUpLink}>
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;