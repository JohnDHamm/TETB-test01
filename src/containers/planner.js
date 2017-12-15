import React from 'react';
import '../styles/planner.css';

import Product from '../components/product';
import Service from '../components/service';

import RaisedButton from 'material-ui/RaisedButton';

export default class Planner extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			toggle: 'none'
		}
	}

	selectProduct(){
		this.setState({ toggle: 'product' })
	}

	selectService(){
		this.setState({ toggle: 'service' })
	}

	render() {
		return (
			<div className="container">
				<div className="pageTitle">
					<h2>Profit Planning</h2>
				</div>
				{this.state.toggle === 'none' &&
					<div>
						<div className="homeButton">
							<RaisedButton
								label="I have a product to sell"
								onClick={this.selectProduct.bind(this)}
								/>
						</div>
						<div className="homeButton">
							<RaisedButton
								label="I have a service to provide"
								onClick={this.selectService.bind(this)}
								/>
						</div>
					</div>
				}

			{this.state.toggle === 'product' &&
				<Product />
			}
			{this.state.toggle === 'service' &&
				<Service />
			}

			</div>
		)
	}
}
