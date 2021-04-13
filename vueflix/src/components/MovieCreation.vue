<template>
  <div id="MovieCreation">
    <h1>ajouter un film</h1>
    <p>
      <label for="titre">titre </label>
      <input
        id="titre"
        v-on:input="(event) => this.$emit('titre', event)"
        type="text"
        name="titre"
      />
    </p>
    <p>
      <label for="categories">genres </label>
      <input
        id="categories"
        v-on:input="(event) => this.$emit('categories', event)"
        type="text"
        name="categories"
      />
    </p>
    <p>
      <label for="note">note </label>
      <input
        id="note"
        v-on:input="(event) => this.$emit('note', event)"
        type="text"
        name="note"
      />
    </p>
    <p>
      <label for="review">review </label>
      <input
        id="review"
        v-on:input="(event) => this.$emit('revue', event)"
        type="textarea"
        name="review"
      />
    </p>
    <p>
      <label for="desc">description </label>
      <input
        id="desc"
        v-on:input="(event) => this.$emit('desc', event)"
        type="textarea"
        name="desc"
      />
    </p>

    <p>
      <button type="button" @click="addFilm">ajouter le film</button>
    </p>
  </div>
</template>
<script>
export default {
  name: "MovieCreation",
  props: {
    addFilm: { type: Function },
  },
};
</script>
<style>
</style>