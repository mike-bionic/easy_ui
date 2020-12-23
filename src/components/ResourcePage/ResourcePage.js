import React, {Component} from 'react'

import './ResourcePage.css'

import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import SapApiService from '../../services'
import Row from '../Row'
import ErrorBoundry from '../ErrorBoundry'
import {ResourceList, CategoryList} from '../ShopComponents'

class ResourcePage extends Component {

	sapApi = new SapApiService()

	state = {
		selectedResource: null
	}

	onResourceSelected = (id) => {
		this.setState({
			selectedResource: id
		})
	}

	render(){
		const itemList = (
			<ResourceList	onItemSelected={this.onResourceSelected}>
				{(i) => (
					`${i.name} (${i.price} TMT | ${i.category})`
				)}
			</ResourceList>
		)

		const itemDetails = (
			<ErrorBoundry>
				<ItemDetails
					itemId={this.state.selectedResource}
					getData={this.sapApi.getResource} />
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