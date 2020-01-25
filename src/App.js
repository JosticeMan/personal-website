import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import {Homepage} from "./components/landing/Homepage";
import {NotFound} from "./components/NotFound";
import {Header} from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="row p-0 m-0">
        <div className="app-container">
          <Header />
          <div className="page-wrapper content-wrapper">
            <div className="Site col p-0">
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
