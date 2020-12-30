import React from 'react'

import ItemDetails, {Record} from '../ItemDetails'
import {withApiService} from '../HOC'

const BrandDetails = (props) => {
	return (
		<ItemDetails {...props}>
			<Record field='description' label='Description' />
			<Record field='link' label='Link' />
		</ItemDetails>
	)
}

const mapMethodsToProps = (sapApi) => {
	return {
		getData: sapApi.getBrand
	}
} 

export default withApiService(mapMethodsToProps)(BrandDetails)