import React, { useState } from 'react';

export default function MoviePoster({ path, width = 342, alt = '', loading = 'lazy' }) {
  const [failedPath, setFailedPath] = useState(null);

  return (
    <div className="movie-poster">
      {path && path !== failedPath ? (
        <img
          src={`https://image.tmdb.org/t/p/w${width}${path}`}
          alt={alt}
          loading={loading}
          onError={() => setFailedPath(path)}
        />
      ) : (
        <span>Sin póster</span>
      )}
    </div>
  );
}
