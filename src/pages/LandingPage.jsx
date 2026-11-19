import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <section aria-labelledby="catalog-title">
      <h1 id="catalog-title">Catálogo</h1>
      <p>Elige una película para abrir su ficha.</p>
      <ul className="preview-list">
        <li><Link to="/movies/157336">Ficha de prueba de Interestelar</Link></li>
        <li><Link to="/movies/438631">Ficha de prueba de Dune</Link></li>
      </ul>
    </section>
  );
}
