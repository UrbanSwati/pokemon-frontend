<script setup>
import PokemonCard from "../components/PokemonCard.vue";
import { onMounted } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/pokemon";

const pokemonStore = usePokemonStore();
const { errorMessage, loading, pokemons } = storeToRefs(pokemonStore);

onMounted(() => {
  pokemonStore.getPokemons();
});
</script>

<template>
  <h1 v-if="loading">Loading</h1>
  <h1 v-if="errorMessage != null">{{ errorMessage }}</h1>

  <PokemonCard
    v-for="pokemon in pokemons"
    :pokemon="pokemon"
    :key="pokemon"
  ></PokemonCard>
</template>
