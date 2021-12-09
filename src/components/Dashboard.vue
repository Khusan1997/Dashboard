<template>
  <!-- <div class="dashboard">
    <Navbar />
    <Sidebar />
    <div class="content">Content</div>
  </div> -->
  <div class="grid-container">
    <div class="item1">Header</div>
    <div class="item2"><Sidebar /></div>
    <div class="item3">Main</div>
    <!-- <div class="item4">Right</div> -->
    <div class="item5">Footer</div>
  </div>
</template>
<script>
// import Navbar from "../layouts/navbar.vue";
import Sidebar from "../layouts/sidebar.vue";

export default {
  components: {
    // Navbar,
    Sidebar,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped>
/* .dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr 5fr;
  background-color: teal;
  height: 100vh;
  width: 100vw;
}
.content {
  background-color: white;
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
} */
.item1 {
  grid-area: header;
}
.item2 {
  grid-area: menu;
  height: 87vh;
  width: 20vw;
}
.item3 {
  height: 76vh;
  width: 78vw;
  grid-area: main;
}
.item4 {
  height: 88vh;
  width: 78vw;
  grid-area: right;
}
.item5 {
  height: 10vh;
  width: 78vw;
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "menu main main main right right"
    "menu footer footer footer footer footer";
  grid-gap: 10px;
  background-color: #2196f3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 10px 0;
  font-size: 30px;
}
</style>
