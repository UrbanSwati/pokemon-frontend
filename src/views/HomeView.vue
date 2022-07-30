<script setup>
import PokemonCard from "../components/PokemonCard.vue";
import { onMounted } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/pokemon";
import SpinnerLoader from "../components/SpinnerLoader.vue";

const pokemonStore = usePokemonStore();
const { errorMessage, loading, pokemons } = storeToRefs(pokemonStore);

onMounted(() => {
  pokemonStore.getPokemons();
});
</script>

<template>
  <div class="loader-container">
    <SpinnerLoader v-if="loading"></SpinnerLoader>
  </div>
  <h1 v-if="errorMessage != null">{{ errorMessage }}</h1>

  <PokemonCard
    v-for="pokemon in pokemons"
    :pokemon="pokemon"
    :key="pokemon"
  ></PokemonCard>
</template>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
