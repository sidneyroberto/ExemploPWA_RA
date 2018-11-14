import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import TelaRA from './TelaRA';
import Inicio from './Inicio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Exemplo PWA</h1>
        </div>

        <br/>

        <BrowserRouter>
          <Switch>
              <Route name="inicio" path="/inicio" component={Inicio} />
              <Route name="ra" path="/ra" component={TelaRA} /> 
              <Redirect from="/*" to="inicio" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
