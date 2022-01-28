<template>
  <header>
    <h1>{{ title }}</h1>
    <router-link to="/Ajoute"><p class="link">Ajouter un filme</p></router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: { title: String },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #76060c;
  padding-block: 10%;
}
h1 {
  color: #262626;
}
.link {
  color: #262626;
  margin-block-start: 5%;
  font-size: 1.4rem;
}
</style>
