import CategoryWatchImage from './MockImages/category_watch.svg'
import ResourceImage from './MockImages/smartphone.png'
import CompanyImage from './MockImages/company.png'

class MockSapApiService {
	_categories = [
		{
			createdDate: "2020-10-27 17:39:11",
			description: "High speed full power latest laptops",
			id: 5,
			image: CategoryWatchImage,
			isMain: true,
			name: "[Test] Noutbuklar",
			visibleIndex: 0
		},
		{
			createdDate: "2020-10-27 17:39:11",
			description: "smartwatches available from now! hurry up",
			id: 3,
			image: CategoryWatchImage,
			isMain: true,
			name: "[Test] Sagatlar",
			visibleIndex: 0
		},
		{
			createdDate: "2020-10-27 17:39:11",
			description: "Meat freezes insanely fast",
			id: 7,
			image: CategoryWatchImage,
			isMain: false,
			name: "[Test] Sowadyjylar",
			visibleIndex: 0
		}
	]

	_resources = [
		{
			barcode: "2100001000003",
			category: "Smartfonlar",
			createdDate: "2020-10-27 17:39:11",
			description: "iPhone täze model. Ýady:128 Gb, RAM: 32Gb, Kamera: 50 MbPx",
			id: 3,
			image: ResourceImage,
			name: "[Test] iPhone-75",
			price: 5248.5,
			usageStatus: "Işjeň"
		},
		{
			barcode: "2100001000002",
			category: "Nauşniklar",
			createdDate: "2020-10-27 17:39:11",
			description: "Sony Smart Headphone - bu siziň ähli gulaklaryňyzy bezär hem ýüzleriňizi açar. Sazlaryň iň arassa we yokary hilini ýetirmäge ukyply gulaklykdyr.",
			id: 2,
			image: ResourceImage,
			name: "[Test] Sony Smart Headphones",
			price: 300,
			usageStatus: "Işjeň"
		},
		{
			barcode: "2100001000005",
			category: "Sagatlar",
			createdDate: "2020-10-27 17:39:11",
			description: "Smartwatch iWatch Apple Renki: Ak. Taze modeli, magnit konnektrorly, Smart Assistant we kamerasy ichinde jemlenen",
			id: 5,
			image: ResourceImage,
			name: "[Test] iWatch model 2",
			price: 899,
			usageStatus: "Işjeň"
		}

	]

	_brands = [
		{
			createdDate: "2020-11-03 19:04:46",
			description: "A newly progressing company",
			id: 1,
			image: CompanyImage,
			link: "www.sapchozgut.com",
			name: "[Test] Sap chozgut"
		}
	]

	getResources = async () => {
		return this._resources
	}

	getResource = async () => {
		return this._resources[0]
	}

	getCategories = async () => {
		return this._categories
	}

	getCategory = async () => {
		return this._categories[0]
	}

	getBrands = async () => {
		return this._brands
	}

	getBrand = async () => {
		return this._brands[0]
	}

}


export default MockSapApiService