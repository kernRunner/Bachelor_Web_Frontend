<template>
  <div id="Discover" class="h-auto w-full flex justify-center bg-[#F5F5F5] mt-32">
    <div class="pt-16 md:pt-16 lg:pt-432 pb-16 max-w-6xl mx-10 my-auto w-full ">
      <p class="font-[Oswald] font-bold text-gray text-4xl lg:text-4xl md:text-2xl pb-16 lg:pb-16 md:pb-16">Find Your Next <span class="text-secondaryColor">Destination</span></p>
      <Carousel :items-to-show="3" :wrap-around="true">
        <template v-for="slide in fetchedData" :key="slide">
          <Slide v-if="slide.attributes.name != name">
            <div class="carousel__item px-6 py-6 mx-2  bg-white rounded-md">
              <img :src="'http://localhost:1337' + slide.attributes.image.data.attributes.url" class="rounded-[5px] h-56 object-cover" />
              <div class="flex flex-row py-4">
                <p class="text-black text-xl font-bold text-left">{{ slide.attributes.name }}</p>
                <!-- <img src="@/assets/icons/1.svg" alt="" class="w-[38px] h-[38px] relative ml-2 fill-secondaryColor"> -->
              </div>
              <div class="text-ellipsis h-20 overflow-hidden">
                <p class="text-black text-sm font-normal text-left whitespace-normal m-0 line-clamp-3">{{ slide.attributes.description
                }}</p>
              </div>
              <div class="w-[121px] bg-secondaryColor rounded-[10px] my-4 flex p-2">
                <RouterLink :to="{ name: 'contentView', params: { name: slide.attributes.name, country: 'au', id: 0 } }" @click="toTop()">
                  <p class="text-white text-sm font-semibold m-auto">Discover more !</p>
                </RouterLink>
              </div>
            </div>
          </Slide>
        </template>
        <template #addons>
          <Pagination />
          <navigation>
            <template #next>
              <div
                class="border-2 border-black px-2 py-1 rounded-full stroke-black hover:border-secondaryColor hover:stroke-secondaryColor">
                <svg width="49" height="11" viewBox="0 0 49 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.8036 0.999999L48 5.5M48 5.5L43.8036 10M48 5.5L0.999999 5.5" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </template>
            <template #prev>
              <div
                class="border-2 border-black px-2 py-1 rounded-full stroke-black hover:border-secondaryColor hover:stroke-secondaryColor">
                <svg width="49" height="11" viewBox="0 0 49 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.19643 10L1 5.5M1 5.5L5.19643 1M1 5.5H48" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
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
import { onMounted, ref, watch } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

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
    const response = await fetch("http://localhost:1337/api/hotspots?populate=*");
    const data = await response.json();
    // console.log(data.data[1].attributes.image.data.attributes.url)
    fetchedData.value = data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
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