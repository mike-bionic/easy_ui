import React, {Component} from 'react'

import './ItemDetails.css'

import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'
import ErrorButton from '../ErrorButton'


const Record = ({item, field, label}) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</li>
	)
}

export {
	Record
}


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
		if (this.props.itemId !== prevProps.itemId ||
			this.props.getData !== prevProps.getData){
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
		const {children} = this.props

		if (!item) {
			return <span>Select an Item from a list</span>
		}

		const errorView = error ? <ErrorIndicator /> : null
		const spinner = loading ? <Spinner /> : null
		const itemView = !(error || loading) ? <ItemView item={item} children={children} /> : null

		return (
			<div className="ItemDetails card">
				{errorView}
				{spinner}
				{itemView}
			</div>
		)
	}
}

const ItemView = ({item, children}) => {
	const {
		id,
		name,
		image} = item

	return (
		<React.Fragment>
			<img src={image} alt="Item" className="ItemImage" />
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					{
						React.Children.map(children, (child) => {
							return React.cloneElement(child, {item})
						})
					}
				</ul>
				<ErrorButton />
			</div>
		</React.Fragment>
	)
}

export default ItemDetails