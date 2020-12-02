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
		return response.results.map(this._transformProducts)
	}

	async getResource(id) {
		const response = await this.getApiData(`v-resources/${id}/`)
		return this._transformProducts(response)
	}

	async getCategories() {
		const response = await this.getApiData(`tbl-dk-categories/`)
		return response.results.map(this._transformCategory)
	}

	async getCategory(ResCatId) {
		const response = await this.getApiData(`tbl-dk-categories/${ResCatId}/`)
		return this._transformCategory(response)
	}

	async getSliders() {
		const response = await this.getApiData(`tbl-dk-sliders/`)
		return response.results.map(this._transformSliders)
	}

	async getSlider(id) {
		const response = await this.getApiData(`tbl-dk-sliders/${id}/`)
		return this._transformSliders(response)
	}

	_transformCategory(category) {
		return {
			ResCatId: category.data.ResCatId,
			ResCatName: category.data.ResCatName,
			IsMain: category.data.IsMain,
			ResCatVisibleIndex: category.data.ResCatVisibleIndex,
			CreatedDate: category.data.CreatedDate,
			CategoryImage: `${this._apiBase}${category.data.ResCatIconFilePath}`
		}
	}

	_transformProducts(product) {
		return {
			ResId: product.data.ResId,
			ResName: product.data.ResName,
			ResDesc: product.data.ResDesc,
			UsageStatusName: product.data.UsageStatusName,
			ResPriceValue: product.data.ResPriceValue,
			CreatedDate: product.data.CreatedDate,
			FilePathS: `${this._apiBase}${product.data.FilePathS}`
		}
	}

	_transformSliders(slider) {
		return {
			SlId: slider.data.SlId,
			SlName: slider.data.SlName,
			SlDesc: slider.data.SlDesc,
			CreatedDate: slider.data.CreatedDate
		}
	}
}

export default SapApiService