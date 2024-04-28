<template>
    <div class="h-auto w-full flex justify-center">
        <div class="pt-16 md:pt-32 lg:pt-44 pb-16 max-w-6xl mx-10 my-auto w-full">
            <p class="font-bold text-4xl">All about <span class="text-secondaryColor">{{ name }}</span></p>
            <div class="mt-20 grid grid-cols-3">
                <div class="sticky top-[150px] h-fit">
                    <!-- <div class="flex items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M11.25 11.25L11.291 11.23C11.4192 11.1659 11.5631 11.14 11.7057 11.1552C11.8482 11.1703 11.9834 11.2261 12.0952 11.3157C12.2071 11.4054 12.2909 11.5252 12.3368 11.661C12.3826 11.7968 12.3886 11.9429 12.354 12.082L11.646 14.918C11.6111 15.0572 11.6169 15.2034 11.6627 15.3394C11.7084 15.4754 11.7922 15.5954 11.9041 15.6852C12.016 15.775 12.1513 15.8308 12.294 15.846C12.4367 15.8612 12.5807 15.8352 12.709 15.771L12.75 15.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12ZM12 8.25H12.008V8.258H12V8.25Z"
                                stroke="#FFA239" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-xl mb-1 ml-4 text-secondaryColor font-bold cursor-pointer" @click="jumpToId('Info')">
                            Info</p>
                    </div> -->
                    <div class="flex items-center mt-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M20.893 13.393L19.758 12.258C19.5872 12.0869 19.445 11.8893 19.337 11.673L18.257 9.51299C18.2276 9.45437 18.1847 9.40357 18.1318 9.36477C18.0789 9.32597 18.0176 9.30029 17.9529 9.28984C17.8881 9.2794 17.8218 9.28448 17.7594 9.30467C17.697 9.32486 17.6403 9.35959 17.594 9.40599C17.4897 9.51021 17.3594 9.58464 17.2166 9.62156C17.0738 9.65849 16.9238 9.65656 16.782 9.61599L15.509 9.25299C15.3053 9.19573 15.0879 9.2129 14.8957 9.30142C14.7036 9.38995 14.5492 9.54403 14.4604 9.73604C14.3716 9.92806 14.354 10.1454 14.4109 10.3492C14.4679 10.553 14.5955 10.7298 14.771 10.848L15.358 11.238C15.948 11.633 16.032 12.468 15.53 12.97L15.33 13.17C15.118 13.382 15 13.668 15 13.966V14.376C15 14.785 14.89 15.185 14.68 15.534L13.365 17.725C13.1775 18.0376 12.9123 18.2964 12.5951 18.476C12.2779 18.6557 11.9195 18.75 11.555 18.75C11.2752 18.75 11.0068 18.6388 10.809 18.441C10.6111 18.2431 10.5 17.9748 10.5 17.695V16.523C10.5 15.603 9.93999 14.776 9.08599 14.434L8.43099 14.173C7.95443 13.9822 7.55743 13.6342 7.30587 13.1868C7.05431 12.7393 6.96331 12.2193 7.04799 11.713L7.05499 11.671C7.10147 11.3928 7.19985 11.1258 7.34499 10.884L7.43499 10.734C7.67381 10.3363 8.02971 10.0221 8.45397 9.83454C8.87823 9.64694 9.3501 9.59505 9.80499 9.68599L10.983 9.92199C11.2602 9.97728 11.5481 9.92619 11.7893 9.77888C12.0306 9.63157 12.2075 9.39884 12.285 9.12699L12.493 8.39699C12.565 8.1448 12.5467 7.87535 12.4412 7.63523C12.3356 7.39512 12.1495 7.19943 11.915 7.08199L11.25 6.74999L11.159 6.84099C10.9501 7.04992 10.702 7.21565 10.429 7.32873C10.156 7.4418 9.86347 7.49999 9.56799 7.49999H9.38799C9.13899 7.49999 8.90099 7.59999 8.72599 7.77399C8.56561 7.93583 8.35144 8.03323 8.12406 8.04775C7.89668 8.06228 7.67186 7.99292 7.49219 7.8528C7.31252 7.71269 7.19047 7.51155 7.14915 7.28748C7.10783 7.06342 7.15011 6.83197 7.26799 6.63699L8.67899 4.28399C8.81963 4.0501 8.91654 3.79257 8.96499 3.52399M20.893 13.393C21.1352 11.8501 20.9718 10.2708 20.4188 8.81022C19.8657 7.34965 18.9422 6.05812 17.7388 5.0626C16.5355 4.06708 15.0938 3.40182 13.5555 3.13224C12.0171 2.86265 10.4352 2.998 8.96499 3.52499C7.46931 4.06113 6.14222 4.98366 5.11859 6.19885C4.09496 7.41403 3.41126 8.87855 3.137 10.4436C2.86273 12.0086 3.00766 13.6183 3.55706 15.1092C4.10646 16.6 5.04075 17.9189 6.26497 18.9317C7.4892 19.9445 8.95973 20.6151 10.5271 20.8755C12.0945 21.1358 13.7029 20.9766 15.1888 20.414C16.6747 19.8514 17.9852 18.9054 18.9871 17.6722C19.989 16.4391 20.6466 14.9626 20.893 13.393Z"
                                stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p class="text-xl text-gray mb-1 ml-4 cursor-pointer" @click="jumpToId('Attractions')">
                            Attractions
                        </p>
                    </div>
                    <div class="border-l border-black/10 ml-3">
                        <div v-for="(item, index) in content" class="flex items-center my-3">
                            <div class="w-3 border-b border-black/10"></div>
                            <p class="ml-8 cursor-pointer" @click="jumpToId(item.id)"
                                :class="[currentSection == item.id ? 'text-secondaryColor font-bold' : 'text-gray']">{{
                item.attributes.name }}
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center mt-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M11.48 3.499C11.5223 3.39583 11.5944 3.30758 11.6869 3.24546C11.7795 3.18334 11.8885 3.15018 12 3.15018C12.1115 3.15018 12.2205 3.18334 12.3131 3.24546C12.4057 3.30758 12.4777 3.39583 12.52 3.499L14.645 8.61C14.6848 8.70564 14.7502 8.78844 14.834 8.84931C14.9178 8.91018 15.0168 8.94675 15.12 8.955L20.638 9.397C21.137 9.437 21.339 10.06 20.959 10.385L16.755 13.987C16.6765 14.0542 16.618 14.1417 16.5859 14.24C16.5537 14.3382 16.5493 14.4434 16.573 14.544L17.858 19.929C17.8839 20.037 17.8771 20.1503 17.8386 20.2545C17.8001 20.3587 17.7315 20.4491 17.6417 20.5144C17.5518 20.5797 17.4446 20.6169 17.3336 20.6212C17.2226 20.6256 17.1128 20.597 17.018 20.539L12.293 17.654C12.2048 17.6002 12.1034 17.5717 12 17.5717C11.8967 17.5717 11.7953 17.6002 11.707 17.654L6.98203 20.54C6.88729 20.598 6.77748 20.6266 6.66649 20.6222C6.55549 20.6179 6.44828 20.5807 6.3584 20.5154C6.26851 20.4501 6.19999 20.3597 6.16148 20.2555C6.12297 20.1513 6.1162 20.038 6.14203 19.93L7.42703 14.544C7.45086 14.4434 7.44648 14.3382 7.41437 14.2399C7.38226 14.1416 7.32366 14.0541 7.24503 13.987L3.04103 10.385C2.95684 10.3126 2.89594 10.2169 2.86598 10.11C2.83602 10.0031 2.83834 9.88974 2.87264 9.78415C2.90695 9.67855 2.97172 9.58546 3.05879 9.51657C3.14587 9.44769 3.25137 9.40609 3.36203 9.397L8.88003 8.955C8.98328 8.94675 9.08225 8.91018 9.16606 8.84931C9.24986 8.78844 9.31525 8.70564 9.35503 8.61L11.48 3.499Z"
                                stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-xl text-gray mb-1 ml-4 cursor-pointer" @click="jumpToId('Discover')">Discover</p>
                    </div>
                    <!-- <div class="flex items-center mt-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M11.48 3.499C11.5223 3.39583 11.5944 3.30758 11.6869 3.24546C11.7795 3.18334 11.8885 3.15018 12 3.15018C12.1115 3.15018 12.2205 3.18334 12.3131 3.24546C12.4057 3.30758 12.4777 3.39583 12.52 3.499L14.645 8.61C14.6848 8.70564 14.7502 8.78844 14.834 8.84931C14.9178 8.91018 15.0168 8.94675 15.12 8.955L20.638 9.397C21.137 9.437 21.339 10.06 20.959 10.385L16.755 13.987C16.6765 14.0542 16.618 14.1417 16.5859 14.24C16.5537 14.3382 16.5493 14.4434 16.573 14.544L17.858 19.929C17.8839 20.037 17.8771 20.1503 17.8386 20.2545C17.8001 20.3587 17.7315 20.4491 17.6417 20.5144C17.5518 20.5797 17.4446 20.6169 17.3336 20.6212C17.2226 20.6256 17.1128 20.597 17.018 20.539L12.293 17.654C12.2048 17.6002 12.1034 17.5717 12 17.5717C11.8967 17.5717 11.7953 17.6002 11.707 17.654L6.98203 20.54C6.88729 20.598 6.77748 20.6266 6.66649 20.6222C6.55549 20.6179 6.44828 20.5807 6.3584 20.5154C6.26851 20.4501 6.19999 20.3597 6.16148 20.2555C6.12297 20.1513 6.1162 20.038 6.14203 19.93L7.42703 14.544C7.45086 14.4434 7.44648 14.3382 7.41437 14.2399C7.38226 14.1416 7.32366 14.0541 7.24503 13.987L3.04103 10.385C2.95684 10.3126 2.89594 10.2169 2.86598 10.11C2.83602 10.0031 2.83834 9.88974 2.87264 9.78415C2.90695 9.67855 2.97172 9.58546 3.05879 9.51657C3.14587 9.44769 3.25137 9.40609 3.36203 9.397L8.88003 8.955C8.98328 8.94675 9.08225 8.91018 9.16606 8.84931C9.24986 8.78844 9.31525 8.70564 9.35503 8.61L11.48 3.499Z"
                                stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-xl text-gray mb-1 ml-4">Activities</p>
                    </div>
                    <div class="flex items-center mt-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M2.25 12L11.204 3.045C11.644 2.606 12.356 2.606 12.795 3.045L21.75 12M4.5 9.75V19.875C4.5 20.496 5.004 21 5.625 21H9.75V16.125C9.75 15.504 10.254 15 10.875 15H13.125C13.746 15 14.25 15.504 14.25 16.125V21H18.375C18.996 21 19.5 20.496 19.5 19.875V9.75M8.25 21H16.5"
                                stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-xl text-gray mb-1 ml-4">Accomodation</p>
                    </div> -->
                </div>

                <div class="col-span-2 ml-3">
                    <p class="font-[Oswald] text-secondaryColor font-semibold text-2xl uppercase" id="Attractions">ALL
                        ATTRACTIONS AND HOSTEL
                    </p>
                    <p class="mt-6 text-sm">{{ description }}</p>

                    <p class="font-[Oswald] text-secondaryColor font-semibold text-2xl uppercase mt-16">Attractions</p>
                    <div v-for="(item, index) in content" class="content scroll-mt-24" :id="item.id">
                        <div class="slideText">
                            <p class="font-bold text-2xl mt-12">{{ item.attributes.name }}</p>
                            <p class="mt-6 text-sm">{{ item.attributes.description }}</p>
                        </div>
                        <div class="relative w-3/4 contentSlot">
                            <div class="absolute bottom-0 right-0 p-3 bg-black/50 rounded-tl-[19px] rounded-br-[19px] cursor-pointer"
                                @click="counter.toggelFavorite(item.id, name)">
                                <svg v-if="counter.favorite" width="20" height="20" viewBox="0 0 20 20">
                                    <path
                                        :class="counter.favorite.includes(item.id) ? 'stroke-red fill-red' : ' stroke-white fill-none'"
                                        d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg v-else width="20" height="20" viewBox="0 0 20 20">
                                    <path class="stroke-white fill-none"
                                        d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <!-- <div class="heart" @click="counter.toggelFavorite(index)"></div> -->
                                <!-- <div class="heart" :style="{ 'background-position': heartPosition }" @click="animateHeart(), counter.toggelFavorite(index)">
                                </div> -->
                                <div :class="counter.favorite.includes(item.attributes.uid) ? 'heart' : 'opacity-0'"
                                    :style="{ 'background-position': counter.favorite.includes(item.attributes.uid) ? '-2800px 0' : '0 0' }">
                                </div>
                            </div>
                            <img :src="'http://localhost:1337' + item.attributes.image.data.attributes.url" alt=""
                                class="rounded-[20px] mt-6">
                        </div>

                        <RouterLink
                            :to="{ name: 'contentView', params: { name: item.attributes.name, country: 'au', id: 0 } }"
                            @click="toTop()" v-if="item.attributes.more">
                            <div
                                class="w-fit bg-secondaryColor rounded-[100px] shadow flex items-center justify-around px-5 mt-6 cursor-pointer py-2">
                                <div
                                    class="text-center text-white text-base font-semibold font-[SourceSansPro]  mx-5">
                                    DISCOVER MORE
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

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineComponent, computed, watch } from 'vue'
import { useAttractionStore } from '@/stores/favAttraction'
import { useRoute, useRouter, onBeforeRouteUpdate, } from 'vue-router'

