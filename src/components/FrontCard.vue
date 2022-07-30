<template>
  <div class="card front card-stats mb-4 mb-xl-0 shadow">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0">
            {{ pokemon.name }}
          </h5>
          <span
            class="h6 font-weight-bold mb-0"
            data-toggle="tooltip"
            title="Experience"
            >{{ pokemon.experience }} XP</span
          >
          <br />
          <span class="h6 font-weight-bold mb-0">
            {{ pokemon.abilities.length }} Abilities</span
          >
        </div>
        <div class="col-auto">
          <div class="icon icon-shape text-white rounded-circle">
            <img :src="pokemon.picture_url" class="card-img-top" />
          </div>
        </div>
      </div>
      <!-- <p class="mt-3 mb-0 text-muted text-sm"> -->
      <div class="row">
        <!-- health -->
        <div class="col" data-toggle="tooltip" title="Health">
          <span class="text-danger mr-2"
            ><font-awesome-icon icon="fa-solid fa-heart" />
            {{ pokemon.health }}</span
          >
        </div>

        <!-- attack -->
        <div class="col" data-toggle="tooltip" title="Attack">
          <span class="text-success mr-2"
            ><font-awesome-icon icon="fa-solid fa-hand-back-fist" />
            {{ pokemon.attack }}</span
          >
        </div>

        <!-- special attack -->
        <div class="col" data-toggle="tooltip" title="Special Attack">
          <span class="text-warning mr-2"
            ><font-awesome-icon icon="fa-solid fa-bolt-lightning" />
            {{ pokemon.special_attack }}</span
          >
        </div>

        <!-- defense -->
        <div class="col" data-toggle="tooltip" title="Defense">
          <span class="text-info mr-2"
            ><font-awesome-icon icon="fa-solid fa-shield" />
            {{ pokemon.defense }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["pokemon"]);
</script>
