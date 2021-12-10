<template>
  <!-- <div class="dashboard">
    <Navbar />
    <Sidebar />
    <div class="content">Content</div>
  </div> -->
  <div class="grid-container">
    <div class="header">Header</div>
    <div class="sidebar"><Sidebar /></div>
    <div class="main">Main</div>
    <!-- <div class="item4">Right</div> -->
    <div class="footer">Footer</div>
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
.header {
  height: 7vh;
  width: 78vw;
  grid-area: header;
}
.sidebar {
  grid-area: menu;
  height: 96vh;
  width: 20vw;
}

.main {
  height: 80vh;
  width: 78vw;
  grid-area: main;
}
.footer {
  height: 7vh;
  width: 78vw;
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-areas:
    "menu header header header header header"
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
