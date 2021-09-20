<template>
  <div id="Movie">
    <h2>{{ film.title }}</h2>

    <p>
      genres :
      <span v-for="genre in film.genres" :key="genre">
        {{ genre }}
      </span>
    </p>
    <p>
      note :
      <v-rating
        hover
        length="10"
        readonly
        :size="screenSize"
        :value="film.rating"
      ></v-rating>
    </p>
    <router-link
      class="detail"
      :to="{ name: 'detail', params: { id: film.id, film: film } }"
      ><v-btn class="detail" elevation="1" x-small>détails</v-btn></router-link
    ><v-btn class="suppr" elevation="1" x-small @click="deleteMovie"
      >supprimer</v-btn
    >
  </div>
</template>
<script>
import { EventBus } from "../event-bus.js";
import VueScreenSize from "vue-screen-size";
export default {
  name: "Movie",
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    deleteMovie() {
      EventBus.$emit("deleteMovie", this.film.id);
    },
  },
  computed: {
    screenSize() {
      if (this.$vssWidth >= 540) {
        return 20;
      } else if (this.$vssWidth <= 420) {
        return 8;
      } else {
        return 10;
      }
    },
  },
  props: {
    film: {
      type: Object,
    },
  },
  filters: {
    idToGenre: function (val) {
      for (let el of this.categories) {
        if (val == el.id) {
          return (val = el.name);
        } else {
          return val;
        }
      }
    },
  },
};
</script>
<style lang="scss"></style>
