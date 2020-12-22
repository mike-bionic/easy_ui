import React, {Component} from 'react'

import './ResourcePage.css'

import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import SapApiService from '../../services/SapApiService'
import Row from '../Row'
import ErrorBoundry from '../ErrorBoundry'


class ResourcePage extends Component {

	sapApi = new SapApiService()

	state = {
		selectedResource: null
	}

	onResourceSelected = (ResId) => {
		this.setState({
			selectedResource: ResId
		})
	}

	
	render(){

		const itemList = (
			<ItemList 
				onItemSelected={this.onResourceSelected}
				getData={this.sapApi.getResources}>
				
				{(i) => (
					`${i.name} (${i.ResPriceValue} TMT | ${i.ResCatName})`
				)}
			
			</ItemList>
		)
		
		const itemDetails = (
			<ErrorBoundry>
				<ItemDetails resourceId={this.state.selectedResource} />
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