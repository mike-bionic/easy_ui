import React, {Component} from 'react'

import './ItemDetails.css'
// import ItemImage from '../Assets/resource.jpg'
import SapApiService from '../../services/SapApiService'

class ItemDetails extends Component {

	sapApi = new SapApiService()

	state = {
		resource: null
	}

	componentDidMount() {
		this.updateItem()
	}

	componentDidUpdate(prevProps) {
		if (this.props.resourceId !== prevProps.resourceId){
			this.updateItem()
		}
	}

	updateItem() {
		const { resourceId } = this.props;
		if (!resourceId) {
			return;
		}

		this.sapApi
			.getResource(resourceId)
			.then((resource) => {
				this.setState({resource})
			})
	}

	render() {
		
		if (!this.state.resource) {
			return <span>Select an Item from a list</span>
		}

		const {
			ResId,
			ResName,
			FilePathS,
			ResCatName,
			BarcodeVal,
			ResPriceValue} = this.state.resource
	
		return (
			<div className="ItemDetails card">
				<img src={FilePathS} alt="Item" className="ItemImage" />
				<div className="card-body">
					<h4>{ResName}</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term">Category</span>
							<span>{ResCatName}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Price</span>
							<span>{ResPriceValue}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Barcode</span>
							<span>{BarcodeVal}</span>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default ItemDetails