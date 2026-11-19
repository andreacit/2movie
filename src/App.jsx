import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRouter from './routers/AppRouter';

export default function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="2movie, inicio">
          <span>2</span>movie
        </Link>
        <nav aria-label="Navegación principal">
          <Link to="/">Catálogo</Link>
        </nav>
      </header>

      <main className="site-content">
        <AppRouter />
      </main>

      <footer className="site-footer">
        <strong>Andrea Citlalli Andrade Rico</strong>
        <p>Desarrollo de aplicaciones web en la nube y móviles · Profesor Zeus Emanuel Gutiérrez Cobian</p>
        <p>CUCEI · Universidad de Guadalajara · 2026B</p>
      </footer>
    </BrowserRouter>
  );
}
