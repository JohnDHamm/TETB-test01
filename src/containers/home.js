import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends React.Component {

	render() {
		return(
			<div>
				<div>Home</div>
				<div>
					<RaisedButton
						label="Profit Planning"
						href="/planner"
					/>
				</div>
				<div>
					<RaisedButton
						label="Goal Tracker"
						href="/goalTracker"
					/>
				</div>
			</div>
		)
	}
}
