<template>
  <div v-if="user">
    <h1>Thông tin chi tiết</h1>
    <p>Id: {{ user.id }}</p>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Address: {{ user.address }}</p>
  </div>
</template>
<script setup>
import { reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

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

// Biến reactive để lưu thông tin user hiện tại
const user = ref(null);

// Hàm cập nhật thông tin user theo id từ route params
const updateUser = () => {
  const { id } = route.params; // Lấy id từ route params
  user.value = users.find((u) => u.id === parseInt(id)); // Cập nhật user
};

// Gọi hàm cập nhật lần đầu khi component được tạo
updateUser();

// Sử dụng watch để theo dõi sự thay đổi của route.params và cập nhật khi id thay đổi
watch(
  () => route.params.id, // Theo dõi sự thay đổi của id trong route params
  () => {
    updateUser(); // Cập nhật user khi id thay đổi
  }
);
</script>
<style></style>
