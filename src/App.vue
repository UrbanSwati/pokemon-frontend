<script setup>
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div class="py-5">
    <div class="container">
      <div class="row">
        <!-- <h1 class="green">Pokemon!</h1> -->
        <img
          src="./assets/pokemon_logo.png"
          alt="Pokemon Logo"
          style="width: 220px"
        />
      </div>
      <hr />
      <div class="row">
        <HomeView></HomeView>
      </div>
    </div>
  </div>
</template>
