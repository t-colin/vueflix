<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <H1>Bienvenue sur Votre VueFlix !</H1>
    <label for="filtre">filtrer par catégorie:</label>

    <select v-model="selected">
      <option value="">tous</option>
      <option value="comedy">comédie</option>
      <option value="drama">drame</option>
      <option value="thriller">thriller</option>
      <option value="action">action</option>
      <option value="science fiction">science-fiction</option>
    </select>
    <p>
      <i>vous avez {{ comptage }} films</i>
    </p>
    <div v-for="film in filmsByGender" :key="film.id">
      <Movie
        :title="film.title"
        :genres="film.genres"
        :rating="film.rating"
      ></Movie>
    </div>
    <MovieCreation />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { EventBus } from "./event-bus";
import Movie from "./components/Movie.vue";
import MovieCreation from "./components/MovieCreation.vue";

export default {
  name: "App",
  components: { Movie, MovieCreation },

  computed: {
    comptage: function () {
      return this.filmsByGender.length;
    },
    filmsByGender: function () {
      if (this.selected == "") {
        return this.films;
      } else {
        return this.films.filter((el) => el.genres.includes(this.selected));
      }
    },
  },
  methods: {
    addMovie(movie) {
      const genres = movie.genres.split(" ");
      this.films.push({ ...movie, genres });
    },
  },
  data: function () {
    return {
      title: "Bienvenue sur VueFlix !",
      titre: "",
      categories: "",
      note: 0,
      revue: "",
      desc: "",
      selected: "",

      films: [
        {
          id: 1,
          title: "Parasite",
          genres: ["comedy", "drama", "thriller"],
          rating: 9,
          review:
            "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description:
            "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won.",
        },
        {
          id: 2,
          title: "Tenet",
          genres: ["action", "science fiction"],
          rating: 7.6,
          review:
            "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description:
            "Muni d'un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l'univers crépusculaire de l'espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s'agit pas d'un voyage dans le temps, mais d'un renversement temporel…",
        },
        {
          id: 3,
          title: "Joker",
          genres: ["drama"],
          rating: 8.8,
          review:
            "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description:
            "Le film, qui relate une histoire originale inédite sur grand écran, se focalise sur la figure emblématique de l’ennemi juré de Batman. Il brosse le portrait d’Arthur Fleck, un homme sans concession méprisé par la société. ",
        },
      ],
    };
  },
  created() {
    EventBus.$on("createMovie", this.addMovie);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
