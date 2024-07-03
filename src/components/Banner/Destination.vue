<template>
<div id="destination" class="relative h-auto w-full flex justify-center bg-[#F5F5F5] mt-8 sm:mt-32 bg-right scroll-mt-16">
    <img src="/src/assets/img/StartPage/Destinations.jpg" alt="Background" class="absolute inset-0 w-full h-full object-cover z-0" />
    <div class="relative max-w-6xl mx-4 sm:mx-10 w-full flex items-start z-10">

        <div v-click-outside="closeModalFromOutside" class="w-full flex flex-col sm:block">
            <div class="relative order-last sm:absolute h-full sm:right-0 flex items-center sm:mb-0 justify-center w-full max-w-full sm:max-w-1/2 sm:w-1/2 sm:min-w-1/2">
                <div class="pb-8 z-20 bg-white/100 rounded-2xl sm:right-0 w-full sm:ml-16 mx-4 sm:mx-0 mb-8 sm:mb-0" v-if="open">
                    <div class="mx-4 sm:mx-8 md:mx-8 mt-4 sm:mt-8 relative">
                        <ul id="myUL" class="h-80 overflow-auto">
                            <template v-for="results in response">
                                <template v-for="item in results.hits" class="my-4">
                                    <li class="my-4">
                                        <RouterLink @click="toTop(), close()" v-if="item._meilisearch_id.startsWith('hot')" :to="{ name: 'contentView', params: { name: item.name, country: 'au', jumpId: 'start' } }" class="">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center ml-4">
                                                    <div class="overflow-auto rounded-lg">
                                                        <img :src="globalVariable.substring(0, globalVariable.length - 1) + item.image.formats.thumbnail.url" alt="hotspot image" class="object-cover w-14 h-14">
                                                    </div>
                                                    <div class="ml-2">
                                                        <div class="flex items-center">
                                                            <p class="text-[10px] ml-0 text-black/50">Australia</p>
                                                        </div>
                                                        <p class="text-lg font-bold -mt-1.5">{{ item.name }}</p>
                                                    </div>
                                                </div>
                                                <div class="mr-4">
                                                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
                                                        <path d="M0 15.0025L6.18084 8.5L0 1.9975L1.90283 0L10 8.5L1.90283 17L0 15.0025Z" fill="#515151" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </RouterLink>
                                        <RouterLink v-else :to="{ name: 'contentView', params: { name: item.hotspot.name, country: 'au', jumpId: item.id } }" @click="close()" class="">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center ml-4">
                                                    <div class="overflow-auto rounded-lg">
                                                        <img :src="globalVariable.substring(0, globalVariable.length - 1) + item.image.formats.thumbnail.url" alt="attraction image" class="object-cover w-14 h-14">
                                                    </div>
                                                    <div class="ml-2">
                                                        <div class="flex items-center">
                                                            <p class="text-[10px] ml-0 text-black/50">
                                                                <span v-if="item._meilisearch_id.startsWith('att')">
                                                                    {{ item.hotspot.name }}
                                                                </span>
                                                                Australia
                                                            </p>
                                                        </div>
                                                        <p class="text-lg font-bold -mt-1.5">{{ item.name }}</p>
                                                    </div>
                                                </div>
                                                <div class="mr-4">
                                                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
                                                        <path d="M0 15.0025L6.18084 8.5L0 1.9975L1.90283 0L10 8.5L1.90283 17L0 15.0025Z" fill="#515151" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </RouterLink>
                                    </li>
                                </template>
                            </template>
                            <div v-if="response[0].hits == 0 && response[1].hits == 0">
                                <p>Not Found</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-auto sm:w-5/12 sm:max-w-1/2 bg-black/50 py-8 px-4 sm:py-16 rounded-2xl sm:px-12 my-8 sm:my-28 order-first mx-4">
                <p class="font-[SourceSansPro] text-xl sm:text-4xl font-bold text-white">Find your Destination</p>
                <div class="flex mt-6 sm:flex-row flex-col">
                    <input type="text" v-model="query" placeholder="Search..." @click="openModal()" class="flex-1 md:mr-8 my-2 md:m-auto p-2 pl-8 pr-8 md:pr-32 outline-none rounded-full">
                    <div class="py-2 bg-secondaryColor rounded-full shadow items-center justify-between px-5 cursor-pointer hidden" @click="openModal()">
                        <p class="text-center text-white text-sm sm:text-[17px] font-semibold font-[SourceSansPro]">Filter</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ref, onMounted, computed, watch, inject } from 'vue';
import { RouterLink } from 'vue-router';


const open = ref(false),
    query: any = ref(""),
    response: any = ref([]),
    empty = ref(false),
    globalVariableMeilisearch: any = inject('endpointUrlMeilisearch'),
    globalVariable: any = inject('endpointUrl');


onMounted(() => {
    search("");
});

watch(() => query.value, (value) => {
    search(value);
});




function openModal() {
    open.value = true;
}

function closeModal(val: boolean) {
    open.value = val;
}

function closeModalFromOutside() {
    open.value = false;
    query.value = ""
    console.log(open.value)
}

function search(keyword: string) {


    fetch(globalVariableMeilisearch + 'multi-search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 316c462a6d9c16c306fd2b411f793e7b0dd1443ebc3366a1d2793932e6182ba2'
        },
        body: JSON.stringify({
            "queries": [
                {
                    "indexUid": "hotspot",
                    "q": keyword,
                    "limit": 5
                },
                {
                    "indexUid": "attraction",
                    "q": keyword,
                    "limit": 15
                }
            ]
        })
    })
        .then(resp => resp.json())
        .then(json => {

            response.value = json.results;
            console.log(json.results);

            if (response.value.length == 0) {
                empty.value = true
            } else {
                empty.value = false
            }

        })
        .catch(error => console.error('Error performing multi-search:', error));

}

const emit = defineEmits(['modal'])
function close() {
    emit('modal', false)
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
</script>