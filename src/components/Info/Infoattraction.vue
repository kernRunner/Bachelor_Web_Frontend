<template>
    <div class="h-auto w-full flex justify-center mt-16">
        <div class="pt-8 pb-16 max-w-6xl mx-4 sm:mx-10 my-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="#destination" class="flex flex-row mx-3">
                <div class="w-auto h-min bg-white rounded-md drop-shadow-lg ">
                    <p class="font-[SourceSansPro] text-3xl font-bold text-secondaryColor w-14 h-14 flex justify-center items-center">1</p>
                </div>
                <div class="pl-3">
                    <p class="font-bold text-lg mb-1">{{ title[0] }}</p>
                    <p class="text-xs sm:text-sm">Discover the best sights and unique landmarks that promise unforgettable experiences.</p>
                </div>
            </a>
            <p class="flex flex-row mx-3">
                <div class="w-auto h-min bg-white rounded-md drop-shadow-lg">
                    <p class="font-[SourceSansPro] text-3xl font-bold text-secondaryColor w-14 h-14 flex justify-center items-center">2</p>
                </div>
                <div class="pl-3">
                    <p class="font-bold text-lg mb-1 ">{{ title[1] }}</p>
                    <p class="text-xs sm:text-sm">Explore top places to stay, blending comfort with local charm.  <span class=" font-semibold"> (Coming Soon)</span></p>
                </div>
            </p>
            <a href="#activity" class="flex flex-row mx-3">
                <div class="w-auto h-min bg-white rounded-md drop-shadow-lg">
                    <p class="font-[SourceSansPro] text-3xl font-bold text-secondaryColor w-14 h-14 flex justify-center items-center">3</p>
                </div>
                <div class="pl-3">
                    <p class="font-bold text-lg mb-1">{{ title[2] }}</p>
                    <p class="text-xs sm:text-sm">Explore a variety of activities, from outdoor adventures to cultural excursions, that cater to all interests.</p>
                </div>
            </a>
        </div>
    </div> 
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref(['Find your Destination', 'Book your Accomodation', 'Create your Activities']);
</script>
