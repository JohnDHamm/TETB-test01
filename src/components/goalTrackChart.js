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
		const weeklyPace = Math.round(( goalAmount - currentFunds ) / weeksToGoal);

		const chartHeight = 500,
					chartWidth = 100,
					labelWidth = 300,
					topHeight = chartHeight * ( ( goalAmount - currentFunds ) / goalAmount ),
					btmHeight = chartHeight * ( currentFunds / goalAmount )

		const styles = {
			chartContainer: {
				position: 'relative',
				margin: '50px auto'
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
			goalDateLabel: {
				position: 'absolute',
				top: -20,
				height: 20,
				width: '100%',
				textAlign: 'right'
			},
			currentLabel: {
				position: 'absolute',
				bottom: 0,
				height: btmHeight,
				width: '100%',
				borderTopStyle: 'dotted',
				borderTopColor: Values.revenue,
				borderTopWidth: 1
			},
			currentDateLabel: {
				position: 'absolute',
				bottom: btmHeight - 20,
				height: 20,
				width: '100%',
				textAlign: 'right'
			},
			goalTitle: {
				textAlign: 'center',
				fontSize: 20,
				fontStyle: 'italic'
			}
		}

		return (
			<div>
				<div style={styles.goalTitle}>Goal for {goalName}</div>

				<div style={styles.chartContainer}>

					<div id="goalLabel" style={styles.goalLabel}>
						<span className="noMargin">goal amount </span><span className="chartCurrencyTextLabel">${goalAmount}</span>
					</div>
					<div id="goalDate" style={styles.goalDateLabel}>
						<p className="dateLabel">{goalDate}</p>
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
					<div id="currentDate" style={styles.currentDateLabel}>
						<p className="dateLabel">{currentDate}</p>
					</div>

				</div>

				<div className="weeklyPace">
					<p style={{ textAlign: 'center', fontSize: 25 }}>Weekly goal: ${weeklyPace}</p>
				</div>
			</div>


			)
	}
}
