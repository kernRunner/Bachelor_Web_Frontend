<template>
    <Navbar :ids="['header', 'Attractions', 'Activities', 'Accomodations']" :nameValue="'Distance Reacher'" />
    <div class="h-auto w-full  flex justify-center pt-20">
        <div class="max-w-6xl mx-10 flex flex-col justify-center w-full">

            <div class="flex max-h-screen py-16">
                <div class=" w-full pl-8">
                    <div class="md:mt-0 mt-24 md:mb-0 mb-20 mr-8">
                        <p class="font-[Oswald] font-bold  text-gray text-4xl lg:text-4xl md:text-2xl">Your Personal
                            Collection of <span class="text-secondaryColor">Highlights</span></p>
                    </div>
                    <div class="bg-white">
                        <div v-if="favLength == 0" class="mt-4">
                            <p>Unleash the potential of favorites! Start building your personalized collection of top
                                destinations and activities today.</p>
                            <RouterLink :to="{ name: 'home', params: { jumpId: 'Discover' } }" class="">
                            
                                <div
                                    class="w-fit bg-secondaryColor rounded-[100px] shadow flex items-center justify-around px-5 mt-6 cursor-pointer py-2">
                                    <div class="text-center text-white text-base font-semibold font-[SourceSansPro]  mx-5">
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
                            <div class=" flex justify-center my-32 ">
                                <img src="@/assets/illustration/favorite.svg" alt="" class=" w-1/3">
                            </div>
                        </div>
                        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 py-24 sm:py-32">
                            <ul role="list" class="grid gap-x-8 gap-y-8 sm:grid-cols-3 sm:gap-y-8 xl:col-span-3 "
                                v-if="favArray">
                                <li v-for="favorite in favArray" :key="favorite.data.attributes.name" class="  p-4 ">
                                    <img class="h-auto w-full rounded-2xl"
                                        :src="'http://localhost:1337' + favorite.data.attributes.image.data.attributes.url"
                                        alt="" />
                                    <div class="gap-x-6 p-2">
                                        <div class="flex items-center justify-between">
                                            <RouterLink
                                                :to="{ name: 'contentView', params: { name: favorite.data.attributes.hotspot.data.attributes.name, country: 'au', jumpId: favorite.data.id } }">
                                                <h3 class="text-xl font-semibold leading-7 tracking-tight ">
                                                    {{ favorite.data.attributes.name }}{{ favorite.data.id }}{{ favorite.data.attributes.hotspot.data.attributes.name }}</h3>
                                            </RouterLink>
                                            <div
                                                @click="reloadStorage, counter.deleteOne(favorite.data.id, favorite.data.attributes.hotspot.data.attributes.name)">
                                                <svg v-if="counter.favorite" width="20" height="20" viewBox="0 0 20 20">
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
                                        <p class="text-sm font-semibold leading-6 text-indigo-600">{{
        favorite.data.attributes.hotspot.data.attributes.name }}</p>
                                    </div>
                                </li>
                            </ul>
                            <ul v-else role="list"
                                class="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3">

                                <li v-for="index in favLength" class=" bg-bg-2 p-4 rounded-2xl">
                                    <div class="flex items-center gap-x-6 justify-between">
                                        <div>
                                            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                                Loading ...</h3>
                                        </div>
                                        <div
                                            class="loader border-t-4 border-b-4 border-black border-opacity-25 rounded-full h-8 w-8 animate-spin">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAttractionStore } from '@/stores/favAttraction'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const store = useAttractionStore();
const items = ref(store.getAllLocalStorageItems());
const deleteOne = ref('false');
const favLength = ref(store.getAllLocalStorageItems());
const favArray = ref();
const counter = useAttractionStore();

onMounted(() => {

    const attractionIds = transformToArray(store.getAllLocalStorageItems());
    favLength.value = transformToArray(store.getAllLocalStorageItems()).length;
    fetchAttractions(attractionIds)
        .then(responses => {
            favArray.value = responses; // Array of responses for each attraction
            console.log(favArray.value);
        })
        .catch(error => {
            console.error('Error fetching attractions:', error);
        });

})

function reloadStorage(){
    console.log('hier');
    transformToArray(store.getAllLocalStorageItems());
}

function transformToArray(data: any) {
    var result: any = [];

    Object.values(data).forEach(function (value: any) {
        var parsedArray = JSON.parse(value);
        result = result.concat(parsedArray);
    });

    return result;
}

async function fetchAttractions(ids: any) {
    const responses = [];
    for (const id of ids) {
        const response = await fetch(`http://localhost:1337/api/attractions/${id}?fields[0]=name&fields[1]=description&fields[2]=lat&fields[3]=lng&fields[4]=ref&fields[5]=more&populate[hotspot][fields][0]=name&populate[image][fields][0]=url`);
        const data = await response.json();
        responses.push(data);
    }
    return responses;
}

const people = [


    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

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