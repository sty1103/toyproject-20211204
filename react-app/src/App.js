import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from "./components/TOC";
import Content from './components/Content'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="Hello, React!"></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    )
  }
}

export default App;
