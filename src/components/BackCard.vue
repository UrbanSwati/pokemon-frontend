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
    </div>
  </div>
</template>

<script setup>
defineProps(["pokemon"]);
</script>
