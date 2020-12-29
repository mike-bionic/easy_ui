import React, {Component} from 'react'

import './Pages.css'

import Row from '../Row'
import ErrorBoundry from '../ErrorBoundry'
import {ResourceDetails,ResourceList} from '../ShopComponents'

class ResourcePage extends Component {
	state = {
		selectedItem: null
	}

	onItemSelected = (selectedItem) => {
		this.setState({selectedItem})
	}

	render(){
		const {selectedItem} = this.state

		const itemList = (
			<ResourceList	onItemSelected={this.onItemSelected} />
		)

		const itemDetails = (
			<ErrorBoundry>
				<ResourceDetails itemId={selectedItem} />
			</ErrorBoundry>
		)

		return (
			<ErrorBoundry>
				<Row left={itemList} right={itemDetails} />
			</ErrorBoundry>
		)
	}
}

export default ResourcePage