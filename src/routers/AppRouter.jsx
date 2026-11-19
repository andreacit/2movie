import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import MovieDetails from '../pages/MovieDetails';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      <Route path="*" element={
        <>
          <h1>Página no encontrada</h1>
          <Link to="/">Volver al catálogo</Link>
        </>
      } />
    </Routes>
  );
}
