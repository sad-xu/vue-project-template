<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar/sidebar.vue'
import Navbar from './components/navbar/navbar.vue'
import AppMain from './components/appMain/appMain.vue'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .sidebar-container {

  }

  .main-container {

  }
</style>
