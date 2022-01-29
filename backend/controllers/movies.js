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

exports.createMovie = (req, res, next) => {

};

exports.modifyMovie = (req, res, next) => {

};

exports.deleteMovie = (req, res, next) => {

};