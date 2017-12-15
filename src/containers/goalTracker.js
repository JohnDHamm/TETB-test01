import React from 'react';
import '../styles/goalTracker.css';

import GoalWizard from '../components/goalWizard'

export default class GoalTracker extends React.Component {

	render() {

		return(
			<div className="container">
				<div>Goal Tracker</div>
				<GoalWizard />
			</div>

		)
	}
}
