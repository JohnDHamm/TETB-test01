import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends React.Component {

	render() {
		return(
			<div className="container">
				<div className="pageTitle">
					<h1>Teen Entrepreneur Toolbox</h1>
				</div>
				<div className="homeButton">
					<RaisedButton
						label="See if your idea can make a profit"
						fullWidth={true}
						href="/planner"
					/>
				</div>
				<div className="homeButton">
					<RaisedButton
						label="Set a goal and track your progress"
						fullWidth={true}
						href="/goalTracker"
					/>
				</div>
			</div>
		)
	}
}
