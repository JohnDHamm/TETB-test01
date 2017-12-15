import React from 'react';
import Values from '../styles/values';

export default class GoalTrackChart extends React.Component {


	convertDate(date) {
		const splitString = date.toDateString().split(" ");
		return splitString[1].toLowerCase() + " " + splitString[2];
	}


	render() {
		const { goalName, goalAmount, currentFunds, targetDate, weeksToGoal } = this.props;
		const goalDate = this.convertDate(targetDate);
		const currentDate = this.convertDate(new Date());
		// console.log("goalDate", goalDate);
		// console.log("currentDate", currentDate);
		const weeklyPace = Math.round(( goalAmount - currentFunds ) / weeksToGoal);

		const chartData = [
					{name: 'Funds', needed: goalAmount - currentFunds, balance: currentFunds}
		];
		const chartHeight = 500,
					chartWidth = 100,
					labelWidth = 300,
					topHeight = chartHeight * ( ( goalAmount - currentFunds ) / goalAmount ),
					btmHeight = chartHeight * ( currentFunds / goalAmount )


		const styles = {
			chartContainer: {
				position: 'relative',
				marginTop: 50
			},
			neededFundsLabel: {
				height: topHeight,
				width: labelWidth,
				display: "inline-block",
			},
			neededFundsChart: {
				height: topHeight,
				width: chartWidth,
				background: '#CCC',
				display: 'inline-block'
			},
			currentFundsLabel: {
				height: btmHeight,
				width: labelWidth,
				display: 'inline-block',
			},
			currentFundsChart: {
				height: btmHeight,
				width: chartWidth,
				background: Values.revenue,
				display: 'inline-block'
			},
			leftHalf: {
				height: chartHeight,
				width: labelWidth,
				display: 'inline-block'
			},
			rightHalf: {
				height: chartHeight,
				width: chartWidth,
				display: 'inline-block'
			},
			goalLabel: {
				position: 'absolute',
				top: -30,
				height: 30,
				width: '100%',
				borderBottomStyle: 'dotted',
				borderBottomColor: '#CCC',
				borderBottomWidth: 1
			},
			currentLabel: {
				position: 'absolute',
				bottom: 0,
				height: btmHeight,
				width: '100%',
				borderTopStyle: 'dotted',
				borderTopColor: Values.revenue,
				borderTopWidth: 1
			}

		}

		return (
			<div>
				<div>Goal for {goalName}</div>


				<div style={styles.chartContainer}>

					<div id="goalLabel" style={styles.goalLabel}>
						<span className="noMargin">goal amount </span><span className="chartCurrencyTextLabel">${goalAmount}</span>
					</div>

					<div style={{ height: topHeight }}>
						<div style={styles.neededFundsLabel}>
						</div>
						<div style={styles.neededFundsChart}>
						</div>
					</div>
					<div style={{ height: btmHeight }}>
						<div style={styles.currentFundsLabel}>
						</div>
						<div style={styles.currentFundsChart}>
						</div>
					</div>

					<div id="currentLabel" style={styles.currentLabel}>
						<span className="noMargin">current balance </span><span className="chartCurrencyTextLabel">${currentFunds}</span>
					</div>

				</div>

				<div>
					<p>Weekly goal: ${weeklyPace}</p>
				</div>
			</div>


			)
	}
}
