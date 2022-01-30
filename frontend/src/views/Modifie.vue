<template>
<Header
  title="VueJS Movie : Modifie un film
"
/>
<main>
    <modifyMovie />
  </main>

<Footer copyright="Copyright © " />

</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import modifyMovie from "@/components/modifyMovies.vue";

export default {
  name: "Modifie",
  components: { Header, Footer, modifyMovie },
};
</script>

