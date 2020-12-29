import React from 'react'

import ItemList from '../ItemList'
import {
	withData,
	withApiService,
	withChildFunction,
	compose
} from '../HOC'

const renderName = ({name}) => <span>{name}</span>
const renderNameAndPrice = ({name, price}) => <span>{name} | {price} TMT</span>

const mapResourceMethodsToProps = (sapApi) => {
	return {
		getData: sapApi.getResources
	}
}
 
const mapBrandMethodsToProps = (sapApi) => {
	return {
		getData: sapApi.getBrands
	}
}

const mapCategoryMethodsToProps = (sapApi) => {
	return {
		getData: sapApi.getCategories
	}
}

const ResourceList = compose(
		withApiService(mapResourceMethodsToProps),
		withData,
		withChildFunction(renderNameAndPrice)
	)(ItemList)

const CategoryList = compose(
		withApiService(mapCategoryMethodsToProps),
		withData,
		withChildFunction(renderName)
	)(ItemList)

const BrandList = compose(
		withApiService(mapBrandMethodsToProps),
		withData,
		withChildFunction(renderName)
	)(ItemList)

export {
	ResourceList,
	CategoryList,
	BrandList
}