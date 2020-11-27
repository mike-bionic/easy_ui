class SapApiService {
	
	_apiBase = "http://127.0.0.1:5000/ls/api"
	
	async getApiData(url){
		const res = await fetch(`${this._apiBase}${url}`)
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)
		}
		return await res.json()
	}
	
	async getResources() {
		const res = await this.getApiData(`/resources/`)
		return res
	}

	async getResource(ResId) {
		const res = await this.getApiData(`/v-resources/${ResId}/`)
		return res
	}

	async getCategories() {
		const res = await this.getApiData(`/tbl-dk-categories/`)
		return res
	}

	async getCategory(ResCatId) {
		const res = await this.getApiData(`/tbl-dk-categories/${ResCatId}/`)
		return res
	}

	async getSliders() {
		const res = await this.getApiData(`/tbl-dk-sliders/`)
		return res
	}
}

// const sapApi = new SapApiService()

// sapApi.getResources().then((resources) => {
// 	resources.data.forEach((resource) => {
// 		console.log(resource.ResName)
// 	})
// })

// sapApi.getResource(2).then((resource) => {
// 	console.log(resource.data.ResName)
// })

// sapApi.getCategory(2).then((category) => {
// 	console.log(category.data.ResCatName)
// })

// sapApi.getCategories().then((categories) => {
// 	console.log(categories)
// })

// sapApi.getSliders().then((sliders) => {
// 	console.log(sliders)
// })