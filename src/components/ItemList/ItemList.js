import React, {Component} from 'react'
import Spinner from '../Spinner'

import './ItemList.css'

class ItemList extends Component {
	
	state = {
		resourceList: null
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false
		})
	}
	
	componentDidMount() {
		const {getData} = this.props

		getData()
			.then((itemList) => {
					this.setState({
						itemList
					})
				})
				.catch(this.onError)
	}

	renderItems(arr) {
		return arr.map((item) => {
			const {id} = item
			const label = this.props.renderItem(item)
			return (
				<li className="list-group-item"
					key={id}
					onClick={() => this.props.onItemSelected(id)}>
					{label}
				</li>
			)
		})
	}
	
	render(){
		
		const {itemList} = this.state
		if (!itemList) {
			return <Spinner />
		}

		const resources = this.renderItems(itemList);

		return (
			<ul className="ItemList list-group">
				{resources}
			</ul>
		)
	}
}

export default ItemList