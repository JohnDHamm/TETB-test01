import React from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class GoalWizard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			category: 1
		}
	}

	handleCategorySelect(e, k, value) {
		this.setState({ category: value})
	}

	render() {
		console.log("category", this.state.category);

		return(
			<div>
				<div>Describe your goal:</div>
				<DropDownMenu value={this.state.category} onChange={this.handleCategorySelect.bind(this)}>
					<MenuItem value={1} primaryText="Phone" />
					<MenuItem value={2} primaryText="Car" />
					<MenuItem value={3} primaryText="Education" />
				</DropDownMenu>
			</div>
		)
	}
}
