import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MoviePoster from '../components/MoviePoster';
import { get } from '../services/httpClient';

function MovieInfo({ movieId }) {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    get(`/movie/${encodeURIComponent(movieId)}`, signal)
      .then(data => {
        if (!signal.aborted) setMovie(data);
      })
      .catch(error => {
        if (!signal.aborted) setError(`No pudimos cargar la ficha. ${error.message}`);
      });

    return () => controller.abort();
  }, [movieId]);

  if (error) return <p role="alert">{error}</p>;
  if (!movie) return <p role="status">Cargando ficha…</p>;

  const year = movie.release_date?.slice(0, 4);
  const duration = movie.runtime > 0 ? `${movie.runtime} min` : null;
  const metadata = [year, duration].filter(Boolean).join(' · ');

  return (
    <article className="movie-detail" aria-labelledby="movie-title">
      <MoviePoster path={movie.poster_path} width={500} alt={`Póster de ${movie.title}`} loading="eager" />
      <div>
        <h1 id="movie-title">{movie.title}</h1>
        {metadata && <p className="movie-meta">{metadata}</p>}
        {movie.genres?.length > 0 && (
          <ul className="movie-genres" aria-label="Géneros">
            {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        )}
        <h2>Sinopsis</h2>
        <p className="movie-overview">{movie.overview?.trim() || 'Sinopsis no disponible.'}</p>
      </div>
    </article>
  );
}

export default function MovieDetails() {
  const { movieId } = useParams();

  return (
    <>
      <Link className="movie-back-link" to="/" aria-label="Volver al catálogo">
        <span aria-hidden="true">←</span> Volver
      </Link>
      <MovieInfo key={movieId} movieId={movieId} />
    </>
  );
}
