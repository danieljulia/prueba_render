import { movies, search } from '../services/movies.service.js';

// GET - obtener todas las películas
export const getAllMovies = (req, res) => {
  res.json(movies);
};

// GET - obtener una película por índice
export const getMovieById = (req, res) => {
  const id = req.params.id;
  const movie = movies[id];
  
  if (!movie) {
    return res.status(404).json({ error: 'Película no encontrada' });
  }
  
  res.json(movie);
};

// POST - crear una película
export const createMovie = (req, res) => {
  const movie = req.body;
  movies.push(movie);
  res.status(201).json(movie);
};

// PUT - actualizar una película por índice
export const updateMovie = (req, res) => {
  const id = req.params.id;
  
  if (!movies[id]) {
    return res.status(404).json({ error: 'Película no encontrada' });
  }
  
  movies[id] = req.body;
  res.json(movies[id]);
};

// DELETE - eliminar una película por índice
export const deleteMovie = (req, res) => {
  const id = req.params.id;
  
  if (!movies[id]) {
    return res.status(404).json({ error: 'Película no encontrada' });
  }
  
  const eliminado = movies.splice(id, 1);
  res.json(eliminado[0]);
};

// GET - buscar películas por nombre (USA EL SERVICE)
export const searchMovies = (req, res) => {
  const { q } = req.query;
  
  if (!q) {
    return res.status(400).json({ error: 'Parámetro de búsqueda "q" es requerido' });
  }
  
  // Aquí usamos el service para la búsqueda
  const results = search(q);
  res.json(results);
};
