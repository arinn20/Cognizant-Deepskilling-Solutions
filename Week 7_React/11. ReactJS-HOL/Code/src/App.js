import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
// github id: @mukherjeea10
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    console.log("Hello! Counter updated.");
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSyntheticEvent = (e) => {
    alert("I was clicked");
    console.log("SyntheticEvent:", e);
  };
//github id: @mukherjeea10
  render() {
    return (
      <div style={{ padding: 20, fontFamily: 'Arial' }}>
        <h1>React Event Examples</h1>
        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.increment}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome to React Events!")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.handleSyntheticEvent}>Synthetic Event Button</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
