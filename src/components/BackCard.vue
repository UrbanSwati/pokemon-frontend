<template>
  <div class="card back card-stats mb-4 mb-xl-0 shadow">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h4 class="card-title text-uppercase text-muted mb-0">
            <b>{{ pokemon.name }} Abilities</b>
          </h4>
        </div>
      </div>

      <div class="row">
        <div v-for="ability in pokemon.abilities" :key="ability">
          <p class="mt-2 mb-2 text-muted">
            <b>{{ ability.name }}</b
            >:
            {{ ability.effect }}
          </p>
        </div>
      </div>
      <hr />
      <p class="mt-2 mb-2 text-muted">
        <b>STATS</b>
      </p>
      <div class="row col mt-1 mb-1 text-muted">
        <div class="col">Health: {{ pokemon.health }}</div>
        <div class="col">Attack: {{ pokemon.attack }}</div>
        <div class="col">Defense: {{ pokemon.defense }}</div>
      </div>
      <div class="row col mt-1 mb-1 text-muted">
        <div class="col">Special Attack {{ pokemon.special_attack }}</div>
        <div class="col">Weight: {{ pokemon.weight }}</div>
        <div class="col">XP: {{ pokemon.experience }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["pokemon"]);
</script>
