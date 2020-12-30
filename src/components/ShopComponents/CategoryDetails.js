import React from 'react'

import ItemDetails, {Record} from '../ItemDetails'
import {withApiService} from '../HOC'

const CategoryDetails = (props) => {
	return (
		<ItemDetails {...props}>
			<Record field='description' label='Description' />
			<Record field='visibleIndex' label='Visible index' />
			<Record field='createdDate' label='Date' />
		</ItemDetails>
	)
}

const mapMethodsToProps = (sapApi) => {
	return {
		getData: sapApi.getCategory
	}
} 

export default withApiService(mapMethodsToProps)(CategoryDetails)