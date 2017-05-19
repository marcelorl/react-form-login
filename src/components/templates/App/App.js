import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router-dom';
import AuthFirstStep from 'components/pages/AuthFirstStep';
import AuthSecondStep from 'components/pages/AuthSecondStep';
import Profile from 'components/pages/Profile';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app-container">
          <Route exact path="/" component={AuthFirstStep} />
          <Route path="/step-2" component={AuthSecondStep} />
          <Route path="/profile" component={Profile} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
