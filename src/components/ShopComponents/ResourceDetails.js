import React from 'react'

import ItemDetails, {Record} from '../ItemDetails'
import {withApiService} from '../HOC'

const ResourceDetails = (props) => {
	return (
		<ItemDetails {...props}>
			<Record field='category' label='Category' />
			<Record field='price' label='Price' />
			<Record field='barcode' label='Barcode' />
		</ItemDetails>
	)
}

const mapMethodsToProps = (sapApi) => {
	return {
		getData: sapApi.getResource
	}
} 

export default withApiService(mapMethodsToProps)(ResourceDetails)