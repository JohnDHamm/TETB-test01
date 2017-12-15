import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import Values from '../styles/values';

export default class ProductPieChart extends React.Component {


	render() {
		const { data, weeklyRevenue } = this.props;
		const colors = [ Values.profitColor, Values.operColor, Values.cogColor ];

		// const renderCustomLabel = () => {
		// 	return ()
		// }

		const styles = {
			chartContainer: {
				position: 'relative'
			},
			revenueBlock: {
				position: 'absolute',
				height: 50,
				width: 90,
				top: 80,
				left: 105,
			},
			revAmt: {
				textAlign: 'center',
				fontSize: 25,
				margin: 0,
			},
			revLabel: {
				textAlign: 'center',
				margin: 0,
				fontSize: 12
			}
		}


		return (
			<div style={styles.chartContainer}>
				<PieChart width={350} height={250}>
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
					<Legend verticalAlign="bottom" />
				</PieChart>
				<div style={styles.revenueBlock}>
					<p style={styles.revAmt}>${weeklyRevenue}</p>
					<p style={styles.revLabel}>weekly revenue</p>
				</div>
			</div>



		)
	}
}


