<template>
  <div id="Films" data-app>
    <img alt="Vue logo" src="../assets/logo.png" />
    <H1>Bienvenue sur Votre VueFlix !</H1>
    <label for="filtre">filtrer par catégorie:</label>

    <select v-model="selected" v-if="loading">
      <option value="">tous</option>
      <option v-for="option in options" :key="option.id" :value="option.name">
        {{ option.name | capitalize }}
      </option>
    </select>
    <p>
      <i>vous avez {{ comptage }} films</i>
    </p>
    <div v-for="film in filmsByGender" :key="film.id">
      <Movie :film="film" :id="'Movie' + film.id" class="Movie"></Movie>
    </div>
    <MovieCreation :categories="this.options" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { EventBus } from "../event-bus";
import axios from "axios";
import Movie from "./Movie.vue";
import MovieCreation from "./MovieCreation.vue";
export default {
  name: "Films",
  components: { Movie, MovieCreation },
  data: function () {
    return {
      loading: false,
      options: [],
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
          genres: ["Comedy", "Drama", "Thriller"],
          rating: 9,
          review:
            "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description:
            "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won.",
        },
        {
          id: 2,
          title: "Tenet",
          genres: ["Action", "Science Fiction"],
          rating: 7.6,
          review:
            "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description:
            "Muni d'un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l'univers crépusculaire de l'espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s'agit pas d'un voyage dans le temps, mais d'un renversement temporel…",
        },
        {
          id: 3,
          title: "Joker",
          genres: ["Drama"],
          rating: 8.8,
          review:
            "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description:
            "Le film, qui relate une histoire originale inédite sur grand écran, se focalise sur la figure emblématique de l’ennemi juré de Batman. Il brosse le portrait d’Arthur Fleck, un homme sans concession méprisé par la société. ",
        },
      ],
    };
  },
  computed: {
    comptage() {
      return this.filmsByGender.length;
    },
    filmsByGender() {
      if (this.selected === "") {
        return this.films;
      } else {
        return this.films.filter((el) => {
          return el.genres.includes(this.selected);
        });
      }
    },
  },
  methods: {
    addMovie(movie) {
      const id = (this.films.length + 1);
      const rating = parseFloat(movie.rating);
      this.films.push({ ...movie, rating, id });
      localStorage.setItem("films", JSON.stringify(this.films))
    },
  },
  filters: {
    capitalize: function (value) {
      if(!value) {
        return ''
      } else {
        value = value.toString();
        return value.toUpperCase()
      }
    }
  },
  
  created() {
    EventBus.$on("createMovie", this.addMovie);
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=80d0dd074cbffeb2db4b0123882c7f44"
      )
      .then((reponse) => {
        this.loading = true;
        this.options = reponse.data.genres;
        console.log(reponse);
      })
      .catch((error) => {
        console.log(error);
      });
      if(localStorage.getItem('films')){
        try{
          this.films = JSON.parse(localStorage.getItem('films')) 
        } catch(e){
          localStorage.removeItem('films')
        } 
      }
  }
}
</script>
<style lang="scss">
</style>