<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <H1>Bienvenue sur Votre VueFlix !</H1>
    <label for="filtre">filtrer par catégorie:</label>

    <select v-model="selected">
      <option disabled value="">filtrer par</option>
      <option>comedy</option>
      <option>drama</option>
      <option>thriller</option>
      <option>action</option>
      <option>science fiction</option>
    </select>
    <p>
      <i>vous avez {{ comptage }} films</i>
    </p>
    <div v-for="film in films" :key="film.id">
      <!-- | filterBy selected -->
      <h2>{{ film.title }}</h2>
      <p>
        genres :
        <span v-for="genre in film.genres" :key="genre">
          {{ genre }}
        </span>
      </p>
      <p>note : {{ film.rating }}/10</p>
    </div>

    <h1>ajouter un film</h1>
    <p>
      <label for="titre">titre </label>
      <input id="titre" v-model="titre" type="text" name="titre" />
    </p>
    <p>
      <label for="categories">genres </label>
      <input
        id="categories"
        v-model="categories"
        type="text"
        name="categories"
      />
    </p>
    <p>
      <label for="note">note </label>
      <input id="note" v-model="note" type="text" name="note" />
    </p>
    <p>
      <label for="review">review </label>
      <input id="review" v-model="revue" type="textarea" name="review" />
    </p>
    <p>
      <label for="desc">description </label>
      <input id="desc" v-model="desc" type="textarea" name="desc" />
    </p>

    <p>
      <button type="button" @click="addFilm">ajouter le film</button>
    </p>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {},
  methods: {
    addFilm() {
      let newfilm = Object.assign({}, this.films[0]);
      newfilm.id = this.films.length + 1;
      newfilm.title = this.titre;
      newfilm.genres = [this.categories];
      newfilm.rating = this.note;
      newfilm.review = this.revue;
      newfilm.description = this.desc;
      this.films.push(newfilm);
    },
  },

  computed: {
    comptage: function () {
      return this.films.length;
    },
  },
  data: function () {
    return {
      title: "Bienvenue sur VueFlix !",
      selected: "",
      titre: "",
      categories: "",
      note: "",
      revue: "",
      desc: "",

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
          genres: ["drame"],
          rating: 8.8,
          review:
            "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description:
            "Le film, qui relate une histoire originale inédite sur grand écran, se focalise sur la figure emblématique de l’ennemi juré de Batman. Il brosse le portrait d’Arthur Fleck, un homme sans concession méprisé par la société. ",
        },
      ],
    };
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
