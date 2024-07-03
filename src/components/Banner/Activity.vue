<template>
<div id="activity" class="relative h-auto w-full flex justify-center bg-[#F5F5F5] mt-16 sm:mt-32 bg-right scroll-mt-16">
    <img src="/src/assets/img/StartPage/Activities.jpg" alt="Background" class="absolute inset-0 w-full h-full object-cover z-0" />
    <div class="relative max-w-6xl mx-4 sm:mx-10 w-full flex items-end z-10">

        <div v-click-outside="closeModalFromOutside" class="w-full flex-col flex sm:flex-row">
            <div class="relative order-first m-auto h-full sm:left-0 flex items-center justify-center w-full max-w-full sm:max-w-1/2 sm:w-1/2 sm:min-w-1/2">
                <div class="pb-8 z-20 bg-white/100 rounded-2xl sm:left-0 w-full sm:ml-16 mx-4 sm:mx-0 mb-8 sm:mb-0" v-if="open">
                    <div class="mx-4 sm:mx-8 md:mx-8 mt-4 sm:mt-8 relative">
                        <ul id="myUL" class="h-80 overflow-auto">
                            <template v-for="item in response">
                                <li class="my-6">
                                    <RouterLink :to="{ name: 'contentView', params: { name: item.hotspots[0].name, country: 'au', jumpId: 'activity' } }" @click="close()" class="">
                                        <div class="flex items-start justify-between">
                                            <div class="flex align-top items-center ml-4">
                                                <div class="overflow-hidden rounded-lg w-16 h-16 flex-none">
                                                    <img :src="item.img_link" alt="attraction image" class="object-cover w-full h-full">
                                                </div>
                                                <div class="ml-2 mb-auto">
                                                    <div class="flex items-center">
                                                        <p class="text-[10px] ml-0 text-black/50">
                                                            <span>{{ item.hotspots[0].name }}</span>
                                                            Australia
                                                        </p>
                                                    </div>
                                                    <p class="text-lg font-bold -mt-1.5">{{ item.title }}</p>
                                                </div>
                                            </div>
                                            <div class="mr-4 m-auto">
                                                <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
                                                    <path d="M0 15.0025L6.18084 8.5L0 1.9975L1.90283 0L10 8.5L1.90283 17L0 15.0025Z" fill="#515151" />
                                                </svg>
                                            </div>
                                        </div>
                                    </RouterLink>
                                </li>
                            </template>
                            <div v-if="response[0].hits == 0 && response[1].hits == 0">
                                <p>Not Found</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="w-auto m-auto sm:w-5/12 sm:max-w-1/2 bg-black/50 py-8 px-4 sm:py-16 rounded-2xl sm:px-12 my-8 sm:my-28 order-last mx-4">
                <p class="font-[SourceSansPro] text-xl sm:text-4xl font-bold text-white">Create your Activities</p>
                <div class="flex mt-6">
                    <input type="text" v-model="query" placeholder="Search..." @click="openModal()" class="flex-1 md:mr-8 my-2 md:m-auto p-2 pl-8 pr-8 md:pr-32 outline-none rounded-full">
                </div>
                <div class="mt-4">
                    <a href="https://www.viator.com/?pid=P00192029&mcid=42383&medium=link&medium_version=selector" target="_blank">
                        <div class="py-2 bg-secondaryColor rounded-full shadow inline-flex items-center justify-between px-5 cursor-pointer" @click="openModal()">
                            <p class="text-center text-white text-sm sm:text-[17px] font-semibold font-[SourceSansPro]">Viator</p>
                            <img src="@/assets/icons/accomodation/viator.png" alt="viator Logo" class="ml-4">
                        </div>
                    </a>
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
    console.log('here')
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
                    "indexUid": "activity",
                    "q": keyword,
                    "limit": 25
                }
            ]
        })
    })
        .then(resp => resp.json())
        .then(json => {

            response.value = json.results[0].hits;
            console.log(json.results[0].hits);

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