import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { get } from '../services/httpClient';

export default function MovieGrid() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    get('/discover/movie?sort_by=popularity.desc&include_adult=false', signal)
      .then(data => {
        if (!signal.aborted) setMovies(data.results);
      })
      .catch(error => {
        if (!signal.aborted) {
          setError(`No pudimos cargar el catálogo. ${error.message}`);
        }
      });

    return () => controller.abort();
  }, []);

  if (error) return <p role="alert">{error}</p>;
  if (!movies) return <p role="status">Cargando películas…</p>;
  if (!movies.length) return <p>No hay películas disponibles.</p>;

  return (
    <ul className="movie-grid">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
        />
      ))}
    </ul>
  );
}
