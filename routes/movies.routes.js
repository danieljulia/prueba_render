import express from 'express';
import * as movieController from '../controllers/movies.controller.js';

const router = express.Router();

// Rutas usando los controllers
router.get('/search', movieController.searchMovies);
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

export default router;
