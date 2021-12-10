<template>
  <div>
    <div class="sidebar"><Sidebar /></div>
    <div>
      <div class="header"><Navbar /></div>
      <div class="main"><Main /></div>
      <div class="footer"><Footer /></div>
    </div>
  </div>
</template>
<script>
import Footer from "../layouts/footer.vue";
import Sidebar from "../layouts/sidebar.vue";
import Main from "../layouts/main.vue";
import Navbar from "../layouts/navbar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    Main,
    Footer,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped>
.sidebar {
  background-color: red;
  width: 400px;
  height: 100vh;
}
.header {
  background-color: green;
  height: 60px;
  width: 100px;
}
</style>
