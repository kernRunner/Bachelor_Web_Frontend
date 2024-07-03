<template>
  <div id="Discover" class="h-auto w-full flex justify-center mt-8 sm:mt-16 md:mt-16">
    <div class="pt-8 md:pt-16 lg:pt-32 pb-8 md:pb-16 max-w-6xl mx-4 sm:mx-10 w-full">

      <p class="font-[Oswald] font-bold text-gray text-2xl md:text-3xl lg:text-4xl pb-4 md:pb-8">Find Your Next <span class="text-secondaryColor">Destination</span></p>
      <Carousel :items-to-show="3" :wrap-around="true">
        <template v-for="slide in fetchedData" :key="slide">
          <Slide v-if="slide.attributes.name != name">
            <div class="carousel__item px-4 md:px-6 py-4 md:py-6 mx-1 md:mx-2 rounded-md bg-[#F5F5F5]">
              <img :src="myGlobalVariable.substring(0, myGlobalVariable.length - 1) + slide.attributes.image.data.attributes.url" class="rounded-[5px] h-40 md:h-56 w-full object-cover" />
              <div class="flex flex-row py-2 md:py-4">
                <p class="text-black text-lg md:text-xl font-bold text-left">{{ slide.attributes.name }}</p>
              </div>
              <div class="text-ellipsis h-16 md:h-20 overflow-hidden">
                <p class="text-black text-xs md:text-sm font-normal text-left whitespace-normal m-0 line-clamp-3">{{ slide.attributes.description }}</p>
              </div>
              <div class="w-[121px] rounded-[10px] my-2 md:my-4 flex p-2 b-1 border">
                <RouterLink :to="{ name: 'contentView', params: { name: slide.attributes.name, country: 'au', id: 0 } }" @click="toTop()">
                  <p class="text-black text-xs md:text-sm font-semibold m-auto">Discover more!</p>
                </RouterLink>
              </div>
            </div>
          </Slide>
        </template>
        <template #addons>
          <Pagination />
          <navigation>
            <template #next>
              <div class="border-2 border-black px-2 py-1 rounded-full stroke-black hover:border-secondaryColor hover:stroke-secondaryColor">
                <svg width="49" height="11" viewBox="0 0 49 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.8036 0.999999L48 5.5M48 5.5L43.8036 10M48 5.5L0.999999 5.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </template>
            <template #prev>
              <div class="border-2 border-black px-2 py-1 rounded-full stroke-black hover:border-secondaryColor hover:stroke-secondaryColor">
                <svg width="49" height="11" viewBox="0 0 49 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.19643 10L1 5.5M1 5.5L5.19643 1M1 5.5H48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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

const myGlobalVariable:any = inject('endpointUrl');

const props = defineProps({
  name: {
    type: String,
    required: true,
  }
})



const jsonData: any = ref([]);

const fetchedData = ref();

onMounted(() => {
  fetchData()
})



async function fetchData() {
  try {
    const response = await fetch(myGlobalVariable + "api/hotspots?populate=*");
    const data = await response.json();
    // console.log(data.data[1].attributes.image.data.attributes.url)
    fetchedData.value = data.data;
    shuffleArray(fetchedData.value);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function shuffleArray(array:any) {
    for (let i = fetchedData.value.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
        [fetchedData.value[i], fetchedData.value[j]] = [fetchedData.value[j], fetchedData.value[i]]; // Swap elements
    }
    return fetchedData.value;
}


function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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
  width: 12px !important;
  height: 12px !important;
  background-color: none !important;
  margin: 2px !important;
}

.carousel__pagination-button {
  width: 12px !important;
  height: 12px !important;
  padding: 0px !important;
  margin: 0px !important;
  border: 2px Solid black;
  border-radius: 100px;
  background-color: none !important;
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
</style>