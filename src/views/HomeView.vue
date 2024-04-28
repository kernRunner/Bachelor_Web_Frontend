<template>
  <HeaderBlock v-if="fetchedData" :name="fetchedData.name" :title="fetchedData.name" :text="fetchedData.description"
    :image="'http://localhost:1337' + fetchedData.image.data.attributes.url" />
  <!-- <InfoBlock v-if="fetchedData" :att="fetchedData.attraction" :act="fetchedData.activity"
    :acc="fetchedData.accomodation"/> -->
  <ContentBlock v-if="fetchedData" id="Attractions" :idBubble="id" :content="fetchedData.attractions.data"
    :description="fetchedData.description" :name="fetchedData.name" :key="reload" />
  <SwiperBox v-if="fetchedData" :name="fetchedData.name"></SwiperBox>
  <!-- <MapPreview v-if="fetchedData" :name="fetchedData.Name" />  -->
  <div class="h-auto w-full flex justify-center" id="Contact">
    <div class="py-16 md:py-32 lg:py-44 max-w-6xl mx-10 my-auto w-full">
      <p class="font-[Oswald] text-secondaryColor font-semibold text-xl uppercase text-center" id="Attractions">ALL
        We're here to help!</p>
      <div className="text-black text-[32px] font-bold font-[SourceSansPro] mt-4 text-center">Still have questions ?
      </div>
      <div class=" bg-secondaryColor rounded-md w-fit m-auto mt-10">
        <a href="mailto: abc@example.com">
          <p class=" text-white p-2 px-12 font-bold">Get in Touch Now!</p>
        </a>
      </div>
    </div>
  </div>
  <UpButton />
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import HeaderBlock from '@/components/Header.vue'
import InfoBlock from '@/components/Info.vue'
import SwiperBox from '@/components/Swiper.vue'
import MapPreview from '@/components/MapPreview.vue'
import FooterText from '@/components/Navigation/Footer.vue'
import UpButton from '@/components/Navigation/upButton.vue'
import ContentBlock from '@/components/Content.vue'

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
    const response = await fetch("http://localhost:1337/api/hotspots/?populate[0]=image&populate[1]=attractions.image&filters[name][$eq]=" + name.value);
    const data = await response.json();
    // console.log(data.data[0].attributes)
    fetchedData.value = data.data[0].attributes;
    console.log(fetchedData.value);

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  forceRerender();
}

</script>
