export async function get(path, signal) {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY?.trim();

  if (!apiKey) {
    throw new Error('Falta configurar la clave de TMDB.');
  }

  const url = new URL(`https://api.themoviedb.org/3${path}`);
  url.searchParams.set('api_key', apiKey);
  url.searchParams.set('language', 'es-MX');

  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`TMDB respondió con un error (${response.status}).`);
  }

  return response.json();
}
