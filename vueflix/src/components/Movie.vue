<template>
  <div id="Movie">
    <h2>{{ title }}</h2>
    <p>
      genres :
      <span v-for="genre in genres" :key="genre">
        {{ genre }}
      </span>
    </p>
    <p>note : {{ rating }}/10</p>
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