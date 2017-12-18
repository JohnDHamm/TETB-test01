import React from 'react';

import GoalTrackChart from './goalTrackChart';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

export default class GoalWizard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			category: 1,
			goalName: '',
			goalAmount: null,
			startFunds: null,
			targetDate: null,
			currentDate: new Date(),
			showProgress: false,
			daysToGoal: null,
			weeksToGoal: null
		}
	}

	handleCategorySelect(e, index, value) {
		this.setState({ category: value})
	}

	handleGoalNameChange(e, newValue) {
		this.setState({ goalName: newValue });
	}

	handleGoalAmountChange(e, newValue) {
		this.setState({ goalAmount: newValue });
	}

	handleStartFundsChange(e, newValue) {
		this.setState({ startFunds: newValue });
	}

	handleDatePicker(x, date) {
		this.setState({ targetDate: date }, () => this.setDaysDifference() );
	}

	handleStartTracking() {
		this.setState({ showProgress: true });
	}

	setDaysDifference() {
		const msPerDay = 1000 * 60 * 60 * 24;
		const utcCurrentDate = Date.UTC(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth(), this.state.currentDate.getDate());
		const utcTargetDate = Date.UTC(this.state.targetDate.getFullYear(), this.state.targetDate.getMonth(), this.state.targetDate.getDate());
		const daysToGoal = Math.floor((utcTargetDate - utcCurrentDate) / msPerDay);
		this.setState({ daysToGoal: daysToGoal });
		const weeksToGoal = Math.round( daysToGoal / 7 );
		this.setState({ weeksToGoal })
	}

	render() {
		return(
			<div>
			{!this.state.showProgress &&
				<div>
					<div>
						<p style={{ fontStyle: 'italic', textAlign: 'center' }}>Let's set your goal:</p>
					</div>
					<div>
						<p>Select a category:</p>
						<DropDownMenu value={this.state.category} onChange={this.handleCategorySelect.bind(this)}>
							<MenuItem value={1} primaryText="Phone" />
							<MenuItem value={2} primaryText="Car" />
							<MenuItem value={3} primaryText="Education" />
							<MenuItem value={4} primaryText="Trip" />
							<MenuItem value={5} primaryText="Video Game" />
							<MenuItem value={6} primaryText="Other" />
						</DropDownMenu>
					</div>
					<div>
						<p>Give your goal a name:</p>
						<TextField
							id="goalNameTextField"
							value={this.state.goalName}
							onChange={this.handleGoalNameChange.bind(this)} />
					</div>
					<div>
						<p>How much does it cost?</p>
						<TextField
							id="goalAmountTextField"
							type="number"
							value={this.state.goalAmount}
							onChange={this.handleGoalAmountChange.bind(this)} />
					</div>
					<div>
						<p>How much do you have to start?</p>
						<TextField
							id="startFundsTextField"
							type="number"
							value={this.state.startFunds}
							onChange={this.handleStartFundsChange.bind(this)} />
					</div>
					<div>
						<p>When would you like to get it?</p>
						<DatePicker
							hintText="select a date"
							firstDayOfWeek={0}
							onChange={this.handleDatePicker.bind(this)}
							/>
					</div>
					<div>
						<RaisedButton
							label="Start Tracking"
							onClick={this.handleStartTracking.bind(this)}
						/>
					</div>
				</div>
			}

			{this.state.showProgress &&
				<div>
					<GoalTrackChart
						goalName={this.state.goalName}
						goalAmount={this.state.goalAmount}
						currentFunds={this.state.startFunds}
						targetDate={this.state.targetDate}
						weeksToGoal={this.state.weeksToGoal}
					/>
				</div>
			}
			</div>
		)
	}
}
