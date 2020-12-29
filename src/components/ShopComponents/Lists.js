import React from 'react'

import ItemList from '../ItemList'
import {withData} from '../HOC'
import SapApiService from '../../services'

const sapApi = new SapApiService

const {
	getResources,
	getCategories,
	getBrands
} = sapApi

const withChildFunction = (Wrapped, fn) => {
	return(props) => {
		return(
			<Wrapped {...props}>
				{fn}
			</Wrapped>
		)
	}
}

const renderName = ({name}) => <span>{name}</span>
const renderNameAndPrice = ({name, price}) => <span>{name} | {price} TMT</span>

const ResourceList = withData(
	withChildFunction(ItemList, renderNameAndPrice), getResources)

const CategoryList = withData(
	withChildFunction(ItemList, renderName), getCategories)

const BrandList = withData(
	withChildFunction(ItemList, renderName), getBrands)

export {
	ResourceList,
	CategoryList,
	BrandList
}