import * as React from 'react';
import styles from './App.module.css';

class Counter extends React.Component {
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

class Button extends React.PureComponent {
  render() {
    return (
      <button onClick={this.props.onClick} className={styles.button}>
        Toggle Counter
      </button>
    );
  }
}

class App extends React.Component {
  state = {
    showCounter: true,
  };

  handleClick = () => {
    this.setState(({showCounter}) => ({showCounter: !showCounter}));
  };

  render() {
    return (
      <>
        <Button onClick={this.handleClick} />
        {this.state.showCounter ? <Counter /> : null}
      </>
    );
  }
}

export default App;
