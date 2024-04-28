<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue';
import Navbar from './components/Navigation/Navbar.vue';

const name = ref('');
function nameValue(msg: string) {
  name.value = msg;
  console.log(name.value);
}

const open = ref(false);
function modalValue(msg: boolean) {
  open.value = msg;
  console.log(open.value);
}

</script>

<template>
  <Navbar :openV="open" :ids="['header', 'Attractions', 'Activities', 'Accomodations']"
            :nameValue="name" />
  <RouterView @name="nameValue($event)" @open="modalValue($event)"/>
</template>
