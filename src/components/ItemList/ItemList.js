import React, {Component} from 'react'
import SapApiService from '../../services/SapApiService'
import Spinner from '../Spinner'

import './ItemList.css'

class ItemList extends Component {
	
	sapApi = new SapApiService()

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
		this.sapApi
			.getResources()
			.then((resourceList) => {
				this.setState({
					resourceList
				})
			})
			.catch(this.onError)
	}

	renderItems(arr) {
		return arr.map(({ResId, ResName}) => {
			return (
				<li className="list-group-item"
					key={ResId}
					onClick={() => this.props.onItemSelected(ResId)}>
					{ResName}
				</li>
			)
		})
	}
	
	render(){
		
		const {resourceList} = this.state
		if (!resourceList) {
			return <Spinner />
		}

		const resources = this.renderItems(resourceList);

		return (
			<ul className="ItemList list-group">
				{resources}
			</ul>
		)
	}
}

export default ItemList