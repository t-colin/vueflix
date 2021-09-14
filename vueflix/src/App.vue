<template>
  <div id="app" data-app>
    <div class="ma-12 pa-12">
      <v-card>
        <v-navigation-drawer permanent expand-on-hover>
          <v-list>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title"> VueFlix </v-list-item-title>
                <v-list-item-subtitle>Barre de navigation</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list nav dense>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                ><router-link to="/Films"
                  >Mes films</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                ><router-link to="/"
                  >Page d'acceuil</router-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
export default {
  name: "App",
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
  color: rgb(52, 92, 221);
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
.ma-12 {
  position: absolute;
}
.Movie {
  background-color: #0d646b;
  width: 70%;
  height: 170px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-top: 30px;
  border: solid black 1px;
  box-sizing: content-box;
}
.detail {
  box-sizing: border-box;
  margin-right: 5px;
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
