<template>
  <div id="app" data-app>
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
      const rating = parseFloat(movie.rating);
      this.films.push({ ...movie, rating });
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
<style lang="scss">
$primary-color: #b88f73;
$darker-primary: darken($primary-color, 10);
body {
  background-color: #16383a;
}
select {
  margin-bottom: 5px;
  border: solid white 1px;
  border-radius: 5px;
  color: white;
}
input {
  border: solid white 1px;
  border-radius: 5px;
  color: white;
}
h1,
h2 {
  color: $primary-color;
  margin-bottom: 5px;
}
p,
label {
  color: rgb(255, 255, 255);
  margin-bottom: 5px;
}
#Movie {
  background-color: #0d646b;
  width: 70%;
  height: 150px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-top: 30px;
  border: solid black 1px;
}
button {
  background-color: $primary-color;
  &:hover {
    background-color: $darker-primary;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>