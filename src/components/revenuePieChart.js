import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import Values from '../styles/values';

export default class RevenuePieChart extends React.Component {


	render() {
		const { data } = this.props;
		const colors = [ Values.profitColor, Values.operColor, Values.cogColor ];

		return (
			<div>
				<PieChart width={400} height={300}>
					<Pie
						dataKey="value"
						data={data}
						cx={145}
						cy={100}
						innerRadius={50}
						outerRadius={80}
						startAngle={90}
						endAngle={-270}
						paddingAngle={2}
						label
						labelLine={false}
					>
						{ data.map((entry, index) => <Cell key={entry.name} fill={colors[index]} /> )}
					</Pie>
				</PieChart>

			</div>



		)
	}
}
