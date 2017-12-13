import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Values from '../styles/values';
import WeeklyBreakdown from './weeklyBreakdown';


export default class Service extends React.Component {
		constructor(props) {
		super(props);
		this.state = {
			hoursPerWeek: 20,
			hourlyRate: 25,
			costsPerMonth: 400
		}
	}

	handleHourlyRateSlider(value) {
		this.setState({ hourlyRate: value });
	}

	handleHoursPerWeekSlider(value) {
		this.setState({ hoursPerWeek: value });
	}

	handleCostsPerMonthSlider(value) {
		this.setState({ costsPerMonth: value });
	}

	calcWeeklyRevenue() {
		return this.state.hourlyRate * this.state.hoursPerWeek;
	}

	calcWeeklyOperCosts() {
		return Math.round( this.state.costsPerMonth / Values.weeksPerMonth );
	}


	render() {
		const weeklyRevenue = this.calcWeeklyRevenue();
		const costOfGoods = 0;
		const grossProfit = weeklyRevenue - costOfGoods;
		const weeklyOperCosts = this.calcWeeklyOperCosts();
		const netProfit = grossProfit - weeklyOperCosts;
		const taxes = Math.round(weeklyRevenue * Values.taxRate);
		const income = netProfit - taxes;
		const monthlyProfit = Math.round(income * Values.weeksPerMonth);
		const yearlyProfit = Math.round(monthlyProfit * 12);

		return (
			<div>
				<div className="sectionTitle">
					<h3>Service to render</h3>
				</div>
				<div className="slider">
					<p>Hourly rate charged: ${this.state.hourlyRate}</p>
					<Slider
						value={this.state.hourlyRate}
						defaultValue={this.state.hourlyRate}
						min={1}
						max={100}
						step={1}
						onChange={this.handleHourlyRateSlider.bind(this)}
						trackStyle={{ backgroundColor: Values.revenue}}
						handleStyle={{
							borderColor: '#555',
							width: 20,
							height: 20,
							marginLeft: -10,
							marginTop: -8 }}
						/>
				</div>
				<div className="slider">
					<p>Billable hours per week: {this.state.hoursPerWeek}</p>
					<Slider
						value={this.state.hoursPerWeek}
						defaultValue={this.state.hoursPerWeek}
						min={1}
						max={40}
						step={1}
						onChange={this.handleHoursPerWeekSlider.bind(this)}
						trackStyle={{ backgroundColor: Values.revenue}}
						handleStyle={{
							borderColor: '#555',
							width: 20,
							height: 20,
							marginLeft: -10,
							marginTop: -8 }}
						/>
				</div>
				<div className="slider">
					<p>Monthly costs: ${this.state.costsPerMonth}</p>
					<Slider
						value={this.state.costsPerMonth}
						defaultValue={this.state.costsPerMonth}
						min={1}
						max={2000}
						step={1}
						onChange={this.handleCostsPerMonthSlider.bind(this)}
						trackStyle={{ backgroundColor: Values.costs}}
						handleStyle={{
							borderColor: '#555',
							width: 20,
							height: 20,
							marginLeft: -10,
							marginTop: -8 }}
						/>
				</div>
				<div className="profitBlock">
					<span className="profitLine">Potential monthly profit:</span><span className="profitAmount">${monthlyProfit}</span>
					<p>That's ${yearlyProfit} per year after taxes.</p>
				</div>
				<WeeklyBreakdown
					weeklyRevenue={weeklyRevenue}
					costOfGoods={0}
					grossProfit={grossProfit}
					weeklyOperCosts={weeklyOperCosts}
					netProfit={netProfit}
					taxes={taxes}
					income={income}
				/>
			</div>
		)
	}
}
