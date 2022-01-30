<template>
<Header title="VueJS Movie : List" />
<main>
<router-link to="/Ajoute"><p class="link">Ajouter un filme</p></router-link>

  <getAllMovies />
</main>

<Footer copyright="Copyright © " />


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
.link { background-color : #76060c; color: white; margin-block-start: 5%; width:
20%; font-size: 1.4rem; margin: auto; padding: 1% }

</style>

