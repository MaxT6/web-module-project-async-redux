import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import * as actions from './state/action-creators'

function App(props) {
  return (
    <div className="App">
       <span>{props.activity}</span>
      <button onClick={() => props.getActivity()}>Click Here</button>
    </div>
  );
}

export default connect(st => st, actions)(App) // if connecting App