<script setup>
import PokemonCard from "../components/PokemonCard.vue";
import { onMounted, computed } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/pokemon";
import SpinnerLoader from "../components/SpinnerLoader.vue";
import { ref } from "vue";

const pokemonStore = usePokemonStore();
const { errorMessage, loading, pokemons } = storeToRefs(pokemonStore);
const searchText = ref("");
const filteredPokemons = computed(() =>
  pokemons.value.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchText.value);
  })
);

onMounted(() => {
  pokemonStore.getPokemons();
});
</script>

<template>
  <div class="loader-container">
    <SpinnerLoader v-if="loading"></SpinnerLoader>
  </div>
  <h1 v-if="errorMessage != null">{{ errorMessage }}</h1>

  <div
    v-if="!loading && errorMessage != null"
    class="form-group"
    style="padding-bottom: 1rem"
  >
    <input
      class="form-control"
      type="text"
      placeholder="Search…"
      v-model="searchText"
    />
  </div>

  <PokemonCard
    v-for="pokemon in filteredPokemons"
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
