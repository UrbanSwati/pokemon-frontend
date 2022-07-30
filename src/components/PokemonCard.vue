<script setup>
import { ref } from "vue";
import FrontCard from "./FrontCard.vue";
import BackCard from "./BackCard.vue";
defineProps(["pokemon"]);
const showModal = ref(false);
</script>

<template>
  <div class="col-md-4">
    <FrontCard :pokemon="pokemon" @click="showModal = true"></FrontCard>
    <!-- Modal -->
    <div v-if="showModal" @click="showModal = false">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <BackCard :pokemon="pokemon"></BackCard>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<style scoped>
.row > * {
  padding-bottom: calc(var(--bs-gutter-x) * 0.99);
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-dialog {
  max-width: var(--bs-modal-width);
  margin-right: auto;
  margin-left: auto;
  width: 60%;
}
</style>
