import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Values from '../styles/values';
import WeeklyBreakdown from './weeklyBreakdown';
import RevenuePieChart from './revenuePieChart';

export default class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			unitPrice: 10,
			unitsSoldPerWeek: 20,
			unitCost: 5,
			otherCosts: 400
		}
	}

	handleUnitPriceSlider(value) {
		this.setState({ unitPrice: value });
	}

	handleUnitsSoldPerWeekSlider(value) {
		this.setState({ unitsSoldPerWeek: value });
	}

	handleUnitCostSlider(value) {
		this.setState({ unitCost: value });
	}

	handleOtherCostsSlider(value) {
		this.setState({ otherCosts: value });
	}

	calcWeeklyRevenue() {
		return this.state.unitPrice * this.state.unitsSoldPerWeek;
	}

	calcCostOfGoods() {
		return ( this.state.unitCost * this.state.unitsSoldPerWeek );
	}

	calcWeeklyOperCosts() {
		return Math.round( this.state.otherCosts / Values.weeksPerMonth );
	}


	render() {
		const weeklyRevenue = this.calcWeeklyRevenue();
		const costOfGoods = this.calcCostOfGoods();
		const grossProfit = weeklyRevenue - costOfGoods;
		const weeklyOperCosts = this.calcWeeklyOperCosts();
		const netProfit = grossProfit - weeklyOperCosts;
		const taxes = Math.round(weeklyRevenue * Values.taxRate);
		const income = netProfit - taxes;
		const monthlyProfit = Math.round(income * Values.weeksPerMonth);
		const yearlyProfit = Math.round(monthlyProfit * 12);
		const productData = [
			{ name: 'profit',
				value: monthlyProfit
			},
			{ name: 'taxes',
				value: taxes
			},
			{ name: 'operations costs',
				value: weeklyOperCosts
			},
			{ name: 'cost of goods',
				value: costOfGoods
			}
		]

		return (
			<div>
				<div className="sectionTitle">
					<h3>Product for sale</h3>
				</div>
				<div className="slider">
					<p>Unit sell price: ${this.state.unitPrice}</p>
					<Slider
						value={this.state.unitPrice}
						defaultValue={this.state.unitPrice}
						min={1}
						max={100}
						step={1}
						onChange={this.handleUnitPriceSlider.bind(this)}
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
					<p>Units sold per week: {this.state.unitsSoldPerWeek}</p>
					<Slider
						value={this.state.unitsSoldPerWeek}
						defaultValue={this.state.unitsSoldPerWeek}
						min={1}
						max={200}
						step={1}
						onChange={this.handleUnitsSoldPerWeekSlider.bind(this)}
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
					<p>Unit cost: ${this.state.unitCost}</p>
					<Slider
						value={this.state.unitCost}
						defaultValue={this.state.unitCost}
						min={1}
						max={100}
						step={1}
						onChange={this.handleUnitCostSlider.bind(this)}
						trackStyle={{ backgroundColor: Values.costs}}
						handleStyle={{
							borderColor: '#555',
							width: 20,
							height: 20,
							marginLeft: -10,
							marginTop: -8 }}
						/>
				</div>
				<div className="slider">
					<p>Other monthly costs: ${this.state.otherCosts}</p>
					<Slider
						value={this.state.otherCosts}
						defaultValue={this.state.otherCosts}
						min={0}
						max={2000}
						step={1}
						onChange={this.handleOtherCostsSlider.bind(this)}
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
				</div>
				<WeeklyBreakdown
					weeklyRevenue={weeklyRevenue}
					costOfGoods={costOfGoods}
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
