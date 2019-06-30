import * as React from 'react';
import styles from './App.module.css';

function Counter() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    const timerID = setInterval(() => {
      updateCount(count => count + 1);
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);
  return <div className={styles.wrapper}>{count}</div>;
}

const Button = React.memo(({onClick}) => {
  console.log('rendering button');
  return (
    <button onClick={onClick} className={styles.button}>
      Toggle Counter
    </button>
  );
});

function App() {
  const [showCounter, setState] = React.useState(true);
  const handleClick = React.useCallback(() => {
    setState(showCounter => !showCounter);
  }, []);
  return (
    <>
      <Button onClick={handleClick} />
      {showCounter ? <Counter /> : null}
    </>
  );
}

export default App;
