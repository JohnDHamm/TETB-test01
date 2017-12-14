import React from 'react';

import GoalWizard from '../components/goalWizard'

export default class GoalTracker extends React.Component {

	render() {

		return(
			<div>
				<div>Goal Tracker</div>
				<GoalWizard />
			</div>

		)
	}
}
