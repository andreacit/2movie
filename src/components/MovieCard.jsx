import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ movieId, title, posterPath }) {
  const [failedPoster, setFailedPoster] = useState(null);
  const showPoster = posterPath && failedPoster !== posterPath;

  return (
    <li className="movie-card">
      <Link to={`/movies/${movieId}`}>
        <div className="movie-poster">
          {showPoster ? (
            <img
              src={`https://image.tmdb.org/t/p/w342${posterPath}`}
              alt=""
              loading="lazy"
              onError={() => setFailedPoster(posterPath)}
            />
          ) : (
            <span>Sin póster</span>
          )}
        </div>
        <h2>{title}</h2>
      </Link>
    </li>
  );
}
