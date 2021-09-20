<template>
  <div id="MovieDetail">
    <div class="header">
      <h2>{{ film.title }}</h2>
      <p>
        genres :
        <span v-for="genre in film.genres" :key="genre">
          {{ genre }}
        </span>
      </p>
      <p>
        note :
        <v-rating
          hover
          length="10"
          readonly
          :size="screenSize"
          :value="film.rating"
        ></v-rating>
      </p>
    </div>
    <div class="texte">
      <div class="description">
        <h2>Description</h2>
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
export default {
  name: "MovieDetail",
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
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  .description {
    box-sizing: border-box;
    padding: 15px;
    width: 49%;
    text-align: center;
    padding-top: 30px;
    border: solid black 1px;
    border-radius: 25px;
    background-color: #0d646b;
  }
  .review {
    box-sizing: border-box;
    padding: 15px;
    width: 49%;
    text-align: center;
    padding-top: 30px;
    border: solid black 1px;
    background-color: #0d646b;
    border-radius: 25px;
  }
  p {
    font-size: 1.5em;
    display: inline;
  }
}
.header {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  height: 100%;
  width: 70%;
  text-align: center;
  border: solid black 1px;
  background-color: #0d646b;
  border-radius: 25px;
}
</style>