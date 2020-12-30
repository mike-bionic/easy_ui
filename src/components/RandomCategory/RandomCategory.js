import React, {Component} from 'react'

import SapApiService from '../../services/SapApiService'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'
import './RandomCategory.css'


class RandomCategory extends Component {

	static defaultProps = {
		updateInterval: 3500
	}

	static propTypes = {
		updateInterval: (props, propName, componentName) => {
			const value = props[propName]
			if (typeof value === 'number' && !isNaN(value)) {
				return null
			}
			return new TypeError(`${componentName}: ${propName} must be number`)
		}
	}

	state = {
		category: {},
		loading: true,
		error: false
	}

	sapApi = new SapApiService();

	componentDidMount() {
		const {updateInterval} = this.props
		this.updateCategory();
		this.interval = setInterval(this.updateCategory,updateInterval)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false
		})
	}

	onCategoryLoaded = (category) => {
		this.setState({
			category,
			loading: false
		});
	}

	updateCategory = () => {
		const ResCatId = Math.floor(Math.random()*8) + 2
		this.sapApi
			.getCategory(ResCatId)
			.then(this.onCategoryLoaded)
			.catch(this.onError)
	}

	render() {
		const {category, loading, error} = this.state

		const errorView = error ? <ErrorIndicator /> : null
		const spinner = loading ? <Spinner /> : null
		const categoryView = !(loading || error) ? <CategoryView category={category} /> : null
		
		return (
			<div className="RandomCategory jumbotron rounded">
				{spinner}
				{categoryView}
				{errorView}
			</div>
		)
	}
}

const CategoryView = ({category}) => {

	const {
		id,
		name,
		description,
		visibleIndex,
		createdDate,
		image
	} = category


	return (
		<React.Fragment>
			<img 
					src={image}
					alt="Category" />
			<div>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Description</span>
						<span>{description}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Visible index</span>
						<span>{visibleIndex}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Date</span>
						<span>{createdDate}</span>
					</li>
				</ul>
			</div>
		</React.Fragment>
	)
}

export default RandomCategory