import DefaultImage from './DefaultImage.svg'

class SapApiService {
	
	_apiBase = "http://192.168.1.101:5000"
	_apiPrefix = "/ls/api/"
	// _apiBase = process.env.API_URL
	
	getApiData = async (url) => {
		const response = await fetch(`${this._apiBase}${this._apiPrefix}${url}`)
		if (!response.ok) {
			throw new Error(`Could not fetch ${url}, received ${response.status}`)
		}
		return await response.json()
	}
	
	getResources = async () => {
		const response = await this.getApiData(`resources/?per_page=5`)
		return response.data.map(this._transformResources)
	}

	getResource = async (id) => {
		const response = await this.getApiData(`v-resources/${id}/`)
		return this._transformResources(response.data)
	}

	getCategories = async () => {
		const response = await this.getApiData(`tbl-dk-categories/`)
		return response.data.map(this._transformCategory)
	}

	getCategory = async (ResCatId) => {
		const response = await this.getApiData(`tbl-dk-categories/${ResCatId}/`)
		return this._transformCategory(response.data)
	}

	getBrands = async () => {
		const response = await this.getApiData(`tbl-dk-brands/`)
		return response.data.map(this._transformBrands)
	}

	getBrand = async (id) => {
		const response = await this.getApiData(`tbl-dk-brands/?id=${id}`)
		return this._transformBrands(response.data)
	}

	getApiImage = (image) => {
		if (!image){
			return DefaultImage
		}
		return `${this._apiBase}${image}`
	}

	_transformCategory = (category) => {
		return {
			id: category.ResCatId,
			name: category.ResCatName,
			description: category.ResCatDesc,
			isMain: category.IsMain,
			visibleIndex: category.ResCatVisibleIndex,
			createdDate: category.CreatedDate,
			image: this.getApiImage(category.ResCatIconFilePath)
		}
	}

	_transformResources = (resource) => {
		return {
			id: resource.ResId,
			name: resource.ResName,
			description: resource.ResDesc,
			category: resource.ResCatName,
			usageStatus: resource.UsageStatusName,
			price: resource.ResPriceValue,
			barcode: resource.BarcodeVal,
			createdDate: resource.CreatedDate,
			image: this.getApiImage(resource.FilePathS)
		}
	}

	_transformBrands = (brand) => {
		return {
			id: brand.BrandId,
			name: brand.BrandName,
			description: brand.BrandDesc,
			link: brand.BrandLink1,
			createdDate: brand.CreatedDate,
			image: this.getApiImage(brand.Images[0].FilePathS),
		}
	}
}

export default SapApiService