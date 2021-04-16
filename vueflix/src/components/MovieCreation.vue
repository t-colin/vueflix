<template>
  <div id="MovieCreation">
    <h1>Ajouter un film</h1>
    <form action="#" @submit.prevent="addFilm" autocomplete="off">
      <v-toolbar dark color="teal">
        <v-toolbar-title>Séléction du Titre</v-toolbar-title>
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
        <v-btn @click="autocomplete" v-if="loading">ok</v-btn>
      </v-toolbar>
      <p>
        <label for="genres">genres: </label>
        <input id="genres" v-model="movie.genres" type="text" name="genres" />
      </p>
      <p>
        note:
        <v-rating
          hover
          length="10"
          size="15"
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
import axios from "axios";
export default {
  name: "MovieCreation",
  data: function () {
    return {
      categories: [],
      pushcategorie: [],
      loading: false,
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
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=80d0dd074cbffeb2db4b0123882c7f44"
      )
      .then((reponse) => {
        this.loading = true;
        this.categories = reponse.data.genres;
        console.log(reponse);
      })
      .catch((error) => {
        console.log(error);
      });
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
    getResult(v) {
      this.movieProposition = [];
      this.movies = [];
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "80d0dd074cbffeb2db4b0123882c7f44",
            query: v,
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
</style>
