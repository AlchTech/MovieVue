//TODO: Routes stuff.js (Evenement)
// import Express
const express = require('express');
const router = express.Router();

const movieCtrl = require('../controllers/movies');

// Evenement CRUD Article
router.get('/', movieCtrl.getAllMovie); 
router.post('/', movieCtrl.createMovie); 
router.put('/:id', movieCtrl.modifyMovie); 
router.delete('/:id', movieCtrl.deleteMovie); 

// Export routes dans APP.JS
module.exports = router;