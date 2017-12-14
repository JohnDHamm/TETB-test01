import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import Planner from './containers/planner';
import GoalTracker from './containers/goalTracker';


class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route path="/planner" component={Planner} />
						<Route path="/goalTracker" component={GoalTracker} />
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</BrowserRouter>
    );
  }
}

export default App;
