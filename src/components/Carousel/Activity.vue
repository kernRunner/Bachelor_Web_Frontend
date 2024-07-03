<template>
	<div id="activity" class="h-auto w-full flex justify-center mt-16 sm:mt-16 md:mt-32 bg-[#F5F5F5]">
		<div class="pt-8 md:pt-16 lg:pt-16 pb-8 md:pb-16 max-w-6xl mx-4 sm:mx-10 w-full">
			<!-- <p class="font-[Oswald] font-bold text-gray text-2xl md:text-3xl lg:text-4xl pb-4 md:pb-8">Outdoor <span class="text-secondaryColor">Activities</span></p> -->
			<Carousel :items-to-show="itemShow" :wrap-around="true" :start-position="2">
				<template v-for="data in json.data" :key="slide">
					<Slide aria-hidden="false">
						<div class="carousel__item w-full mx-6">
							<a :href="data.webURL" target="_blank" class="relative ">
								<div class="relative ">
									<p class="absolute rounded-md bottom-0 text-overlay pt-4">{{ data.title }}</p>
									<img :src="data.thumbnailHiResURL"
										class="rounded-md h-40 md:h-56 w-full object-cover " :alt="data.pageUrlName"/>
								</div>
							</a>
						</div>
					</Slide>
				</template>
				<template #addons>
					<Pagination />
					<navigation>
						<template #next>
							<div
								class="border-2 border-black px-2 py-1 rounded-full stroke-black hover:border-secondaryColor hover:stroke-secondaryColor">
								<svg width="49" height="11" viewBox="0 0 49 11" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M43.8036 0.999999L48 5.5M48 5.5L43.8036 10M48 5.5L0.999999 5.5"
										stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</div>
						</template>
						<template #prev>
							<div
								class="border-2 border-black px-2 py-1 rounded-full stroke-black hover:border-secondaryColor hover:stroke-secondaryColor">
								<svg width="49" height="11" viewBox="0 0 49 11" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M5.19643 10L1 5.5M1 5.5L5.19643 1M1 5.5H48" stroke-width="2"
										stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</div>
						</template>
					</navigation>
				</template>
			</Carousel>
		</div>
	</div>
</template>



<script lang="ts" setup>
import { onMounted, ref, watch, inject } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const myGlobalVariable: any = inject('endpointUrl');
const itemShow = ref(3);


const updateItemsToShow = () => {
	const width = window.innerWidth;
	if (width < 640) {
		itemShow.value = 1;
	} else if (width < 1024) {
		itemShow.value = 2;
	} else {
		itemShow.value = 3;
	}
};

onMounted(() => {
	updateItemsToShow();
	window.addEventListener('resize', updateItemsToShow);
});

