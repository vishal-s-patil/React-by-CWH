import './App.css';
import Navbar from './Navbar/Navbar';
import News from './News/News';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={30}/>
      </div>
    )
  }
}

