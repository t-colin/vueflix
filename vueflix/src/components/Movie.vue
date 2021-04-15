<template>
  <div id="Movie">
    <h2>{{ title }}</h2>
    <p>
      genres :
      <span v-for="genre in genres" :key="genre">
        {{ genre }}
      </span>
    </p>
    <p>
      note :
      <v-rating hover length="10" readonly size="30" :value="rating"></v-rating>
    </p>
  </div>
</template>
<script>
export default {
  name: "Movie",
  props: {
    title: {
      type: String,
      default: "film par défaut",
    },
    genres: {
      type: Array,
      default: function () {
        return ["drama"];
      },
    },
    rating: {
      type: Number,
      defaut: 10,
    },
  },
};
</script>
<style lang="scss">
</style>