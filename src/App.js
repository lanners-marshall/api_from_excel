import React, { Component } from 'react';
import Graph from './components/Graph.js'
import "./custom.css"

class App extends Component {
  
  render() {
    return (
      <div className="top">
        <Graph/>
      </div>
    );
  }
}

export default App;