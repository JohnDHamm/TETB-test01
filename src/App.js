import React, { Component } from 'react';
import Routing from './containers/routing';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends Component {
  render() {
    return (
			<MuiThemeProvider>
				<Routing />
			</MuiThemeProvider>
    );
  }
}

export default App;
