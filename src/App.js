import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import {Homepage} from "./components/landing/Homepage";
import {NotFound} from "./components/NotFound";
import Header from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {SocialSideBar} from "./components/social/SocialSideBar";
import {Contact} from "./components/contact/Contact";
import {Work} from "./components/work/Work";
import {Hobby} from "./components/hobby/Hobby";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="row p-0 m-0">
        <div className="app-container">
          <div className="page-wrapper content-wrapper" >
            <Header />
            <div className="Site col p-0">
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/work' component={Work} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/hobby' component={Hobby} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
          <SocialSideBar />
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
