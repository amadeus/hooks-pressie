import * as React from 'react';
import styles from './App.module.css';

function Counter() {
  return <div className={styles.wrapper}>0</div>;
}

function Button({onClick}) {
  return (
    <button onClick={onClick} className={styles.button}>
      Toggle Counter
    </button>
  );
}

function App() {
  return (
    <>
      <Button />
      <Counter />
    </>
  );
}

export default App;
