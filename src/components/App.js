import React, { Component } from 'react';
import Banner from './Banner';
import Form from './Form';
import Output from './Output';
import { createStore } from '../redux';
import { initialState } from '../redux/initialState';
import reducer from '../redux/reducer';
import './App.css';

const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return (
        <div>
            <Banner />
            <main id="container">
                <Form />
                <Output />
            </main>
        </div>
    );
  }
}

export default App;
