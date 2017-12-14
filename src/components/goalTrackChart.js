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

		return (
			<div>
				<div>Goal for {goalName}</div>
				<BarChart width={200} height={500} data={chartData}
							margin={{top: 20, right: 30, left: 20, bottom: 5}
						} barSize={100}
					>
					<XAxis dataKey="name"/>
					<Legend />
					<Bar dataKey="balance" stackId="a" fill={Values.revenue} />
					<Bar dataKey="needed" stackId="a" fill={Values.costs} />
				</BarChart>
				<div>
					<p>Weekly goal: ${weeklyPace}</p>
				</div>
			 </div>


			)
	}
}
