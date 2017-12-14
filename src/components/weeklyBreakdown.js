import React from 'react';
// import Values from '../styles/values';

export default class WeeklyBreakdown extends React.Component {

	render() {
		return (
			<div>
				<div>Weekly breakdown</div>
				<div>
					<p>Total Revenue: ${this.props.weeklyRevenue}</p>
					<p>- Cost of Goods: ${this.props.costOfGoods}</p>
					<p>= Gross Profit: ${this.props.grossProfit}</p>
					<p>- Operational Costs: ${this.props.weeklyOperCosts}</p>
					<p>= Weekly Profit: ${this.props.weeklyProfit}</p>
				</div>

			</div>



		)
	}


}
