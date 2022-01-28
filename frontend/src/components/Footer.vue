<template>
  <footer>
    <span>{{ copyright }}</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: { copyright: String },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background: #76060c;
  padding-block: 5%;
  color: #262626;
}
span {
  font-size: 1.5rem;
}
</style>
