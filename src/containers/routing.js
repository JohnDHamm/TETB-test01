import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Planner from './planner';
import GoalTracker from './goalTracker';


export default class Routing extends Component {
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
