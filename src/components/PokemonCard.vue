<script setup>
import FrontCard from "./FrontCard.vue";
defineProps(["pokemon"]);
</script>

<template>
  <div class="col-md-4">
    <FrontCard :pokemon="pokemon"></FrontCard>
  </div>
</template>
<style scoped>
.row > * {
  padding-bottom: calc(var(--bs-gutter-x) * 0.99);
}
</style>
