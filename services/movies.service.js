// Data storage (en memoria)
let movies = [];

/**
 * Servicio para operaciones específicas de búsqueda
 */

// Buscar películas por nombre (búsqueda parcial)
export const search = (name) => {
  return movies.filter(movie => 
    movie.name.toLowerCase().includes(name.toLowerCase())
  );
};

// Exportar el array para que el controller pueda acceder directamente
export { movies };
