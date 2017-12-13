import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Values from '../styles/values';

export default class Service extends React.Component {
		constructor(props) {
		super(props);
		this.state = {
			hoursPerWeek: 1,
			hourlyRate: 1,
			costsPerMonth: 0
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

	calcServiceProfit() {
		return ( this.state.hourlyRate * this.state.hoursPerWeek * 4 ) - this.state.costsPerMonth;
	}


	render() {
		const monthlyServiceRevenue = this.calcServiceProfit();

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
					<span className="profitLine">Potential monthly profit:</span><span className="profitAmount">${monthlyServiceRevenue}</span>
				</div>
			</div>
		)
	}
}
