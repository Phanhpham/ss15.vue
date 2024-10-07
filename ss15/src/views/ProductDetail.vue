<template>
  <h1>Product Detail Page of id ={{ id }}</h1>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const { id } = route.params;
// console.log(id);


</script>

<style>

</style>