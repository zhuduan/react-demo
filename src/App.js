import React, { Component } from 'react';
import './App.css';
import Summary from './components/Summary';
import Counter from './components/Counter.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Hello <code>src/App.js</code> !
        </p>
        <br/>
        <Summary text='Total Count is' />
        <br/>
        <p></p>
        <h2>Exclude counters </h2>
        <table>
          <tbody>
            <Counter name='No 4' />
            <Counter name='No 5' />
            <Counter name='No 6' />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
