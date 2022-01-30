<template>

  <form class="newMovie" method="post">
<div class="film" v-for="movie in movies" :key="movie">
  <p> {{movie}}  </p> 
  </div>

    <h2>Modifier le film</h2>
    <label for="createTitle">Titre du film (requis):</label>
    <input
      type="text"
      placeholder="The Father"
      name="createTitle"
      id="createTitle"
    />

    <label for="createYear">Année du film :</label>
    <input type="text" placeholder="2020" name="createYear" id="createYear" />

    <label for="createRuntime">Durée du film en minutes (requis) :</label>
    <input
      type="text"
      placeholder="90"
      name="createRuntime"
      id="createRuntime"
    />

    <label for="creatGenre">Genre (fiction, scify, ...) :</label>
    <input
      type="text"
      placeholder="fiction, scify, ..."
      name="creatGenre"
      id="creatGenre"
    />
    <label for="createDirector">Réalisateur du film (requis) :</label>
    <input
      type="text"
      placeholder="Florian Zeller"
      name="createDirector"
      id="createDirector"
    />
    <label for="createActors">Acteur du film :</label>
    <input
      type="text"
      placeholder="Anthony Hopkins, Olivia Colman, Mark Gatiss"
      name="createActors"
      id="creatActors"
    />
    <label for="createPlot">Intrigue :</label>
    <textarea
      type="text"
      placeholder="THE FATHER raconte la trajectoire ..."
      name="createPlot"
      id="createPlot"
      cols="40"
      rows="5"
    />
    <label for="createPosterUrl">URL de l'affiche du film :</label>
    <input
      type="url"
      placeholder="https://media.senscritique.com/media/000020043579/160/The_Father.jpg"
      name="createPosterUrl"
      id="createPosterUrl"
    />
    <input
      type="submit"
@click="modifyMovie"

      value="Envoyer"
      aria-label="Envoyer formulaire"
    />
    <a href=http://localhost:8080/> Back </a>
  </form>
</template>

<script>
export default {
name: "modifyMovies", data() { return { movies: [], }; },


methods: {

modifyMovie: function (e) {


      e.preventDefault();
const url = window.location.pathname; const ID =
url.substring(url.lastIndexOf('/') + 1);


      // BUG AVEC GENRE ET ACTOR

      const title = document.getElementById("createTitle").value;
      const year = document.getElementById("createYear").value;
      const runtime = document.getElementById("createRuntime").value;
      // const genre = document.getElementById("createGenre").value;
      const director = document.getElementById("createDirector").value;
      //const actors = document.getElementById("createActors").value;
      const plot = document.getElementById("createPlot").value;
      const posterUrl = document.getElementById("createPosterUrl").value;

      let data = {
id: ID,

        title: title,
        year: year,
        runtime: runtime,
        // genre: genre,
        director: director,
        //actors: actors,
        plot: plot,
        posterUrl: posterUrl,
      };

fetch("http://localhost:3000/api/movies/" + ID, { method: "put",

        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
.then(() => {location.href = "http://localhost:8080/"; }).then(() =>
{alert("Success")})

        .catch((error) => alert(error.message));
    },
},


};
</script>
