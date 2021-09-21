<template>
  <div class="bienvenue">
    <h1>Bienvenue dans votre application VueFlix !</h1>
    <p>Sélectionnez une action dans la barre de navigation pour commencer</p>
  </div>
</template>

<script>
export default {
  name: "Acceuil",
};
</script>
<style lang="scss">
@media screen and (max-width: 450px) {
  .bienvenue {
    width: 69%;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>