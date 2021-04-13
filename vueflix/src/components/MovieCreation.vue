<template>
  <div id="MovieCreation">
    <h1>ajouter un film</h1>
    <p>
      <label for="titre">titre </label>
      <input
        id="titre"
        v-model="titre"
        @change="emitTitre()"
        type="text"
        name="titre"
      />
    </p>
    <p>
      <label for="categories">genres </label>
      <input
        id="categories"
        v-model="categories"
        @change="emitCategories()"
        type="text"
        name="categories"
      />
    </p>
    <p>
      <label for="note">note </label>
      <input
        id="note"
        v-model="note"
        @change="emitNote()"
        type="text"
        name="note"
      />
    </p>
    <p>
      <label for="review">review </label>
      <input
        id="review"
        v-model="revue"
        @change="emitReview()"
        type="textarea"
        name="review"
      />
    </p>
    <p>
      <label for="desc">description </label>
      <input
        id="desc"
        v-model="desc"
        @change="emitDesc()"
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
import EventBus from "../event-bus.js";
export default {
  name: "MovieCreation",
  props: {
    addFilm: { type: Function },
  },
  methods: {
    emitTitre() {
      EventBus.$emit("titre", this.titre);
    },
    emitCategories() {
      EventBus.$emit("categories", this.categories);
    },
    emitNote() {
      EventBus.$emit("note", this.note);
    },
    emitReview() {
      EventBus.$emit("review", this.review);
    },
    emitDesc() {
      EventBus.$emit("desc", this.desc);
    },
  },
};
</script>
<style>
</style>