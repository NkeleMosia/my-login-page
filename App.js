import React from 'react';
import LoginForm from './components/auth/LoginForm';
import styles from './App.module.css';
import image from './assets/images/the.jpg'; // Replace with your actual logo path

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.leftSection}>
        <LoginForm />
      </div>
      <div className={styles.rightSection}>
        {/* You can add the illustration here as a background image or an SVG component */}
      </div>
    </div>
  );
}

export default App;