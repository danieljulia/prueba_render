# Express API with Routes

API REST usando Express Router para organizar las rutas de manera modular.


## Es una implementación de la API REST de películas de la carpeta `express_api` usando Express Router para organizar las rutas de manera modular. Controladores y servicios separados.

Se ha definido un servicio para buscar películas por nombre.
Para ello se ha creado un nuevo endpoint: `GET /api/movies/search?q=matrix`
El parámetro `q` es obligatorio y se valida en el controlador.


## Estructura del Proyecto

```
express_api_routes/
├── index.js                       # Servidor principal
├── routes/
│   └── movies.routes.js          # Definición de rutas
├── controllers/
│   └── movies.controller.js      # Lógica de negocio y validaciones
├── services/
│   └── movies.service.js         # Acceso a datos (CRUD)
└── package.json
```

## Endpoints

- `GET /api/movies` - Obtener todas las películas
- `GET /api/movies/search?q=matrix` - **Buscar películas por nombre (usa Service)**
- `GET /api/movies/:id` - Obtener una película por índice
- `POST /api/movies` - Crear una película
- `PUT /api/movies/:id` - Actualizar una película
- `DELETE /api/movies/:id` - Eliminar una película
