<template>
  <div>
    <ul v-for="user in users" :key="user.id">
      <li>Id: {{ user.id }}</li>
      <li>Name: {{ user.name }}</li>
      <li>Email: {{ user.email }}</li>
      <li>Address: {{ user.address }}</li>
      <button @click="handleDetail(user.id)">Xem chi tiết</button>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nva@gmail.com",
    address: "Hà Nội",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    email: "nvb@gmail.com",
    address: "Hà Nam",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
    email: "nvc@gmail.com",
    address: "Ninh Bình",
  },
];

const handleDetail = async (id) => {
  await router.push(`/userDetail/${id}`);
  //   window.location.reload();
};
</script>
<style></style>
