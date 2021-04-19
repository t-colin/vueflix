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
        size="20"
        :value="film.rating"
      ></v-rating>
    </p>
    <router-link
      class="detail"
      :to="{ name: 'detail', params: { id: film.id, film: film } }"
      >détail</router-link
    >
  </div>
</template>
<script>
export default {
  name: "Movie",
  data() {
    return {
      categories: [],
    };
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
<style lang="scss">
.detail {
  text-align: right;
}
</style>