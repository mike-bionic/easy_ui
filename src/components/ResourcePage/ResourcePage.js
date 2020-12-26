import React, {Component} from 'react'

import './ResourcePage.css'

import ItemDetails, { Record } from '../ItemDetails'
import SapApiService from '../../services'
import Row from '../Row'
import ErrorBoundry from '../ErrorBoundry'
import {ResourceList} from '../ShopComponents'

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
				{/* {(i) => (
					`${i.name} (${i.price} TMT | ${i.category})`
				)} */}
			</ResourceList>
		)

		const itemDetails = (
			<ErrorBoundry>
				<ItemDetails
					itemId={this.state.selectedResource}
					getData={this.sapApi.getResource} >
					<Record field='category' label='Category' />
					<Record field='price' label='Price' />
					<Record field='barcode' label='Barcode' />
				</ItemDetails>
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