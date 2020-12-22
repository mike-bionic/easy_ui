import React, {Component} from 'react'

import './ResourcePage.css'

import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import ErrorIndicator from '../ErrorIndicator'
import SapApiService from '../../services/SapApiService'


const Row = ({left, right}) => {
	return (
		<div className="row mb2 ResourcePage">
			<div className="col-md-6">
				{left}
			</div>
			<div className="col-md-6">
				{right}
			</div>
		</div>
	)
}


class ResourcePage extends Component {

	sapApi = new SapApiService()

	state = {
		selectedResource: null,
		hasError: false
	}

	componentDidCatch() {
		this.setState({
			hasError: true
		})
	}
	onResourceSelected = (ResId) => {
		this.setState({
			selectedResource: ResId
		})
	}

	
	render(){
		if (this.state.hasError){
			return <ErrorIndicator />
		}

		const itemList = (
			<ItemList 
				onItemSelected={this.onResourceSelected}
				getData={this.sapApi.getResources}
				renderItem={({id, name, ResPriceValue, ResCatName}) => (
					`${name} (${ResPriceValue} TMT | ${ResCatName})`)} />
		)
		
		const itemDetails = (
			<ItemDetails resourceId={this.state.selectedResource} />
		)
		return (
			<Row left={itemList} right={itemDetails} />
		)
	}
}

export default ResourcePage