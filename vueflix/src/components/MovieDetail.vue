<template>
  <div id="MovieDetail">
    <Movie :film="this.film"></Movie>
    <div class="texte">
      <div class="description">
        <h2>description</h2>
        <p>{{ film.description }}</p>
      </div>
      <div class="review">
        <h2>Review</h2>
        <p>{{ film.review }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Movie from "./Movie";
export default {
  name: "MovieDetail",
  components: { Movie },
  data() {
    return {
      categories: [],
      id: 0,
      film: null,
    };
  },
  filters: {
    idToGenre: function (val) {
      for (let el of this.categories) {
        if (val == el.id) {
          return (val = el.name);
        } else {
          return val;
        }
      }
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.film = this.$route.params.film;
  },
};
</script>
<style lang="scss">
#MovieDetail .detail {
  display: none;
}
.texte {
  box-sizing: content-box;
  width: 70%;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border: solid black 1px;
  margin-bottom: 20px;
  background-color: #0d646b;
  .description {
    box-sizing: border-box;
    padding: 15px;
    height: 100%;
    width: 50%;
    text-align: center;
    padding-top: 30px;
    border: solid black 1px;
  }
  .review {
    box-sizing: border-box;
    padding: 15px;
    height: 100%;
    width: 50%;
    text-align: center;
    padding-top: 30px;
    border: solid black 1px;
  }
  p {
    font-size: 1.5em;
  }
}
</style>