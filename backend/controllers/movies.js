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

exports.getOneMovie = (req, res, next) => {
	db.findbyid()
		.then((films) => {
			res.status(200).json(films);
		})
		.catch((error) => {
			res.status(400).json({
				error: error,
			});
		});
};

// CREER LA FUNCTION CREATE DANS ../MODELS/MOVIE.JS
exports.createMovie = (req, res, next) => {
	const movieObject = req.body;
	const movie = ({
    "title": movieObject.title,
    "year": movieObject.year,
    "runtime": movieObject.runtime,
    //genres": movieObject.genres,
    "director": movieObject.director,
    // // "actors": movieObject.actors,
    "plot": movieObject.plot,
    "posterUrl": movieObject.posterUrl
	})
	db.add(movie);
};

exports.modifyMovie = (req, res, next) => {
	db.findById({ _id: req.params.id }).then((movie) => {
		console.log(movie)
	})

};

// CREER LA FUNCTION DELETE DANS ../MODELS/MOVIE.JS
exports.deleteMovie = (req, res, next) => {
	db.destroy({ _id: req.params.id }).then(() => res.status(200).json({ message: 'Objet supprimé !' }))
					.catch((error) => res.status(400).json({ error }));
};