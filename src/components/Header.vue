<template>
  
    <div class="overflow-x-hidden max-w-screen relative h-full min-h-[680px]" id="header">
        <svg width="2648" viewBox="0 0 2648 680" fill="none"
            class="fill-[#F5F5F5] absolute top-0 left-[-350px] sm:left-[-250px] 2xl:ml-[-1224px]  2xl:left-[50vw]">
            <path
                d="M383.5 608L0.5 0H270H2647.5C2647.5 0 2629.5 208 2550 286C2470.5 364 2294.5 411 2262.5 417C2230.5 423 1772 502.5 1772 502.5L1058.5 608C887.5 632.333 544.037 679 493 679C433 679 405.5 640 383.5 608Z" />
        </svg>
        <div class="h-auto w-full flex justify-center">
            <div class="pt-16 md:pt-32 lg:pt-44 pb-16 max-w-6xl mx-10 my-auto w-full">
                <div class="mt-16 relative grid grid-cols-2 ">
                    <div class="md:mt-0 mt-24 md:mb-0 mb-20 mr-8">
                        <p class="font-[Oswald] font-bold  text-gray text-4xl lg:text-4xl md:text-2xl"><span class="text-secondaryColor">Discover {{ name }} -</span> {{ title }} </p>
                        <p class="mr-8 mt-8">{{ text }}</p>
                    </div>
                    <div class="imgAnimaton rounded-[25px] overflow-hidden">
                        <img :src="image" alt="" class="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- <script setup lang="ts">
import testBtn from './buttons/testen.vue';
</script> -->

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

console.log(props.image)


</script>

<style>
.imgAnimaton {
  transform:
    perspective(800px)
    rotateY(-8deg);
  transition: transform 1s ease 0s;
  box-shadow:
    rgba(0, 0, 0, 0.024) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.05) 0px 1px 0px 0px,
    rgba(0, 0, 0, 0.03) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.1) 0px 20px 30px 0px;
}
.imgAnimaton:hover {
    transform: perspective(800px) rotateY(-4deg);
  }
</style>
