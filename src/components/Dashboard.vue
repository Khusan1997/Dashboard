<template>
  <!-- <div class="dashboard">
    <Navbar />
    <Sidebar />
    <div class="content">Content</div>
  </div> -->
  <div class="grid-container">
    <div class="header">Header</div>
    <div class="sidebar"><Sidebar /></div>
    <div class="main"><Main /></div>
    <div class="footer">Footer</div>
  </div>
</template>
<script>
// import Navbar from "../layouts/navbar.vue";
import Sidebar from "../layouts/sidebar.vue";
import Main from "../layouts/main.vue";

export default {
  components: {
    // Navbar,
    Sidebar,
    Main,
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
  grid-area: header;
}
.sidebar {
  grid-area: menu;
  height: 100%;
}

.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-areas:
    "menu header header header header header"
    "menu main main main main main"
    "menu footer footer footer footer footer";
  grid-gap: 1px;
  background-color: #fffcfc;
}

.grid-container > div {
  background-color: rgba(50, 144, 194, 0.8);
  text-align: center;
  font-size: 30px;
}
</style>
