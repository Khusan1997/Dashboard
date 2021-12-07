<template>
  <div class="dashboard">
    <Navbar />
    <Sidebar />
    <div class="content">Content</div>
    <div class="content">Content</div>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import Navbar from "../layouts/navbar.vue";
import Sidebar from "../layouts/sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: teal;
  height: 100vh;
  width: 100vw;
}
.content {
  background-color: white;
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
}
</style>
