import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router-dom';
import AuthFirstStep from 'components/pages/AuthFirstStep';
import AuthSecondStep from 'components/pages/AuthSecondStep';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app-container">
          <Route exact path="/" component={AuthFirstStep} />
          <Route path="/step-2" component={AuthSecondStep} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
