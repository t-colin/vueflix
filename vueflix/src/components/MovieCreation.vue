<template>
  <div id="MovieCreation">
    <h1>Ajouter un film</h1>
    <form action="#" @submit.prevent="addFilm">
      <p>
        <label for="title">titre: </label>
        <input id="title" v-model="movie.title" type="text" name="title" />
      </p>
      <p>
        <label for="genres">genres: </label>
        <input id="genres" v-model="movie.genres" type="text" name="genres" />
      </p>
      <p>
        note:
        <v-rating
          hover
          length="10"
          size="10"
          value="3"
          v-model="movie.rating"
        ></v-rating>
      </p>
      <p>
        <label for="review">review: </label>
        <input
          id="review"
          v-model="movie.review"
          type="textarea"
          name="review"
        />
      </p>
      <p>
        <label for="description">description: </label>
        <input
          id="description"
          v-model="movie.description"
          type="textarea"
          name="description"
        />
      </p>

      <p>
        <button type="submit">ajouter le film</button>
      </p>
    </form>
  </div>
</template>
<script>
import { EventBus } from "../event-bus.js";
export default {
  name: "MovieCreation",
  data: function () {
    return {
      movie: {
        title: "",
        genres: "",
        rating: 0,
        review: "",
        description: "",
      },
    };
  },
  methods: {
    addFilm() {
      EventBus.$emit("createMovie", this.movie);
    },
  },
};
</script>
<style>
</style>