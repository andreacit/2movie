# 2movie · Práctica 7

## Integrante

Andrea Citlalli Andrade Rico · Modalidad individual

Desarrollo de aplicaciones web en la nube y móviles · CUCEI, Universidad de Guadalajara · 2026B

## Objetivo

Desarrollar una aplicación que permita explorar un catálogo de películas y consultar sus fichas. La práctica combina el consumo de una API, la navegación con React Router y el flujo de publicación de un proyecto versionado en GitHub.

## Tecnologías

- **React y Vite** para construir y compilar la aplicación.
- **React Router DOM** para navegar entre el catálogo y las fichas.
- **CSS y Google Fonts** para el diseño adaptable y la tipografía.
- **TMDB API v3** para consultar películas y obtener los pósteres.
- **Bun** para instalar las dependencias y ejecutar los scripts.
- **Git y GitHub** para registrar los avances y revisarlos en pull requests.
- **Netlify** como plataforma de despliegue.

## Estructura del proyecto

| Archivo o carpeta | Función |
| --- | --- |
| `src/main.jsx` y `src/App.jsx` | Entrada de React y estructura común de la aplicación. |
| `src/routers/` | Configuración de las rutas. |
| `src/pages/` | Vistas del catálogo y de la ficha de película. |
| `src/components/` | Cuadrícula, tarjetas y componente de póster reutilizable. |
| `src/services/httpClient.js` | Cliente para las consultas a TMDB. |
| `src/img/` | Escudo de CUCEI. |
| `src/index.css` | Estilos generales y adaptables. |
| `public/_redirects` y `netlify.toml` | Reescritura de rutas y configuración del despliegue. |

## Instalación y ejecución local

Necesitas Git, Bun y una API key v3 de TMDB.

```bash
git clone https://github.com/andreacit/2movie.git
cd 2movie
bun install --frozen-lockfile
cp .env.example .env
```

Abre `.env` y asigna tu clave a `VITE_TMDB_API_KEY`. Luego ejecuta:

```bash
bun run dev
```

Abre la dirección que indique Vite. Para probar la versión de producción en local, ejecuta `bun run build` y luego `bun run preview`.

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Catálogo de películas populares con póster y título. |
| `/movies/:movieId` | Ficha de película con póster, título, año, duración, géneros y sinopsis según disponibilidad. |

## API utilizada

[The Movie Database (TMDB)](https://www.themoviedb.org/) proporciona los datos y los pósteres. El catálogo consulta `/discover/movie` por popularidad y la ficha consulta `/movie/{movieId}`. Las peticiones usan el idioma `es-MX`.

## Funcionamiento

Al abrir 2movie aparece una cuadrícula de películas. Al seleccionar una tarjeta, la URL cambia y la ficha consulta los datos de esa película. El enlace «Volver» regresa al catálogo. La interfaz muestra mensajes durante la carga y cuando hay un error, y ofrece un texto de respaldo si una película carece de póster o sinopsis.

## Repositorio y despliegue

- GitHub: [andreacit/2movie](https://github.com/andreacit/2movie).
- Netlify: enlace pendiente de la primera publicación.

Para desplegar, importa el repositorio en Netlify, selecciona `main` como rama de producción y agrega `VITE_TMDB_API_KEY` en las variables de entorno de compilación. El archivo `netlify.toml` fija el comando de compilación y el directorio `dist`. La regla de `public/_redirects` permite abrir o recargar una ficha por su URL directa.

El archivo `.env` está excluido de Git. Vite incorpora las variables con prefijo `VITE_` que usa la aplicación al código que se entrega al navegador.

## Conclusiones

La separación entre el catálogo, las fichas y el cliente de TMDB permite reutilizar componentes y mantener las consultas en un solo lugar. Las rutas con un ID permiten compartir cada ficha mediante su propia URL. El historial de GitHub documenta la evolución del proyecto desde la base de React hasta el catálogo y sus detalles.
