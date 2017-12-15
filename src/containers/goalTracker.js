import React from 'react';
import '../styles/goalTracker.css';

import GoalWizard from '../components/goalWizard'

export default class GoalTracker extends React.Component {

	render() {

		return(
			<div className="container">
				<div className="pageTitle">
					<h2>Goal Tracker</h2>
				</div>
				<GoalWizard />
			</div>

		)
	}
}
