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

		const chartHeight = 400,
					chartWidth = 100,
					labelWidth = 225,
					topHeight = chartHeight * ( ( goalAmount - currentFunds ) / goalAmount ),
					btmHeight = chartHeight * ( currentFunds / goalAmount )

		const styles = {
			chartContainer: {
				position: 'relative',
				height: chartHeight,
				width: 400
			},
			neededFundsChart: {
				height: topHeight,
				width: chartWidth,
				background: '#CCC',
				position: 'absolute',
				top: 0,
				left: labelWidth
			},
			currentFundsChart: {
				height: btmHeight,
				width: chartWidth,
				background: Values.revenue,
				position: 'absolute',
				top: topHeight,
				left: labelWidth
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
			balanceLine: {
				position: 'absolute',
				top: topHeight,
				width: '100%',
				height: 2,
				borderTopStyle: 'dotted',
				borderTopColor: Values.revenue,
				borderTopWidth: 1
			},
			currentLabel: {
				position: 'absolute',
				bottom: btmHeight - 30,
				height: 30,
				width: '100%',
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
				fontStyle: 'italic',
				marginBottom: 50
			}
		}

		return (
			<div>
				<div style={styles.goalTitle}>Goal for {goalName}
				</div>
				<div style={styles.chartContainer}>
					<div id="goalLabel" style={styles.goalLabel}>
						<span className="noMargin">goal amount </span><span className="chartCurrencyTextLabel"> ${goalAmount}</span>
					</div>
					<div id="goalDate" style={styles.goalDateLabel}>
						<p className="dateLabel">{goalDate}</p>
					</div>

					<div id="need" style={styles.neededFundsChart}>
					</div>
					<div id="have" style={styles.currentFundsChart}>
					</div>
					<div id="balanceLine" style={styles.balanceLine}></div>
					<div id="currentLabel" style={styles.currentLabel}>
						<span className="noMargin">current balance </span><span className="chartCurrencyTextLabel"> ${currentFunds}</span>
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
