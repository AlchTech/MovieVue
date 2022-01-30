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
    <a href=http://localhost:8080/> Back </a>

  </form>

</template>

<script>
export default {
name: "newMovies",

methods: {

createMovie: function() {    

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

  const controller = new AbortController()
  const signal = controller.signal
        console.log('Now fetching');
        var urlToFetch = "http://localhost:3000/api/movies/";

        fetch(urlToFetch, {
                method: 'post',
                signal: signal,
                headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                },
          body: JSON.stringify(data),
            })
            .then(function() {
                console.log(`Fetch complete. (Not aborted)`);
            }).catch(function(err) {
                console.error(` Err: ${err}`);
            });
    },
abortFetching: function() {    
  const controller = new AbortController()
        console.log('Now aborting');
        // Abort.
        controller.abort()
    },



// BUG AVEC GENRE ET ACTOR



// BUG Fetch ne veut plus fonctionné (faut trouver l'ereur, mais sur le reseau

  },
};
</script>


<style>
main {
  background-color: #262626;
  padding-block: 5%;
}
.newMovie {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-inline: 20%;
  border-radius: 1rem;
  color: white;
  background-color: #76060c;
  padding-block-end: 5%;
}
textarea {
  margin-block: 2%;
  width: 60%;
  padding-block: 2%;
  border-radius: 1rem;
  text-align: center;
}

input {
  margin-block: 2%;
  width: 60%;
  padding-block: 2%;
  border-radius: 1rem;
  text-align: center;
}
input[type="submit"] {
  width: 61%;
}
</style>
