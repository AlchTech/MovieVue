<template>
<Header title="VueJS Movie : Ajoute un film" />

<main>
<newMovies />


</main>

<Footer copyright="Copyright ©" />


</template>

<script>
// @ is an alias to /src import Header from '@/components/Header.vue'; import
import Footer from'@/components/Footer.vue'; import Header
from'@/components/Header.vue'; import newMovies from
"@/components/newMovies.vue"; export default { name: 'Home', components: {
Header, Footer, newMovies}, }


</script>

<style scoped></style>
