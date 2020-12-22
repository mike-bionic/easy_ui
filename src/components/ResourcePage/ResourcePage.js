import React, {Component} from 'react'

import './ResourcePage.css'

import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import ErrorIndicator from '../ErrorIndicator'
import SapApiService from '../../services/SapApiService'

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
		return (
			<div className="row mb2 ResourcePage">
				<div className="col-md-6">
					<ItemList 
						onItemSelected={this.onResourceSelected}
						getData={this.sapApi.getResources}
						renderItem={({id, name, ResPriceValue, ResCatName}) => (
							`${name} (${ResPriceValue} TMT | ${ResCatName})`)} />
				</div>
				<div className="col-md-6">
					<ItemDetails resourceId={this.state.selectedResource} />
				</div>
			</div>
		)
	}
}

export default ResourcePage