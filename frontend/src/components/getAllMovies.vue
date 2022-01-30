<template>
  <div class="films">
    <div class="film" v-for="movie in movies" :key="movie">
    <div class="film_choice">
<button @click="deleteMovie(movie.id)">Supprimer</button>

<router-link
  :to="{ path: '/Modifie/' + movie.id }" class="link">Modifier</router-link>

    </div>

      <h3>{{ movie.title }}</h3>
      <img v-bind:src="movie.posterUrl" alt="" />
<span>{{ movie.director }} </span>



      <span>{{ movie.year }} </span>
    </div>
  </div>
<!-- <getAllMovies v-bind:movieId="movie.id" /> -->

</template>

<script>
export default {
  name: "getAllMovies",
  data() {
return { movies: [], };

  },
methods: { deleteMovie: function(id) { fetch("http://localhost:3000/api/movies/"
+ id, { method: "delete"}) }, },

  created() {
    // Simple GET request using fetch
    fetch("http://localhost:3000/api/movies")
      .then((res) => res.json())
      .then((res) => this.movies.push(...res));
},



};
</script>

<style>
.films {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.film {
  margin-block: 5%;
  background-color: #76060c;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
border-radius: 1rem; overflow: hidden;

}
.film_choice { display: flex; justify-content: space-around; width: 100%;} .link
{ background-color : white; padding: 1%; }


img {
  justify-content: center;
  width: 400px;
  height: 600px;
}
.link { background-color : #ffffff; color: black; }

</style>
