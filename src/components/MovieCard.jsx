import React from 'react';
import { Link } from 'react-router-dom';
import MoviePoster from './MoviePoster';

export default function MovieCard({ movieId, title, posterPath }) {
  return (
    <li className="movie-card">
      <Link to={`/movies/${movieId}`}>
        <MoviePoster path={posterPath} />
        <h2>{title}</h2>
      </Link>
    </li>
  );
}
