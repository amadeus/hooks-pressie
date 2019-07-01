import * as React from 'react';
import styles from './App.module.css';

class CounterClass extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState(({count}) => ({count: count + 1}));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <div className={styles.wrapper}>{this.state.count}</div>;
  }
}

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

class ButtonClass extends React.PureComponent {
  render() {
    return (
      <button onClick={this.props.onClick} className={styles.button}>
        Toggle Counter
      </button>
    );
  }
}

const Button = React.memo(({onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      Toggle Counter
    </button>
  );
});

export class AppClass extends React.Component {
  state = {
    showCounter: true,
  };

  handleClick = () => {
    this.setState(({showCounter}) => ({showCounter: !showCounter}));
  };

  render() {
    return (
      <>
        <ButtonClass onClick={this.handleClick} />
        {this.state.showCounter ? <CounterClass /> : null}
      </>
    );
  }
}

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
