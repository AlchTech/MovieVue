let db = require('../models/movies');

exports.getAllMovie = (req, res, next) => {
	db.find()
		.then((films) => {
			res.status(200).json(films);
		})
		.catch((error) => {
			res.status(400).json({
				error: error,
			});
		});
};


// BUG CREER LA FUNCTION CREATE DANS ../MODELS/MOVIE.JS + Créer une generation de l'id
exports.createMovie = (req, res, next) => {
	const movieObject = req.body;
	const movie = ({
	// "id" : movieObject.id
    "title": movieObject.title,
    "year": movieObject.year,
    "runtime": movieObject.runtime,
    //genres": movieObject.genres,
    "director": movieObject.director,
    // // "actors": movieObject.actors,
    "plot": movieObject.plot,
    "posterUrl": movieObject.posterUrl
	})
	movie.add().then(() => res.status(201).json({ message: 'Objet enregistrée !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.modifyMovie = (req, res, next) => {
	db.modify({ body: req.body}).then(() => res.status(200).json({ message: 'Objet modifié !' }))
					.catch((error) => res.status(400).json({ error }));

};

// CREER LA FUNCTION DELETE DANS ../MODELS/MOVIE.JS
exports.deleteMovie = (req, res, next) => {
	db.destroy({ id: req.params.id }).then(() => res.status(200).json({ message: 'Objet supprimé !' }))
					.catch((error) => res.status(400).json({ error }));
};