import React, {Component} from 'react'

import './ItemDetails.css'

import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'
import ErrorButton from '../ErrorButton'

class ItemDetails extends Component {

	state = {
		item: null,
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updateItem()
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId){
			this.updateItem()
		}
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false
		})
	}

	onItemLoaded = (item) => {
		console.log(item)
		this.setState({
			item,
			loading: false
		});
	}

	updateItem() {
		const { itemId, getData } = this.props;
		if (!itemId) {
			return;
		}
		this.setState({
			loading: true,
			error: false
		})

		getData(itemId)
			.then(this.onItemLoaded)
			.catch(this.onError)
	}

	render() {
		const {item, loading, error} = this.state
		
		if (!item) {
			return <span>Select an Item from a list</span>
		}

		const errorView = error ? <ErrorIndicator /> : null
		const spinner = loading ? <Spinner /> : null
		const itemView = !(error || loading) ? <ItemView item={item} /> : null

		return (
			<div className="ItemDetails card">
				{errorView}
				{spinner}
				{itemView}
			</div>
		)
	}
}

const ItemView = ({item}) => {
	const {
		id,
		name,
		image,
		category,
		barcode,
		price} = item

	return (
		<React.Fragment>
			<img src={image} alt="Item" className="ItemImage" />
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Category</span>
						<span>{category}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Price</span>
						<span>{price} TMT</span>
					</li>
					<li className="list-group-item">
						<span className="term">Barcode</span>
						<span>{barcode}</span>
					</li>
				</ul>
				<ErrorButton />
			</div>
		</React.Fragment>
	)
}

export default ItemDetails