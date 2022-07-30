<script setup>
import FrontCard from "./FrontCard.vue";
import BackCard from "./BackCard.vue";
defineProps(["pokemon"]);
</script>

<template>
  <input type="checkbox" :id="pokemon.name" />
  <label class="col-md-4 card-container" :for="pokemon.name">
    <div class="card-flip">
      <FrontCard :pokemon="pokemon"></FrontCard>
      <BackCard :pokemon="pokemon"></BackCard>
    </div>
  </label>
</template>
<style scoped>
.row > * {
  padding-bottom: calc(var(--bs-gutter-x) * 0.99);
}

input[type="checkbox"] {
  display: none;
}

/* Flip Cards CSS */
.card-container {
  display: grid;
}
.card-flip {
  display: grid;
  grid-template: 1fr / 1fr;
  grid-template-areas: "frontAndBack";
  transform-style: preserve-3d;
  transition: all 0.7s ease;
}

.card-flip div {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.front {
  grid-area: frontAndBack;
}

.back {
  grid-area: frontAndBack;
  transform: rotateY(-180deg);
}

input[type="checkbox"]:checked + .card-container .card-flip {
  transform: rotateY(180deg);
}
</style>
