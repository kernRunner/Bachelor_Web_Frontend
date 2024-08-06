<template>
    <Head>
      <title>{{ title }}</title>
  
      <meta name="description" :content="description" />
      <meta name="keywords" :content="keywords" />
    </Head>
  </template>
  
  <script setup lang="ts">
  import { Head } from "@vueuse/head"
  
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  
    description: {
      type: String,
      required: true,
    },
  
    keywords: {
      type: String,
      required: true,
    }
  })
  </script>