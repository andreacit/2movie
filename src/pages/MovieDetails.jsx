import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();

  return (
    <section aria-labelledby="movie-title">
      <Link to="/">Volver al catálogo</Link>
      <h1 id="movie-title">Ficha de película</h1>
      <p>ID de TMDB recibido desde la ruta: {movieId}</p>
    </section>
  );
}
