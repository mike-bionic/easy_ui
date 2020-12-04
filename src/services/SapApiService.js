class SapApiService {
	
	_apiBase = "http://192.168.1.100:5000"
	_apiPrefix = "/ls/api/"
	// _apiBase = process.env.API_URL
	
	async getApiData(url){
		const response = await fetch(`${this._apiBase}${this._apiPrefix}${url}`)
		if (!response.ok) {
			throw new Error(`Could not fetch ${url}, received ${response.status}`)
		}
		return await response.json()
	}
	
	async getResources() {
		const response = await this.getApiData(`resources/`)
		return response.data.map(this._transformProducts)
	}

	async getResource(id) {
		const response = await this.getApiData(`v-resources/${id}/`)
		return this._transformProducts(response.data)
	}

	async getCategories() {
		const response = await this.getApiData(`tbl-dk-categories/`)
		return response.data.map(this._transformCategory)
	}

	async getCategory(ResCatId) {
		const response = await this.getApiData(`tbl-dk-categories/${ResCatId}/`)
		return this._transformCategory(response.data)
	}

	async getSliders() {
		const response = await this.getApiData(`tbl-dk-sliders/`)
		return response.data.map(this._transformSliders)
	}

	async getSlider(id) {
		const response = await this.getApiData(`tbl-dk-sliders/${id}/`)
		return this._transformSliders(response.data)
	}

	_transformCategory = (category) => {
		return {
			ResCatId: category.ResCatId,
			ResCatName: category.ResCatName,
			IsMain: category.IsMain,
			ResCatVisibleIndex: category.ResCatVisibleIndex,
			CreatedDate: category.CreatedDate,
			CategoryImage: `${this._apiBase}${category.ResCatIconFilePath}`
		}
	}

	_transformProducts = (product) => {
		return {
			ResId: product.ResId,
			ResName: product.ResName,
			ResDesc: product.ResDesc,
			UsageStatusName: product.UsageStatusName,
			ResPriceValue: product.ResPriceValue,
			CreatedDate: product.CreatedDate,
			FilePathS: `${this._apiBase}${product.FilePathS}`
		}
	}

	_transformSliders = (slider) => {
		return {
			SlId: slider.SlId,
			SlName: slider.SlName,
			SlDesc: slider.SlDesc,
			CreatedDate: slider.CreatedDate
		}
	}
}

export default SapApiService