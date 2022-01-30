<template>
  <header>
<h1>{{ title }}</h1>


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

</style>
