import React, {Component} from 'react'

import './ItemDetails.css'

import SapApiService from '../../services/SapApiService'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'

class ItemDetails extends Component {

	sapApi = new SapApiService()

	state = {
		resource: null,
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updateItem()
	}

	componentDidUpdate(prevProps) {
		if (this.props.resourceId !== prevProps.resourceId){
			this.updateItem()
		}
	}

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  onItemLoaded = (resource) => {
    this.setState({
      resource,
      loading: false
    });
	}

	updateItem() {
		const { resourceId } = this.props;
		if (!resourceId) {
			return;
		}
		this.setState({
			loading: true,
			error: false
		})

		this.sapApi
			.getResource(resourceId)
			.then(this.onItemLoaded)
			.catch(this.onError)
	}

	render() {
		const {resource, loading, error} = this.state
		
		if (!resource) {
			return <span>Select an Item from a list</span>
		}

		const errorView = error ? <ErrorIndicator /> : null
		const spinner = loading ? <Spinner /> : null
		const itemView = !(error || loading) ? <ItemView resource={resource} /> : null

		return (
			<div className="ItemDetails card">
				{errorView}
				{spinner}
				{itemView}
			</div>
		)
	}
}

const ItemView = ({resource}) => {
	const {
		ResId,
		ResName,
		FilePathS,
		ResCatName,
		BarcodeVal,
		ResPriceValue} = resource

	return (
		<React.Fragment>
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
						<span>{ResPriceValue} TMT</span>
					</li>
					<li className="list-group-item">
						<span className="term">Barcode</span>
						<span>{BarcodeVal}</span>
					</li>
				</ul>
			</div>
		</React.Fragment>
	)
}

export default ItemDetails