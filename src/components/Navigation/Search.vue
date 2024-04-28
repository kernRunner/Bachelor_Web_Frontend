<template>
    <div class="pb-8 ">
        <div class="flex h-24 border-b border-secondaryColor p-4 px-8">
            <input type="text" v-model="query" placeholder="Search.." title="Type in what you are looking for"
                class="ml-8 m-auto p-2 pr-32 outline-0 rounded-full pl-4 focus:outline-none placeholder:ring-inset focus:ring-2 focus:ring-inset focus:ring-secondaryColor shadow-md">
            <div class="relative m-auto mr-8">
                <Menu as="div" class="relative inline-block text-left">
                    <!-- <div>
                        <MenuButton
                            class="inline-flex w-full justify-center rounded-3xl bg-black bg-opacity-20 px-8 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            Filter
                        </MenuButton>
                    </div> -->

                    <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                <button :class="[
                active ? 'bg-violet-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]">
                                    <!-- <EditIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
                                    City
                                </button>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <button :class="[
                active ? 'bg-violet-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]">
                                    <!-- <DuplicateIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" -->
                                    Regions
                                </button>
                                </MenuItem>
                            </div>
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                <button :class="[
                active ? 'bg-violet-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]">
                                    <!-- <ArchiveIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
                                    Country
                                </button>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
        <div class="mx-16 mt-8">
            <ul id="myUL" class="h-[300px] overflow-auto">
                <template v-for="results in response">
                    <template v-for="item in results.hits" class="my-4">
                        <li class="my-4">

                            <!-- <RouterLink :to="item.hotspot.name.toLowerCase()" @click="toTop(), close()" class=""> -->
                            <RouterLink v-if="item._meilisearch_id.startsWith('hot')" :to="{ name: 'contentView', params: { name: item.name, country: 'au', id: 0 } }"  @click="toTop(), close()" class="">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center ml-4">
                                        <div class="overflow-auto rounded-lg">
                                            <img :src="'http://localhost:1337' + item.image.formats.thumbnail.url" alt=""
                                                class="object-cover w-14 h-14 ">
                                        </div>
                                        <div class="ml-2">
                                            <div class="flex items-center">
                                                <img src="@/assets/img/Group 4.jpg" alt="" class=" h-2.5 rounded-sm">
                                                <p class="text-[10px] ml-2 text-black/50">Australia</p>
                                            </div>
                                            <p class="text-lg font-bold -mt-1.5">{{ item.name }}</p>

                                        </div>
                                    </div>
                                    <div class="mr-4">
                                        <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
                                            <path d="M0 15.0025L6.18084 8.5L0 1.9975L1.90283 0L10 8.5L1.90283 17L0 15.0025Z"
                                                fill="#515151" />
                                        </svg>
                                    </div>
                                </div>
                            </RouterLink>
                            <RouterLink v-else :to="{ name: 'contentView', params: { name: item.hotspot.name, country: 'au', jumpId: item.id } }"  @click="close()" class="">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center ml-4">
                                        <div class="overflow-auto rounded-lg">
                                            <img :src="'http://localhost:1337' + item.image.formats.thumbnail.url" alt=""
                                                class="object-cover w-14 h-14 ">
                                        </div>
                                        <div class="ml-2">
                                            <div class="flex items-center">
                                                <img src="@/assets/img/Group 4.jpg" alt="" class=" h-2.5 rounded-sm">
                                                <p class="text-[10px] ml-2 text-black/50"><span
                                                        v-if="item._meilisearch_id.startsWith('att')">{{ item.hotspot.name }}</span>
                                                    Australia</p>
                                            </div>
                                            <p class="text-lg font-bold -mt-1.5">{{ item.name }}</p>
                                            <!-- <p class="text-[10px] text-black/50">{{ item.type.charAt(0).toUpperCase() +
                                                item.type.slice(1) }}</p> -->
                                        </div>
                                    </div>
                                    <div class="mr-4">
                                        <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
                                            <path d="M0 15.0025L6.18084 8.5L0 1.9975L1.90283 0L10 8.5L1.90283 17L0 15.0025Z"
                                                fill="#515151" />
                                        </svg>
                                    </div>
                                </div>
                            </RouterLink>
                        </li>
                    </template>
                </template>
                <div v-if="empty">
                    <p>Not Found</p>
                </div>
            </ul>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { Meilisearch } from 'meilisearch';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const client: any = ref(null);
const query: any = ref("");
const response: any = ref([]);
const empty = ref(false);
const linkName = ref();

watch(() => query.value, (value) => {
    search(value);
});

onMounted(() => {
    search("");
});





function search(keyword: string) {

    // client.value.index('attraction').search(keyword).then((results: any) => {
    //     response.value = results.hits
    //     console.log(response.value);

    //     if (response.value.length == 0) {
    //         empty.value = true
    //     } else {
    //         empty.value = false
    //     }
    // })

    fetch('http://localhost:7700/multi-search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 6LKw9o4P0yjivfuOSHy_TKckH2sPdTK9rIz5nVkt9eI'
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