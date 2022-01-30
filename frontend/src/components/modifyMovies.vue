<template>
  <form class="newMovie">
    <h2>Ajouter un film</h2>
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
      @click="createMovie"
      value="Envoyer"
      aria-label="Envoyer formulaire"
    />
    <input
      type="submit"
      @click="oneMovie"
      value="Envoyer"
      aria-label="Envoyer formulaire"
    />
  </form>
</template>

<script>
export default {
  name: "newMovies",

  methods: {
    oneMovie: function (req) {
      alert(req.params);
    },

    createMovie: function (e) {
      e.preventDefault();

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
        title: title,
        year: year,
        runtime: runtime,
        // genre: genre,
        director: director,
        //actors: actors,
        plot: plot,
        posterUrl: posterUrl,
      };

      fetch("http://localhost:3000/api/movies/", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(() => {
          alert("Article enregistrée !");
          location.reload();
        })
        .catch((error) => alert(error.message));
    },
  },
};
</script>
