<template>
  <div>
    <nav>
    <router-link active-class="active" to="/">Home</router-link>
    <router-link active-class="active" to="/">Contact</router-link>
    <router-link active-class="active" to="/">About</router-link>
  </nav>
  <nav>
    <button @click="goToHome">Home</button>
    <button @click="goToContact">Contact</button>
    <button @click="goToAbout">About</button>

  </nav>
  <router-view/>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router=useRouter();
const goToHome =()=>{
  // dieu huong qua trang Home
  router.push({name:"/home"});
};
const goToContact =()=>{
  // dieu huong qua trang Home
  router.replace({name:"contact"});
};
const goToAbout =()=>{
  // dieu huong qua trang Home
  router.push({name:"/about"});
};

</script>

<style>
.active{
  background-color:brown;
}
</style>