<template>
    <Navbar :ids="['header', 'Attractions', 'Activities', 'Accomodations']" :nameValue="'Distance Reacher'" />
    <div class="h-auto w-full  flex justify-center  pt-0 sm:pt-32">
        <div class="max-w-6xl mx-10 flex flex-col justify-center w-full">

            <div class="flex max-h-screen py-6 sm:py-16">
                <div class=" w-full sm:pl-8">
                    <div class="md:mt-0 mt-24 md:mb-0 mb-20 mr-8">
                        <p class=" font-bold  text-black text-4xl lg:text-4xl md:text-2xl text-center">Your Personal
                            Collection of <span class="text-secondaryColor">Highlights</span></p>
                    </div>
                    <div class="bg-white">
                        <div v-if="explore" class="mt-4 flex justify-center flex-col items-center text-center">
                            <p>Unleash the potential of favorites! Start building your personalized collection of top
                                destinations and activities today.</p>
                            <RouterLink :to="{ name: 'home', params: { jumpId: 'destination' } }" class="">

                                <div
                                    class="w-fit bg-secondaryColor rounded-[100px] shadow flex items-center justify-around px-5 mt-6 cursor-pointer py-2">
                                    <div
                                        class="text-center text-white text-base font-semibold font-[SourceSansPro]  mx-5">
                                        EXPLORE
                                    </div>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.06545 10.1312L2.75977 2.63917C8.27518 4.24299 13.4763 6.77673 18.1389 10.1312C13.4766 13.4861 8.27583 16.0204 2.76061 17.6248L5.06545 10.1312ZM5.06545 10.1312H11.3974"
                                            stroke="white" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>

                            </RouterLink>
                            <div class=" hidden justify-center my-32 w-full sm:flex">
                                <img src="@/assets/illustration/favorite.svg" alt="" class=" w-1/3">
                            </div>
                        </div>
                        <div v-if="responseFavorite && !explore"
                            class="mt-2 sm:mt-10 w-full flex justify-center items-center">
                            <select v-model="selectedKey"
                                class="p-3 border border-lightgray rounded-xl bg-white w-full sm:w-1/2 md:w-1/3 m-auto">
                                <option value="">Filter</option>
                                <option v-for="(key, index) in uniqueKeys" :key="index" :value="key">{{ key }}</option>
                            </select>
                        </div>
                        <div v-if="responseFavorite && !explore"
                            class="mx-auto grid max-w-7xl gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-10 sm:gap-y-15 md:gap-y-20 lg:gap-y-25 px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20 md:py-24 lg:py-32 xl:grid-cols-3">
                            <ul role="list" class="grid gap-x-8 sm:grid-cols-3 sm:gap-y-8 gap-y-0 xl:col-span-3 ">
                                <template v-for="index in filteredFavorites">
                                    <li v-for="favorites in index.value" :key="currentFetch"
                                        class=" pt-2 sm:pt-0  sm:p-4 ">
                                        <img class="h-auto w-full rounded-2xl aspect-video" :src="favorites.img"
                                            alt="" />
                                        <div class="gap-x-6 p-2">
                                            <div class="flex items-center justify-between">
                                                <RouterLink
                                                    :to="{ name: 'contentView', params: { name: index.key.charAt(0).toUpperCase() + index.key.slice(1), country: 'au', jumpId: favorites.id } }">
                                                    <h3 class="text-xl font-semibold leading-7 tracking-tight ">
                                                        {{ favorites.name }}</h3>
                                                </RouterLink>
                                                <div
                                                    @click="reloadStorage(favorites.id), counter.deleteOne(favorites.id, index.key)">
                                                    <svg v-if="counter.favorite" width="20" height="20"
                                                        viewBox="0 0 20 20">
                                                        <path
                                                            :class="true ? 'stroke-red fill-red' : ' stroke-white fill-none'"
                                                            d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                    <svg v-else width="20" height="20" viewBox="0 0 20 20">
                                                        <path class="stroke-white fill-none"
                                                            d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p class="text-sm font-semibold leading-6 text-indigo-600">
                                                {{ favorites.name }}</p>
                                        </div>
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { useAttractionStore } from '@/stores/favAttraction'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const store = useAttractionStore();
const favLength: any = ref(store.getAllLocalStorageItems());
const counter = useAttractionStore();
const responseFavorite = ref();
const explore = ref(false);
const selectedKey = ref('');  // For binding the dropdown selection

const uniqueKeys = computed(() => {
    const keys = new Set();
    responseFavorite.value.forEach((city: any) => keys.add(city.key));
    return Array.from(keys);
});

const filteredFavorites = computed(() => {
    if (!selectedKey.value) {
        return responseFavorite.value;
    }
    return responseFavorite.value.filter((city: any) => city.key === selectedKey.value);
});


onMounted(() => {
    responseFavorite.value = store.getAllLocalStorageItems();
    checkAllValuesEmpty()

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

watch(() => responseFavorite.value, (newValue) => {
    console.log(responseFavorite.value);
    checkAllValuesEmpty()
});


function reloadStorage(attractionId: number) {
    // Iterate over the array and update each city's attractions
    responseFavorite.value = responseFavorite.value.map((city: any) => ({
        ...city,
        value: city.value.filter((attraction: any) => attraction.id !== attractionId)
    }));

    console.log(responseFavorite.value);
}


const currentFetch = ref(0);


function checkAllValuesEmpty() {
    // Check if every object in the array has an empty 'value' array
    const allEmpty = responseFavorite.value.every((item: any) => item.value.length === 0);

    if (allEmpty) {
        explore.value = true;
    } else {
        explore.value = false;
    }
}

// Example usage
const cities = [
    { "key": "sydney", "value": [] },
    { "key": "melbourne", "value": [] }
];


</script>

<style>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>