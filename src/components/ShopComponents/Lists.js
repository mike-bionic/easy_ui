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

const ResourceList = withData(ItemList, getResources)

const CategoryList = withData(ItemList, getCategories)

const BrandList = withData(ItemList, getBrands)

export {
  ResourceList,
  CategoryList,
  BrandList
}