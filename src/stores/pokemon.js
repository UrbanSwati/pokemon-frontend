import { defineStore } from "pinia";
import axios from "axios";

export const usePokemonStore = defineStore({
  id: "pokemon",
  state: () => ({
    loading: false,
    errorMessage: null,
    pokemons: [],
  }),
  actions: {
    getPokemons() {
      this.loading = true;
      this.errorMessage = null;
      this.pokemons = [];

      axios
        .get("api/v1/pokemon?limit=100")
        .then((response) => {
          if (response.status !== 200) {
            this.errorMessage = response.data;
          }
          console.log(response);
          this.pokemons = response.data;
        })
        .catch((error) => {
          this.errorMessage = error;
        })
        .finally(() => (this.loading = false));
    },
  },
});
