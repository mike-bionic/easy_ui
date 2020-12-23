import React, {Component} from 'react'

import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'

const withData = (View, getData) => {
	return class extends Component {
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
	
			getData()
				.then((data) => {
						this.setState({
							data
						})
					})
					.catch(this.onError)
		}
	
		render() {
			const {data} = this.state
			if (!data) {
				return <Spinner />
			}
	
			return <View {...this.props} data={data} />
		}
	}
}

export default withData