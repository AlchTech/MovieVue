<template>
<Header title="VueJS Movie : List" />
<main></main>
<Footer
  copyright="Copyright ©
"
/>

</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'; import Footer from
'@/components/Footer.vue';


export default {
  name: 'Home',
components: { Header, Footer }, }

</script>
<style scoped>
main {
  background-color: #262626;
  padding-block: 26%;
}
</style>

