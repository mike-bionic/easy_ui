import React, {Component} from 'react'

import './Pages.css'

import Row from '../Row'
import ErrorBoundry from '../ErrorBoundry'
import {BrandDetails,BrandList} from '../ShopComponents'

class BrandPage extends Component {
	state = {
		selectedItem: null
	}

	onItemSelected = (selectedItem) => {
		this.setState({selectedItem})
	}

	render(){
		const {selectedItem} = this.state

		const itemList = (
			<BrandList	onItemSelected={this.onItemSelected} />
		)

		const itemDetails = (
			<ErrorBoundry>
				<BrandDetails itemId={selectedItem} />
			</ErrorBoundry>
		)

		return (
			<ErrorBoundry>
				<Row left={itemList} right={itemDetails} />
			</ErrorBoundry>
		)
	}
}

export default BrandPage