<template>
  <Meta  v-if="fetchedData"
        :title="fetchedData.meta.title" 
        :description="fetchedData.meta.description" 
        :keywords="fetchedData.meta.keywords"
    />
  <div id="start" class="h-[50vh] min-h-[50vh] w-full flex justify-center bg-[#F5F5F5] relative">
    <img v-if="fetchedData"
      :src="myGlobalVariable.substring(0, myGlobalVariable.length - 1) + fetchedData.image.data.attributes.url"
      alt="Background Image" class="absolute top-0 left-0 w-full h-full object-cover z-0">
    <div class="mp-8 md:mp-16 lg:mp-32 mb-8 md:mb-16 max-w-6xl mx-4 sm:mx-10 w-full flex items-center z-10">
      <div class="w-full sm:w-full px-4 sm:px-2">
        <div v-if="fetchedData"
          class="text-left text-gray-900 text-5xl sm:text-6xl md:text-8xl font-semibold font-[Oswald] text-white uppercase drop-shadow-lg">
          {{ fetchedData.name }}
        </div>
      </div>
    </div>
  </div>

  <div v-if="fetchedData" class="h-auto justify-center flex" id="info_content">
    <div class="pt-16 sm:pt-32 max-w-6xl mx-2 sm:mx-10 my-auto w-full">
      <div
        class="w-full h-auto font-[SourceSansPro] mr-6 flex flex-col justify-center items-center px-4 sm:px-16 md:px-32">
        <p class="text-xl sm:text-2xl md:text-3xl">Everything to know about</p>
        <p class="text-2xl sm:text-3xl md:text-4xl mt-3 font-bold uppercase">{{ fetchedData.name }}</p>
        <p class="mt-8 text-center text-sm sm:text-base md:text-base">Welcome to our travel app, where your bookings
          make a difference! Every time you book through us, we donate our affiliate earnings to charity. You don't pay
          extra, but you make a difference with every trip. Let's explore and give back together!</p>
      </div>
    </div>
  </div>

  <InfoBlock />
  <ContentBlock v-if="fetchedData" id="Attractions" :idBubble="id" :content="fetchedData.attractions.data"
    :description="fetchedData.description" :name="fetchedData.name" :key="reload" />
  <CarouselActivities v-if="fetchedData" :content="fetchedData.activities" />
  <div class="h-auto w-full flex justify-center" id="Contact">
    <div class="py-16 md:py-32 lg:py-44 max-w-6xl mx-10 my-auto w-full">
      <p class="font-[Oswald] text-secondaryColor font-semibold text-xl uppercase text-center" id="Attractions">ALL
        We're here to help!</p>
      <div className="text-black text-[32px] font-bold font-[SourceSansPro] mt-4 text-center">Still have questions ?
      </div>
      <div class=" bg-secondaryColor rounded-md w-fit m-auto mt-10">
        <a href="mailto:impactfulvoyage@gmail.com" target="_blank">
          <p class=" text-white p-2 px-12 font-bold">Get in Touch Now!</p>
        </a>
      </div>
    </div>
  </div>
  <UpButton />
</template>

<script setup lang="ts">
import { onMounted, ref, watch, inject } from 'vue'
import InfoBlock from '@/components/Info/Infoattraction.vue'
import CarouselActivities from '@/components/Carousel/Content.vue'
import FooterText from '@/components/Navigation/Footer.vue'
import UpButton from '@/components/Navigation/upButton.vue'
import ContentBlock from '@/components/Content.vue'
import Meta from '@/components/metadata.vue'

import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }

})

const route = useRoute();
const router = useRouter();
const emit = defineEmits(['name'])

const name = ref(route.params.name);
const countryKey = ref(route.params.country);
const fetchedData = ref();
const imgLink = ref();
const myGlobalVariable: any = inject('endpointUrl');


onMounted(() => {

  fetchData()

  emit('name', name.value);

  console.log("props.id:", props.id);

  const elementId: any = router.currentRoute.value.query.id; // Access the query parameter
  const element = document.getElementById(elementId);



  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

})

watch(() => route.params.name, (newValue) => {
  name.value = route.params.name;
  fetchData();

  emit('name', props.name)
});


const reload = ref(0);

const forceRerender = () => {
  reload.value += 1;
};



async function fetchData() {
  try {
    const response = await fetch(myGlobalVariable + "api/hotspots/?populate[0]=image&populate[1]=attractions.image&filters[name][$eq]=" + name.value + "&populate[2]=activities&populate[3]=meta");
    const data = await response.json();
    // console.log(data.data[0].attributes)
    fetchedData.value = data.data[0].attributes;
    imgLink.value = myGlobalVariable.substring(0, myGlobalVariable.length - 1) + fetchedData.value.image.data.attributes.url
    console.log(fetchedData.value);

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  forceRerender();
}





</script>


