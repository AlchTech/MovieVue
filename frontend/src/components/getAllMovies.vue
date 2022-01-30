<template>
  <div class="films">
    <div class="film" v-for="movie in movies" :key="movie">
<button @click="deleteMovie(movie.id)">Supprimer</button>

      <h3>{{ movie.title }}</h3>
      <img v-bind:src="movie.posterUrl" alt="" />
      <span>{{ movie.director }} </span>

      <span>{{ movie.year }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "getAllMovies",
  data() {
    return { movies: [] };
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
}

img {
  justify-content: center;
  width: 400px;
  height: 600px;
}
</style>
