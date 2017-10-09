import React, { Component } from 'react'
import { StyledSelect, StyledOption } from './SelectStyles'

class SelectLoader extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: 'buttons'
		}
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value })
	}

	renderSelectOptions() {			
		return items.map((item, index) => {
			return (
				<StyledOption key={index} value={item.value}>{item.label}</StyledOption>
			)
		})
	}

	renderValue = () => {
		var { value } = this.state
		if (value || !value === '') {
			return (
				<div>
					<p>{value}</p>
				</div>
			)
		} 
	}

	render() {
		return (
			<div>

				<StyledSelect value={this.state.value} onChange={this.handleChange}>
					{/* <option value={''}>Choose all</option> */}
					{this.renderSelectOptions()}
				</StyledSelect>
				{this.renderValue()}
			</div>
		)
	}
}

export default SelectLoader



const items = [
	{
		label: 'Buttons',
		value: 'buttons',
		active: true
	},
	{
		label: 'Cards',
		value: 'cards',
		active: true
	},
	{
		label: 'Dropdowns',
		value: 'dropdowns',
		active: true
	},
	{
		label: 'Icons',
		value: 'icons',
		active: true
	},
	{
		label: 'Loaders',
		value: 'loaders',
		active: true
	},
	{
		label: 'Meters',
		value: 'meters',
		active: true
	},
	{
		label: 'Tags',
		value: 'tags',
		active: true
	}
]
