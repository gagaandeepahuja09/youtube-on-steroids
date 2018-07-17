import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Video from './containers/Video/Video'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename= '/'>
        <div className="App">
         <Video /> 
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
