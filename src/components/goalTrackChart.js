import React from 'react';
import Values from '../styles/values';

import {BarChart, Bar, XAxis, Legend, ReferenceLine} from 'recharts';


export default class GoalTrackChart extends React.Component {
	render() {
		const { goalName, goalAmount, currentFunds, targetDate, daysToGoal, weeksToGoal } = this.props;
		const chartData = [
					{name: 'Funds', needed: goalAmount - currentFunds, balance: currentFunds}
		];
		const weeklyPace = Math.round(( goalAmount - currentFunds ) / weeksToGoal);
		const chartHeight = 500,
					chartWidth = 100,
					labelWidth = 300,
					topHeight = chartHeight * ( ( goalAmount - currentFunds ) / goalAmount ),
					btmHeight = chartHeight * ( currentFunds / goalAmount )


		const styles = {
			chartContainer: {
				position: 'relative'
			},
			neededFundsLabel: {
				height: topHeight,
				width: labelWidth,
				display: "inline-block",
				borderTop: '1px dotted red',
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

				<div style={{ height: 30 }}>
					<span className="">goal </span><span className="chartCurrencyTextLabel">${goalAmount}</span>
				</div>

				<div style={styles.chartContainer}>

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

				// <BarChart
				// 	width={100}
				// 	height={300}
				// 	data={chartData}
				// 	margin={{top: 10, right: 30, left: 20, bottom: 5}}
				// >
				// 	<Bar dataKey="balance" stackId="a" fill={Values.revenue} />
				// 	<Bar dataKey="needed" stackId="a" fill={Values.costs} />
				// </BarChart>