const json = ref({
	"errorReference": null,
	"data": [
		{
			"sortOrder": 37,
			"webURL": "http://www.viator.com/Uluru-attractions/Uluru-Kata-Tjuta-National-Park/d359-a2598?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Uluru-Kata-Tjuta-National-Park",
			"primaryDestinationUrlName": "Uluru",
			"publishedDate": "2010-08-09",
			"attractionLatitude": -25.31613802,
			"attractionLongitude": 131.0346877,
			"attractionStreetAddress": null,
			"attractionCity": "Petermann",
			"attractionState": "Northern Territory",
			"destinationId": 359,
			"seoId": 2598,
			"productCount": 24,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/65/da.jpg",
			"photoCount": 1,
			"primaryDestinationId": 359,
			"rating": 4.62,
			"primaryDestinationName": "Uluru",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/0b/27/65/db.jpg",
			"title": "Uluru-Kata Tjuta National Park"
		},
		{
			"sortOrder": 9,
			"webURL": "http://www.viator.com/Perth-attractions/Wave-Rock/d389-a14497?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Wave-Rock",
			"primaryDestinationUrlName": "Perth",
			"publishedDate": "2014-07-21",
			"attractionLatitude": -32.4436363,
			"attractionLongitude": 118.8975039,
			"attractionStreetAddress": "Wave Rock Wildlife Park",
			"attractionCity": "Hyden",
			"attractionState": "Western Australia",
			"destinationId": 389,
			"seoId": 14497,
			"productCount": 10,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/0b/2d/02/6a.jpg",
			"photoCount": 1,
			"primaryDestinationId": 389,
			"rating": 4.69,
			"primaryDestinationName": "Perth",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/0b/2d/02/6b.jpg",
			"title": "Wave Rock"
		},
		{
			"sortOrder": 1,
			"webURL": "http://www.viator.com/Cairns-and-the-Tropical-North-attractions/Great-Barrier-Reef/d754-a1443?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Great-Barrier-Reef",
			"primaryDestinationUrlName": "Cairns-and-the-Tropical-North",
			"publishedDate": "2010-08-09",
			"attractionLatitude": -17.97241604,
			"attractionLongitude": 147.7147537,
			"attractionStreetAddress": null,
			"attractionCity": null,
			"attractionState": "Queensland",
			"destinationId": 754,
			"seoId": 1443,
			"productCount": 65,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/12/3f/40/9b.jpg",
			"photoCount": 1,
			"primaryDestinationId": 754,
			"rating": 4.6,
			"primaryDestinationName": "Cairns & the Tropical North",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/12/3f/40/9c.jpg",
			"title": "Great Barrier Reef"
		},
		{
			"sortOrder": 3,
			"webURL": "http://www.viator.com/Sydney-attractions/Sydney-Opera-House/d357-a106?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Sydney-Opera-House",
			"primaryDestinationUrlName": "Sydney",
			"publishedDate": "2010-06-17",
			"attractionLatitude": -33.8566151,
			"attractionLongitude": 151.2153718,
			"attractionStreetAddress": "Bennelong Point",
			"attractionCity": "Sydney",
			"attractionState": "New South Wales",
			"destinationId": 357,
			"seoId": 106,
			"productCount": 188,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/12/3f/5b/27.jpg",
			"photoCount": 1,
			"primaryDestinationId": 357,
			"rating": 4.69,
			"primaryDestinationName": "Sydney",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/12/3f/5b/28.jpg",
			"title": "Sydney Opera House"
		},
		{
			"sortOrder": 4,
			"webURL": "http://www.viator.com/Sydney-attractions/Sydney-Harbour-Bridge/d357-a285?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Sydney-Harbour-Bridge",
			"primaryDestinationUrlName": "Sydney",
			"publishedDate": "2010-08-09",
			"attractionLatitude": -33.85211947,
			"attractionLongitude": 151.2111584,
			"attractionStreetAddress": null,
			"attractionCity": "Sydney",
			"attractionState": "New South Wales",
			"destinationId": 357,
			"seoId": 285,
			"productCount": 206,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/55/30.jpg",
			"photoCount": 1,
			"primaryDestinationId": 357,
			"rating": 4.69,
			"primaryDestinationName": "Sydney",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/0b/27/55/31.jpg",
			"title": "Sydney Harbour Bridge"
		},
		{
			"sortOrder": 6,
			"webURL": "http://www.viator.com/Melbourne-attractions/Great-Ocean-Road/d384-a102?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Great-Ocean-Road",
			"primaryDestinationUrlName": "Melbourne",
			"publishedDate": "2010-06-17",
			"attractionLatitude": -38.6802677,
			"attractionLongitude": 143.3916661,
			"attractionStreetAddress": "Great Ocean Road",
			"attractionCity": null,
			"attractionState": "Victoria",
			"destinationId": 384,
			"seoId": 102,
			"productCount": 70,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/12/3f/b7/9c.jpg",
			"photoCount": 1,
			"primaryDestinationId": 384,
			"rating": 4.85,
			"primaryDestinationName": "Melbourne",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/12/3f/b7/9d.jpg",
			"title": "Great Ocean Road"
		},
		{
			"sortOrder": 10,
			"webURL": "http://www.viator.com/Melbourne-attractions/Twelve-Apostles/d384-a392?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Twelve-Apostles",
			"primaryDestinationUrlName": "Melbourne",
			"publishedDate": "2010-08-09",
			"attractionLatitude": -38.65955468,
			"attractionLongitude": 143.1052634,
			"attractionStreetAddress": "Port Campbell National Park",
			"attractionCity": "Port Campbell",
			"attractionState": "Victoria",
			"destinationId": 384,
			"seoId": 392,
			"productCount": 82,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/5a/47.jpg",
			"photoCount": 1,
			"primaryDestinationId": 384,
			"rating": 4.83,
			"primaryDestinationName": "Melbourne",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/0b/27/5a/48.jpg",
			"title": "Twelve Apostles"
		},
		{
			"sortOrder": 58,
			"webURL": "http://www.viator.com/Blue-Mountains-attractions/Blue-Mountains-National-Park/d5402-a12121?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Blue-Mountains-National-Park",
			"primaryDestinationUrlName": "Blue-Mountains",
			"publishedDate": "2013-11-04",
			"attractionLatitude": -33.67580596,
			"attractionLongitude": 150.353146,
			"attractionStreetAddress": null,
			"attractionCity": null,
			"attractionState": "New South Wales",
			"destinationId": 5402,
			"seoId": 12121,
			"productCount": 27,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/12/3f/5d/67.jpg",
			"photoCount": 1,
			"primaryDestinationId": 5402,
			"rating": 4.89,
			"primaryDestinationName": "Blue Mountains",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/12/3f/5d/68.jpg",
			"title": "Blue Mountains National Park"
		},
		{
			"sortOrder": 13,
			"webURL": "http://www.viator.com/The-Whitsundays-and-Hamilton-Island-attractions/Whitehaven-Beach/d753-a1433?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Whitehaven-Beach",
			"primaryDestinationUrlName": "The-Whitsundays-and-Hamilton-Island",
			"publishedDate": "2010-08-09",
			"attractionLatitude": -20.28124084,
			"attractionLongitude": 149.0383824,
			"attractionStreetAddress": null,
			"attractionCity": "Whitsunday Island",
			"attractionState": "Queensland",
			"destinationId": 753,
			"seoId": 1433,
			"productCount": 32,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/59/1e.jpg",
			"photoCount": 1,
			"primaryDestinationId": 753,
			"rating": 4.59,
			"primaryDestinationName": "The Whitsundays & Hamilton Island",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/0b/27/59/1f.jpg",
			"title": "Whitehaven Beach"
		},
		{
			"sortOrder": 15,
			"webURL": "http://www.viator.com/Sydney-attractions/Bondi-Beach/d357-a297?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Bondi-Beach",
			"primaryDestinationUrlName": "Sydney",
			"publishedDate": "2010-08-09",
			"attractionLatitude": -33.89125394,
			"attractionLongitude": 151.2767373,
			"attractionStreetAddress": null,
			"attractionCity": "Sydney",
			"attractionState": "New South Wales",
			"destinationId": 357,
			"seoId": 297,
			"productCount": 79,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/55/91.jpg",
			"photoCount": 1,
			"primaryDestinationId": 357,
			"rating": 4.77,
			"primaryDestinationName": "Sydney",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/0b/27/55/92.jpg",
			"title": "Bondi Beach"
		},
		{
			"sortOrder": 39,
			"webURL": "http://www.viator.com/Western-Australia-attractions/Esperance/d126-a14499?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Esperance Image",
			"primaryDestinationUrlName": "Western-Australia",
			"publishedDate": "2014-07-21",
			"attractionLatitude": -33.85936565,
			"attractionLongitude": 121.8911276,
			"attractionStreetAddress": null,
			"attractionCity": "Esperance",
			"attractionState": "Western Australia",
			"destinationId": 126,
			"seoId": 14499,
			"productCount": 4,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/0b/2c/fd/88.jpg",
			"photoCount": 1,
			"primaryDestinationId": 126,
			"rating": 4.76,
			"primaryDestinationName": "Western Australia",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/0b/2c/fd/89.jpg",
			"title": "Esperance"
		},
		{
			"sortOrder": 21,
			"webURL": "http://www.viator.com/Uluru-attractions/Ayers-Rock-Uluru/d359-a2594?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Ayers-Rock-Uluru",
			"primaryDestinationUrlName": "Uluru",
			"publishedDate": "2010-08-09",
			"attractionLatitude": -25.3239772,
			"attractionLongitude": 131.037816,
			"attractionStreetAddress": "Uluru-Kata Tjuta National Park",
			"attractionCity": "Petermann",
			"attractionState": "Northern Territory",
			"destinationId": 359,
			"seoId": 2594,
			"productCount": 11,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/6e/cf.jpg",
			"photoCount": 1,
			"primaryDestinationId": 359,
			"rating": 4.55,
			"primaryDestinationName": "Uluru",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/0b/27/6e/d0.jpg",
			"title": "Uluru (Ayers Rock)"
		},
		{
			"sortOrder": 24,
			"webURL": "http://www.viator.com/Hobart-attractions/Bruny-Island/d379-a374?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Bruny-Island",
			"primaryDestinationUrlName": "Hobart",
			"publishedDate": "2010-08-09",
			"attractionLatitude": -43.36642912,
			"attractionLongitude": 147.2679632,
			"attractionStreetAddress": null,
			"attractionCity": null,
			"attractionState": "Tasmania",
			"destinationId": 379,
			"seoId": 374,
			"productCount": 14,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/5a/70.jpg",
			"photoCount": 1,
			"primaryDestinationId": 379,
			"rating": 4.88,
			"primaryDestinationName": "Hobart",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/0b/27/5a/72.jpg",
			"title": "Bruny Island"
		},
		{
			"sortOrder": 35,
			"webURL": "http://www.viator.com/Port-Douglas-attractions/Daintree-Rainforest/d787-a1819?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Daintree-Rainforest",
			"primaryDestinationUrlName": "Port-Douglas",
			"publishedDate": "2010-08-09",
			"attractionLatitude": -16.16669966,
			"attractionLongitude": 145.4183419,
			"attractionStreetAddress": null,
			"attractionCity": null,
			"attractionState": "Queensland",
			"destinationId": 787,
			"seoId": 1819,
			"productCount": 24,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/69/b7.jpg",
			"photoCount": 1,
			"primaryDestinationId": 787,
			"rating": 4.81,
			"primaryDestinationName": "Port Douglas",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/0b/27/69/bb.jpg",
			"title": "Daintree Rainforest"
		},
		{
			"sortOrder": 48,
			"webURL": "http://www.viator.com/Rainbow-Beach-attractions/Fraser-Island/d24032-a338?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Fraser-Island",
			"primaryDestinationUrlName": "Rainbow-Beach",
			"publishedDate": "2010-08-09",
			"attractionLatitude": -25.17408816,
			"attractionLongitude": 153.1457704,
			"attractionStreetAddress": null,
			"attractionCity": "Fraser Island",
			"attractionState": "Queensland",
			"destinationId": 24032,
			"seoId": 338,
			"productCount": 12,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/61/50.jpg",
			"photoCount": 1,
			"primaryDestinationId": 24032,
			"rating": 4.89,
			"primaryDestinationName": "Rainbow Beach",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/0b/27/61/51.jpg",
			"title": "Fraser Island"
		},
		{
			"sortOrder": 75,
			"webURL": "http://www.viator.com/Noosa-and-Sunshine-Coast-attractions/Noosa-Everglades/d374-a2631?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Noosa-Everglades",
			"primaryDestinationUrlName": "Noosa-and-Sunshine-Coast",
			"publishedDate": "2010-08-09",
			"attractionLatitude": -26.36706476,
			"attractionLongitude": 153.0113969,
			"attractionStreetAddress": "Cooloola National Park",
			"attractionCity": null,
			"attractionState": "Queensland",
			"destinationId": 374,
			"seoId": 2631,
			"productCount": 3,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/11/66/03/35.jpg",
			"photoCount": 1,
			"primaryDestinationId": 374,
			"rating": 4.68,
			"primaryDestinationName": "Noosa & Sunshine Coast",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/11/66/03/36.jpg",
			"title": "Noosa Everglades"
		},
		{
			"sortOrder": 98,
			"webURL": "http://www.viator.com/Coles-Bay-attractions/Freycinet-National-Park/d4741-a3742?pid=P00192029&medium=api&mcid=42383&api_version=2.0",
			"pageUrlName": "Freycinet-National-Park",
			"primaryDestinationUrlName": "Coles-Bay",
			"publishedDate": "2011-02-21",
			"attractionLatitude": -42.13027584,
			"attractionLongitude": 148.3123284,
			"attractionStreetAddress": null,
			"attractionCity": null,
			"attractionState": "Tasmania",
			"destinationId": 4741,
			"seoId": 3742,
			"productCount": 10,
			"thumbnailHiResURL": "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/73/61.jpg",
			"photoCount": 1,
			"primaryDestinationId": 4741,
			"rating": 4.62,
			"primaryDestinationName": "Coles Bay",
			"thumbnailURL": "https://media.tacdn.com/media/attractions-splice-spp-154x109/0b/27/73/62.jpg",
			"title": "Freycinet National Park"
		}
	],
	"dateStamp": "2024-05-14T05:21:49+0000",
	"errorType": null,
	"errorCodes": [],
	"errorMessage": null,
	"errorName": null,
	"extraInfo": {},
	"extraObject": null,
	"success": true,
	"totalCount": 756,
	"errorMessageText": null,
	"vmid": "331099"
})





</script>

<style>
.carousel__prev,
.carousel__next {
	top: 100% !important;
}

.carousel__prev {
	margin-left: 30px;
}

.carousel__next {
	margin-right: 30px;
}

.carousel__pagination {
	margin-top: 30px !important;
}

.carousel__pagination-item {
	width: 15px !important;
	height: 15px !important;
	background-color: none !important;
	margin: 2px !important;
}

.carousel__pagination-button {
	width: 15px !important;
	height: 15px !important;
	padding: 0px !important;
	margin: 0px !important;
	border: 2px Solid black;
	border-radius: 100px;
	background-color: none !important;
}
@media only screen and (max-width: 600px) {
	.carousel__pagination-button {
		display: none;
	}
	.carousel__pagination {
		margin-top: 10px !important;
	}
	.carousel__prev {
		margin-left: 50px;
	}

	.carousel__next {
		margin-right: 50px;
	}
}

.carousel__pagination-button::after {
	background-color: transparent !important;
}

.carousel__pagination-button:hover {
	background-color: black !important;
}

.carousel__pagination-button--active {
	background-color: black;
}

.text-overlay {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 12px;
	color: white;
	font-size: 18px;
	/* or 1.125rem */
	font-weight: bold;
	background-image: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
}
</style>