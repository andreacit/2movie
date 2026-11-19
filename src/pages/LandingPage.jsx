import React from 'react';
import MovieGrid from '../components/MovieGrid';

export default function LandingPage() {
  return (
    <section aria-labelledby="catalog-title">
      <h1 id="catalog-title">Catálogo</h1>
      <MovieGrid />
    </section>
  );
}
