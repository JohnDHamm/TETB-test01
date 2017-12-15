import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends React.Component {

	render() {
		return(
			<div className="container">
				<div className="pageTitle">Teen Entreprenuer Toolbox</div>
				<div className="homeButton">
					<RaisedButton
						label="Profit Planning"
						href="/planner"
					/>
				</div>
				<div className="homeButton">
					<RaisedButton
						label="Goal Tracker"
						href="/goalTracker"
					/>
				</div>
			</div>
		)
	}
}
