import React from 'react'

import ItemDetails, {Record} from '../ItemDetails'
import {withApiService} from '../HOC'

const CategoryDetails = ({itemId, sapApi}) => {
	const {getCategory} = sapApi
	return (
		<ItemDetails
			itemId={itemId}
			getData={getCategory} >
			<Record field='description' label='Description' />
			<Record field='visibleIndex' label='Visible index' />
			<Record field='createdDate' label='Date' />
		</ItemDetails>
	)
}

export default withApiService(CategoryDetails)