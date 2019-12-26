<template>
  <b-navbar toggleable="lg" fixed="top" type="light">
    <b-navbar-brand href="#">Thanh</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Navbar',
  };
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,700");
  .navbar {
    background-color: rgba(255, 255, 255, 0.95);
  }
  @media all and (min-width: $large) {
    .navbar {
      left: 50%;
      transform: translateX(-50%);
      width: $large;
    }
  }
</style>
