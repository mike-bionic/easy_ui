import React, {Component} from 'react'

import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'

const withData = (View) => {
	return class extends Component {
		state = {
			data: null,
			error: false,
			loading: true
		}
	
		onError = (err) => {
			console.log(err)
			this.setState({
				error: true,
				loading: false
			})
			console.log(this.state)
		}
		
		componentDidUpdate(prevProps) {
			if (this.props.getData !== prevProps.getData) {
				this.update()
			}
		}

		componentDidMount() {	
			this.update()
		}

		update() {
			this.setState({
				loading: true,
				error: false
			})

			this.props.getData()
			.then((data) => {
				this.setState({
					data,
					loading: false
				})
			})
			.catch(this.onError)
		}
	
		render() {
			const {data, loading, error} = this.state

			const errorView = error ? <ErrorIndicator /> : null
			const spinner = loading ? <Spinner /> : null
			const itemView = !(error || loading) ? <View {...this.props} data={data} /> : null

			return (
				<React.Fragment>
					{errorView}
					{spinner}
					{itemView}
				</React.Fragment>
			)
		}
	}
}

export default withData