const props = defineProps({
    idBubble: {
        type: Number,
        required: true,
    },
    content: {
        type: Object,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
})

console.log(props.content)
const counter = useAttractionStore();
const currentSection: any = ref('');
const jumpId = ref();
const route = useRoute();

const currentIndex = ref(0);
const carouselItems = [
    { src: '/src/assets/regiontest/1.jpg', alt: 'Slide 1' },
    { src: '/src/assets/regiontest/2.jpg', alt: 'Slide 2' },
];

const currentIndex1 = ref(0);

const nextSlide1 = () => {
    currentIndex1.value = (currentIndex1.value + 1) % images.length;
};

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const images = [
    { src: '/src/assets/regiontest/1.jpg' },
    { src: '/src/assets/regiontest/2.jpg' },
    { src: '/src/assets/regiontest/3.jpg' }
];

watch(() => props.name, (newValue) => {
    console.log(props.name);
    counter.getItems(props.name);
});

watch(() => route.params.jumpId, (newValue) => {
    scrollToAnchor(route.params.jumpId);
});

onMounted(() => {

    // const routeName = route.name;
    // counter.someMethodThatUsesRouteName(routeName);
    console.log(route.params.jumpId);
    console.log(props.name);
    counter.getItems(props.name);

    jumpId.value = route.params.jumpId;

    // const obs: any = document.querySelectorAll('.content');
    // // console.log(obs);
    // const img: any = document.querySelectorAll('.contentSlot');
    // const text: any = document.querySelectorAll('.slideText');
    // console.log(currentSection.value);
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         if (entry.intersectionRatio > 0) {
    //             currentSection.value = entry.target.getAttribute('id');
    //             console.log(entry.target.getAttribute('id'));
    //             // img[currentSection.value].classList.add('animate');
    //             // text[currentSection.value].classList.add('animate');
    //         }
    //     })
    // },
    //     {
    //         rootMargin: '0px 900px -200px 900px',
    //         threshold: 0,
    //     }
    // )
    // obs.forEach((section: any) => {
    //     observer.observe(section);
    //     // console.log(section);
    // })

    scrollToAnchor(jumpId.value);

    const interval = setInterval(nextSlide1, 3000); // Change image every 2 seconds (2000 milliseconds)

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
}
)

function jumpToId(id: any) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToAnchor(refName: any) {
    const el = document.getElementById(refName);

    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + carouselItems.length) % carouselItems.length;
};

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % carouselItems.length;
};

