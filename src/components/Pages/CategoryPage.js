import React, {Component} from 'react'

import './Pages.css'

import Row from '../Row'
import ErrorBoundry from '../ErrorBoundry'
import {CategoryDetails,CategoryList} from '../ShopComponents'

class CategoryPage extends Component {
	state = {
		selectedItem: null
	}

	onItemSelected = (selectedItem) => {
		this.setState({selectedItem})
	}

	render(){
		const {selectedItem} = this.state

		const itemList = (
			<CategoryList	onItemSelected={this.onItemSelected} />
		)

		const itemDetails = (
			<ErrorBoundry>
				<CategoryDetails itemId={selectedItem} />
			</ErrorBoundry>
		)

		return (
			<ErrorBoundry>
				<Row left={itemList} right={itemDetails} />
			</ErrorBoundry>
		)
	}
}

export default CategoryPage