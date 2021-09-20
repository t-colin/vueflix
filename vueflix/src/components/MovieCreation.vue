<template>
  <div id="MovieCreation">
    <h1>Ajouter un film</h1>
    <form @submit.prevent="addFilm">
      <v-toolbar dark color="teal">
        <v-toolbar-title>Titre</v-toolbar-title>
        <v-combobox
          v-model="movie.title"
          :items="movieProposition"
          :search-input.sync="search"
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="quel est le titre du film ?"
          solo-inverted
        ></v-combobox>
        <v-btn @click="autocomplete">ok</v-btn>
      </v-toolbar>
      <v-text-field
        dark
        v-model="movie.genres"
        label="Genres"
        filled
        placeholder="Adventure, Thriller"
      ></v-text-field>
      <v-text-field
        dark
        v-model="movie.review"
        label="Review"
        filled
        placeholder="J'ai passé un super moment"
      ></v-text-field>
      <v-text-field
        dark
        v-model="movie.description"
        label="Description"
        filled
        placeholder="Harry est un jeune sorcier qui vit..."
      ></v-text-field>
      <v-rating
        hover
        length="10"
        size="25"
        value="3"
        v-model="movie.rating"
      ></v-rating>
      <p>
        Ou cliquez simplement sur "ok" après avoir saisi le nom du film pour
        vous laisser guider
      </p>
      <v-btn class="mr-4" type="submit">ajouter le film </v-btn>
    </form>
  </div>
</template>
<script>
import { EventBus } from "../event-bus.js";
import axios from "axios";
export default {
  name: "MovieCreation",
  props: ["categories"],
  data: function () {
    return {
      pushcategorie: [],
      search: null,
      movie: {
        title: "",
        genres: "",
        rating: 0,
        review: "",
        description: "",
      },
      movies: [],
      movieProposition: [],
    };
  },
  watch: {
    search(val) {
      (this.movie.title = this.search),
        val && val !== this.select && this.getResult(val);
    },
  },

  methods: {
    autocomplete() {
      this.movies.filter((el) => {
        if (el.title === this.movie.title) {
          this.pushcategorie = [];
          for (let gr of el.genre_ids) {
            for (let el of this.categories) {
              if (gr == el.id) {
                gr = el.name;
                this.pushcategorie.push(gr);
              }
            }
          }
          console.log(el.genre_ids);
          this.movie.genres = this.pushcategorie;
          this.movie.rating = el.vote_average;
          this.movie.review = el.overview;
          this.movie.description = el.overview;
        }
      });
    },
    addFilm() {
      EventBus.$emit("createMovie", this.movie);
      this.movie.title = "";
      this.movie.genres = "";
      this.movie.rating = 0;
      this.movie.review = "";
      this.movie.description = "";
    },
    getResult(val) {
      this.movieProposition = [];
      this.movies = [];
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "80d0dd074cbffeb2db4b0123882c7f44",
            query: val,
          },
        })
        .then((reponse) => {
          for (let item of reponse.data.results) {
            this.movieProposition.push(item.title);
            this.movies.push(item);
          }
        })
        .catch(() => console.log("raté"));
    },
  },
};
</script>
<style>
.mr-4 {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