const goToSlide = (index: any) => {
    currentIndex.value = index;
};

const heartPosition = ref('0 0');

const animateHeart = () => {
    heartPosition.value = '-2800px 0';
    setTimeout(() => {
        heartPosition.value = '0 0';
    }, 1000);
};


const toggleHeart = () => {
    setTimeout(() => {
    }, 1000);
};


</script>

<style>
.heart {
    width: 100px;
    height: 100px;
    scale: .66;
    position: absolute;
    left: -29px;
    top: -27px;
    transform: translate(0%, 0%);
    background: url('@/assets/icons/Heart1.png') no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background 1s steps(28);
}

/* .heart:hover {
    background-position: -2800px 0;
    transition: background 1s steps(28);
}

@keyframes fave-heart {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -2800px 0;
    }
} */

.animateHeart {
    background-position: -2800px 0;
}

.contentSlot {
    transform: translateY(0px) !important;
    opacity: 1 !important;
    transition: ease-in-out .7s;
}

.slideText {
    transform: translateX(0px) !important;
    opacity: 1 !important;
    transition: ease-in-out .7s;
}


.animate {
    transform: translateX(0px);
    opacity: 1 !important;
}

.slideshow-container {
    max-width: 400px;
    position: relative;
    margin: auto;
}

/* CSS for the images in the slideshow */
.mySlides {
    display: none;
    width: 100%;
    height: auto;
}

.active {
    display: block;
}
</style>