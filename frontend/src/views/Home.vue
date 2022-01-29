<template>
<Header title="VueJS Movie : List" />
<main>
  <getAllMovies />
</main>

<Footer
  copyright="Copyright ©
"
/>

</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'; import Footer
from'@/components/Footer.vue'; import getAllMovies from
"@/components/getAllMovies.vue";



export default {
  name: 'Home',
components: { Header, Footer, getAllMovies}, }


</script>

<style scoped>
main {
  background-color: #262626;
padding-block: 2%;

}
</style>

