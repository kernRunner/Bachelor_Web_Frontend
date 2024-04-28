<template>
    <div class="h-auto w-full  flex justify-center" id="Info">
        <div class="pt-48 pb-16 max-w-6xl mx-10 my-auto flex flex-col justify-center">
            <p class="font-[Oswald] text-center text-secondaryColor font-semibold text-lg uppercase">ALL ATTRACTIONS AND HOSTEL</p>
            <p class="font-[SourceSansPro] text-center text-3xl font-bold">Explore</p>            
            
            <!-- <p class="font-[Oswald] text-center font-semibold text-xl uppercase">All About</p>
            <p class="font-[SourceSansPro] text-secondaryColor text-center text-5xl font-bold ">Otago</p> -->
        </div>
    </div>
    <div class="h-auto w-full flex justify-center">
        <div class="md:pt-16 pt-8 pb-16 max-w-6xl mx-10 my-auto justify-center flex-col md:flex-row grid grid-cols-3">
            <div class="flex mx-3  md:my-0 my-4">
                <div class="lg:min-w-[69px] lg:min-h-[69px] lg:max-w-[69px] lg:max-h-[69px] min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] bg-white rounded-md drop-shadow-lg">
                    <img src="@/assets/icons/LockIcon.svg" alt="" class="w-full p-2">
                </div>
                <div class="pl-3">
                    <p class="font-bold text-2xl mb-1">{{ title[0] }}</p>
                    <p class="text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                </div>
            </div>
            <div class="flex mx-3  md:my-0 my-4">
                <div class="lg:min-w-[69px] lg:min-h-[69px] lg:max-w-[69px] lg:max-h-[69px] min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] bg-white rounded-md drop-shadow-lg">
                    <img src="@/assets/icons/Question.svg" alt="" class="w-full p-2">
                </div>
                <div class="pl-3">
                    <p class="font-bold text-2xl mb-1">{{ title[1] }}</p>
                    <p class="text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                </div>
            </div>
            <div class="flex mx-3  md:my-0 my-4">
                <div class="lg:min-w-[69px] lg:min-h-[69px] lg:max-w-[69px] lg:max-h-[69px] min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] bg-white rounded-md drop-shadow-lg">
                    <img src="@/assets/icons/Reality.svg" alt="" class="w-full p-2">
                </div>
                <div class="pl-3">
                    <p class="font-bold text-2xl mb-1">{{ title[2] }}</p>
                    <p class="text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                </div>
            </div>
        </div>
    </div> 
</template>

<script setup lang="ts">

import { ref } from 'vue';
const title = ref(['Attractions', 'Activities' , 'Accomodations']);

</script>